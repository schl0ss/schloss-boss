export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="font-bold text-[var(--color-text-primary)] mb-6">
      {children}
    </h2>
  );
}
