type PageVisualProps = {
  kicker: string;
  title: string;
  labels: string[];
  caption?: string;
};

export function PageVisual({ kicker, title, labels, caption }: PageVisualProps) {
  const items = labels.slice(0, 4);
  return (
    <aside className="page-visual" aria-label={`${title} visual overview`}>
      <div className="page-visual-top"><span className="visual-live-dot" />{kicker}</div>
      <div className="visual-core-wrap">
        <div className="visual-ring visual-ring-one" />
        <div className="visual-ring visual-ring-two" />
        <div className="visual-core"><strong className="brand-word">99CGS</strong><small>AI Agency</small></div>
        {items.map((label, index) => (
          <div className={`visual-node visual-node-${index + 1}`} key={`${label}-${index}`}>
            <i>{String(index + 1).padStart(2, "0")}</i><span>{label}</span>
          </div>
        ))}
      </div>
      <div className="page-visual-bottom"><strong>{title}</strong><span>{caption || "Strategy · Creative · Technology · Measurement"}</span></div>
    </aside>
  );
}