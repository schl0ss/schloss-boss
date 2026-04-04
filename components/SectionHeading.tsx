import ScrollScramble from "./ScrollScramble";

export default function SectionHeading({
  children,
}: {
  children: string;
}) {
  return (
    <ScrollScramble
      text={children}
      duration={1000}
      className="font-bold text-[var(--color-text-primary)] mb-6"
    />
  );
}
