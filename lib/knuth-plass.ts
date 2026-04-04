import { prepareWithSegments, layoutNextLine } from "@chenglou/pretext";

export interface TextLine {
  text: string;
  isLast: boolean;
}

/**
 * Uses Pretext's Unicode-aware segmentation and line breaking
 * to split text into lines that fit within maxWidth.
 * Better than CSS greedy breaking for even word spacing.
 */
export function breakTextIntoLines(
  text: string,
  font: string,
  maxWidth: number
): TextLine[] {
  const prepared = prepareWithSegments(text, font);
  const lines: TextLine[] = [];
  let cursor = { segmentIndex: 0, graphemeIndex: 0 };

  while (true) {
    const line = layoutNextLine(prepared, cursor, maxWidth);
    if (!line) break;
    lines.push({ text: line.text.trimEnd(), isLast: false });
    cursor = line.end;
  }

  if (lines.length > 0) {
    lines[lines.length - 1].isLast = true;
  }

  return lines;
}
