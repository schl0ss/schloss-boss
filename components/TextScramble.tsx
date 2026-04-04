"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+=<>~";
const SCRAMBLE_INTERVAL = 50;

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

interface Props {
  text: string;
  duration: number; // total animation duration in ms
  as?: "h1" | "p" | "span";
  className?: string;
}

export default function TextScramble({
  text,
  duration,
  as: Tag = "span",
  className,
}: Props) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef<number>(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const chars = text.split("");
    const nonSpaceCount = chars.filter((c) => c !== " ").length;
    const staggerDelay = duration / nonSpaceCount;

    const resolved = new Array(chars.length).fill(false);
    const current = chars.map((c) => (c === " " ? " " : randomChar()));

    // Mark spaces and punctuation-adjacent chars as pre-resolved for readability
    chars.forEach((c, i) => {
      if (c === " ") resolved[i] = true;
    });

    setDisplay(current.join(""));

    // Map each non-space char to its resolve order
    const resolveOrder: number[] = [];
    let order = 0;
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === " ") {
        resolveOrder.push(-1);
      } else {
        resolveOrder.push(order++);
      }
    }

    const startTime = performance.now();

    function tick() {
      const elapsed = performance.now() - startTime;
      let allDone = true;

      for (let i = 0; i < chars.length; i++) {
        if (resolved[i]) continue;

        const resolveAt = resolveOrder[i] * staggerDelay;
        if (elapsed >= resolveAt) {
          current[i] = chars[i];
          resolved[i] = true;
        } else {
          if (Math.floor(elapsed / SCRAMBLE_INTERVAL) % 2 === 0) {
            current[i] = randomChar();
          }
          allDone = false;
        }
      }

      setDisplay(current.join(""));

      if (!allDone) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [text, duration]);

  return <Tag className={className}>{display}</Tag>;
}
