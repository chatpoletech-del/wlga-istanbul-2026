export default function Header({ title, subtitle }) {
  return (
    <header className="border-b border-wlga-content-border bg-white px-6 py-4">
      {title && (
        <h1 className="font-display text-2xl tracking-wide text-sky-700">
          {title}
        </h1>
      )}
      {subtitle && (
        <p className="text-sm text-wlga-content-muted mt-0.5">{subtitle}</p>
      )}
    </header>
  );
}
