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
    measure();

    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => {
      hasAnimated.current = false;
      setVisibleCount(0);
      measure();
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [measure]);

  useEffect(() => {
    if (!lines || lines.length === 0 || hasAnimated.current) return;
    hasAnimated.current = true;

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
      <p ref={containerRef} className={className} style={{ visibility: "hidden" }}>
        {text}
      </p>
    );
  }

  return (
    <p ref={containerRef} className={className}>
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
