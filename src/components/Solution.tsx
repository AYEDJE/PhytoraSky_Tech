import { ArrowRight } from 'lucide-react';
import { images } from '@/data';
import { SectionTitle } from '@/components/Shared';

export default function Solution() {
  return (
    <section id="solution" className="section solution-section">
      <div className="container solution-grid">
        <div>
          <SectionTitle eyebrow="03 · La solution" title="Un drone. Quatre missions. Un même objectif." />
          <p className="lead">
            Nous proposons un drone intelligent multifonction intégrant plusieurs
            technologies d'intelligence artificielle sur une seule plateforme.
          </p>
          <a className="text-link" href="#missions">
            Explorer les missions <ArrowRight size={17} />
          </a>
        </div>
        <div className="solution-image">
          <img src={images.drone} alt="Drone pulvérisant une plantation" />
          <span>PhytoraSky<br /><small>Intelligence en mouvement</small></span>
        </div>
      </div>
    </section>
  );
}
