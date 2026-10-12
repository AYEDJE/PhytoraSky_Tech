import { ArrowDown, ArrowRight, Radar, ShieldCheck, Target } from 'lucide-react';
import { images } from '@/data';

export default function Hero() {
  return (
    <section id="accueil" className="hero-section">
      <div className="hero-shape hero-shape-top" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Une technologie pensée au Togo</span>
          <h1>Le ciel au service d'une agriculture <em>plus intelligente.</em></h1>
          <p>
            PhytoraSky développe un drone intelligent multifonction pour relever
            les défis agricoles et environnementaux du Togo grâce à l'intelligence
            artificielle.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#solution">
              Découvrir la solution <ArrowRight size={18} />
            </a>
            <a className="button button-ghost" href="#projet">
              Notre vision <ArrowDown size={18} />
            </a>
          </div>
          <div className="hero-proof">
            <ShieldCheck size={18} /> Une innovation locale pour un impact durable
          </div>
        </div>
        <div className="hero-visual">
          <img src={images.hero} alt="Drone agricole au-dessus d'une plantation" />
          <div className="visual-tag tag-top">
            <Radar size={17} />
            <span>Mission active<strong>Cartographie en cours</strong></span>
          </div>
          <div className="visual-tag tag-bottom">
            <Target size={17} />
            <span>Précision<strong>Traitement ciblé</strong></span>
          </div>
        </div>
      </div>
      <div className="hero-scroll"><span>Explorer le projet</span><ArrowDown size={16} /></div>
    </section>
  );
}
