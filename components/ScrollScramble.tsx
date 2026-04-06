"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+=<>~";
const SCRAMBLE_INTERVAL = 50;

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

interface Props {
  text: string;
  duration?: number;
  className?: string;
}

export default function ScrollScramble({
  text,
  duration = 1000,
  className,
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [display, setDisplay] = useState(text);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          if (!prefersReducedMotion) runScramble();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text, duration]);

  function runScramble() {
    const chars = text.split("");
    const nonSpaceCount = chars.filter((c) => c !== " ").length;
    const staggerDelay = duration / nonSpaceCount;
    const resolved = new Array(chars.length).fill(false);
    const current = chars.map((c) => (c === " " ? " " : randomChar()));

    chars.forEach((c, i) => {
      if (c === " ") resolved[i] = true;
    });

    const resolveOrder: number[] = [];
    let order = 0;
    for (let i = 0; i < chars.length; i++) {
      resolveOrder.push(chars[i] === " " ? -1 : order++);
    }

    setDisplay(current.join(""));
    const startTime = performance.now();
    let rafId: number;

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
      if (!allDone) rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }

  return (
    <h2 ref={ref} className={className}>
      {display}
    </h2>
  );
}
