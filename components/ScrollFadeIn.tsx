"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  stagger?: number;
  delay?: number; // ms to wait before starting the fade-in
  className?: string;
}

export default function ScrollFadeIn({
  children,
  stagger = 225,
  delay = 0,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    let timer: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          if (delay > 0) {
            timer = setTimeout(() => setVisible(true), delay);
          } else {
            setVisible(true);
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <div
            key={i}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.75s ease ${i * stagger}ms, transform 0.75s ease ${i * stagger}ms`,
            }}
          >
            {child}
          </div>
        ))
      ) : (
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.75s ease, transform 0.75s ease",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
