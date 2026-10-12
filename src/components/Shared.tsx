export function Logo() {
  return (
    <a href="#accueil" className="brand" aria-label="PhytoraSky, accueil">
      <img src="/logo-equipe.jpeg" alt="Logo de l'équipe" className="brand-logo" />
      <span>
        <strong>PhytoraSky</strong>
        <small>Innovation agricole</small>
      </span>
    </a>
  );
}

export function SectionTitle({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className={`section-title ${light ? 'section-title-light' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}
