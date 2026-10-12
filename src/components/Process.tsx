import { ArrowRight } from 'lucide-react';
import { processSteps } from '@/data';
import { SectionTitle } from '@/components/Shared';

export default function Process() {
  return (
    <section className="section process-section">
      <div className="container">
        <SectionTitle eyebrow="05 · La démarche" title="Du besoin au déploiement" />
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div className="process-step" key={step}>
              <span>0{index + 1}</span>
              <strong>{step}</strong>
              {index < processSteps.length - 1 && <ArrowRight className="process-arrow" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
