type Props = {
  eyebrow: string;
  title: string;
  id?: string;
  as?: "h1" | "h2";
  description?: string;
};

export function SectionHeading({ eyebrow, title, id, as: Tag = "h2", description }: Props) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <Tag id={id} className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        {title}
      </Tag>
      {description && <p className="mt-4 max-w-2xl text-muted">{description}</p>}
    </div>
  );
}
