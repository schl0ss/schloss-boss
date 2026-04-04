"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { breakTextIntoLines, type TextLine } from "@/lib/knuth-plass";

interface Props {
  children: string;
  className?: string;
}

export default function JustifiedParagraph({ children, className }: Props) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [lines, setLines] = useState<TextLine[] | null>(null);
  const [font, setFont] = useState<string>("");

  const measure = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const styles = getComputedStyle(el);
    const width = el.clientWidth;
    const fontStr = `${styles.fontWeight} ${styles.fontSize} ${styles.fontFamily.split(",")[0].trim()}`;

    if (width <= 0) return;

    setFont(fontStr);
    const result = breakTextIntoLines(children, fontStr, width);
    setLines(result);
  }, [children]);

  useEffect(() => {
    measure();

    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => measure());
    observer.observe(el);
    return () => observer.disconnect();
  }, [measure]);

  // SSR fallback: render plain text with CSS justify
  if (!lines) {
    return (
      <p ref={containerRef} className={className} style={{ textAlign: "justify", textAlignLast: "left" }}>
        {children}
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
            textAlign: line.isLast ? "left" : "justify",
          }}
        >
          {line.text}
        </span>
      ))}
    </p>
  );
}
