import { Check, Zap } from 'lucide-react';
import { images, innovationPoints } from '@/data';
import { SectionTitle } from '@/components/Shared';

export default function Innovation() {
  return (
    <section id="innovation" className="section innovation-section">
      <div className="container innovation-grid">
        <div className="innovation-photo">
          <img src={images.field} alt="Drone au-dessus d'un champ" />
          <div className="innovation-badge"><Zap size={18} /> Intelligence embarquée</div>
        </div>
        <div>
          <SectionTitle eyebrow="04 · L'innovation" title="Une conception avancée, utile et responsable" />
          <ul className="check-list">
            {innovationPoints.map((item) => (
              <li key={item}><Check size={17} />{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
