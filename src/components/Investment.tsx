import { Map, Radar, Target, Zap, type LucideIcon } from 'lucide-react';
import { investmentItems } from '@/data';
import { SectionTitle } from '@/components/Shared';

const iconMap: Record<string, LucideIcon> = {
  Radar, Target, Zap, Map,
};

export default function Investment() {
  return (
    <section className="section investment-section">
      <div className="container investment-grid">
        <div>
          <SectionTitle eyebrow="06 · L'investissement" title="Construire les moyens d'un impact durable" />
          <p className="lead">
            Le projet nécessite un investissement dans les équipements, le logiciel et le
            déploiement sur le terrain.
          </p>
          <div className="budget">
            <span>Fonds de roulement</span>
            <strong>1 500 000 FCFA</strong>
          </div>
        </div>
        <div className="investment-list">
          {investmentItems.map((item) => {
            const Icon = iconMap[item.icon] ?? Radar;
            return (
              <div key={item.text}>
                <Icon />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
