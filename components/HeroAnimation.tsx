"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+=<>~";
const SCRAMBLE_INTERVAL = 50; // ms between random char swaps
const STAGGER_DELAY = 250; // ms between each character resolving

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function HeroAnimation({ text }: { text: string }) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef<number>(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const chars = text.split("");
    const resolved = new Array(chars.length).fill(false);
    const current = chars.map((c) => (c === " " ? " " : randomChar()));

    // Mark spaces as already resolved
    chars.forEach((c, i) => {
      if (c === " ") resolved[i] = true;
    });

    // Show scrambled state immediately
    setDisplay(current.join(""));

    const startTime = performance.now();

    function tick() {
      const elapsed = performance.now() - startTime;
      let allDone = true;

      for (let i = 0; i < chars.length; i++) {
        if (resolved[i]) continue;

        const resolveAt = i * STAGGER_DELAY;
        if (elapsed >= resolveAt) {
          current[i] = chars[i];
          resolved[i] = true;
        } else {
          // Scramble: swap to random char every SCRAMBLE_INTERVAL
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
  }, [text]);

  return (
    <h1 className="font-bold text-[var(--color-text-primary)] font-mono">
      {display}
    </h1>
  );
}
