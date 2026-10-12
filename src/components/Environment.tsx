import { Trees } from 'lucide-react';
import { environmentThreats } from '@/data';
import { SectionTitle } from '@/components/Shared';

export default function Environment() {
  return (
    <section className="section environment-section">
      <div className="container environment-grid">
        <div>
          <SectionTitle light eyebrow="08 · Demain" title="Un développement possible vers la surveillance environnementale" />
          <p>
            Notre drone pourra détecter les menaces environnementales et assurer une veille
            continue sur les écosystèmes togolais.
          </p>
        </div>
        <div className="environment-cards">
          {environmentThreats.map((item) => (
            <div key={item}>
              <Trees size={19} />
              <strong>{item}</strong>
              <span>Détection et suivi intelligent</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
