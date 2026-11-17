import { SectionTitle } from '@/components/Shared';

export default function Context() {
  return (
    <section id="projet" className="section section-soft">
      <div className="container">
        <SectionTitle eyebrow="01 · Le contexte" title="Une agriculture essentielle, face à des défis urgents" />
        <div className="context-grid">
          <div className="context-copy">
            <p>
              L'agriculture représente près de <strong>35 à 40 % du PIB du Togo</strong> et
              emploie plus de <strong>60 % de la population active</strong>. Pourtant, les
              producteurs manquent encore d'outils rapides et précis pour protéger leurs
              cultures.
            </p>
            <p>
              PhytoraSky apporte une réponse concrète, accessible et adaptée aux réalités du
              terrain togolais.
            </p>
          </div>
          <div className="stat-cards">
            <div><strong>35–40 %</strong><span>du PIB lié à l'agriculture</span></div>
            <div><strong>60 %</strong><span>de la population active</span></div>
            <div><strong>1</strong><span>plateforme multifonction</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
