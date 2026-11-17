import { impactGroups } from '@/data';
import { SectionTitle } from '@/components/Shared';

export default function Impact() {
  return (
    <section className="section impact-section">
      <div className="container">
        <SectionTitle eyebrow="07 · La valeur ajoutée" title="Une valeur partagée par tout l'écosystème" />
        <div className="impact-grid">
          {impactGroups.map((group) => (
            <article key={group.title}>
              <h3>Pour les {group.title}</h3>
              <p>{group.text}</p>
            </article>
          ))}
        </div>
        <p className="impact-note">
          PhytoraSky contribuera à la création d'emplois directs et indirects en favorisant
          un écosystème autour des drones, de l'intelligence artificielle et de l'agriculture
          de précision.
        </p>
      </div>
    </section>
  );
}
