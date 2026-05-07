"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { prepareWithSegments, layoutNextLine } from "@chenglou/pretext";

interface Props {
  text: string;
  stagger?: number; // ms between each line appearing
  className?: string;
}

export default function LineFadeIn({ text, stagger = 400, className }: Props) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [lines, setLines] = useState<string[] | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const hasAnimated = useRef(false);

  const measure = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const styles = getComputedStyle(el);
    const width = el.clientWidth;
    if (width <= 0) return;

    const fontWeight = styles.fontWeight;
    const fontSize = styles.fontSize;
    const fontFamily = styles.fontFamily.split(",")[0].trim().replace(/['"]/g, "");
    const font = `${fontWeight} ${fontSize} ${fontFamily}`;

    const prepared = prepareWithSegments(text, font);
    const result: string[] = [];
    let cursor = { segmentIndex: 0, graphemeIndex: 0 };

    while (true) {
      const line = layoutNextLine(prepared, cursor, width);
      if (!line) break;
      result.push(line.text.trimEnd());
      cursor = line.end;
    }

    setLines(result);
  }, [text]);

  useEffect(() => {
    let cancelled = false;

    // Measure once now (in case fonts are already loaded, e.g. cached),
    // then re-measure after webfonts settle so pretext's metrics match
    // what the browser actually renders.
    measure();
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) measure();
      });
    }

    const el = containerRef.current;
    if (!el) return;

    let resizeTimer: ReturnType<typeof setTimeout>;
    const observer = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        hasAnimated.current = false;
        setVisibleCount(0);
        measure();
      }, 150);
    });
    observer.observe(el);
    return () => {
      cancelled = true;
      observer.disconnect();
      clearTimeout(resizeTimer);
    };
  }, [measure]);

  useEffect(() => {
    if (!lines || lines.length === 0 || hasAnimated.current) return;
    hasAnimated.current = true;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setVisibleCount(lines.length);
      return;
    }

    let i = 0;
    const timer = setInterval(() => {
      i++;
      setVisibleCount(i);
      if (i >= lines.length) clearInterval(timer);
    }, stagger);

    return () => clearInterval(timer);
  }, [lines, stagger]);

  // SSR fallback
  if (!lines) {
    return (
      <p
        ref={containerRef}
        className={className}
        style={{ visibility: "hidden", textAlign: "left" }}
      >
        {text}
      </p>
    );
  }

  return (
    <p ref={containerRef} className={className} style={{ textAlign: "left" }}>
      {lines.map((line, i) => (
        <span
          key={i}
          style={{
            display: "block",
            opacity: i < visibleCount ? 1 : 0,
            transform: i < visibleCount ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          {line}
        </span>
      ))}
    </p>
  );
}
