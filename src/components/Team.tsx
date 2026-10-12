import { team } from '@/data';
import { SectionTitle } from '@/components/Shared';

export default function Team() {
  return (
    <section id="equipe" className="section team-section">
      <div className="container">
        <SectionTitle eyebrow="L'équipe PhytoraSky" title="Des compétences réunies autour d'une vision" />
        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.first}>
              <div className="avatar">
                {member.first.slice(0, 1)}{member.last.slice(0, 1)}
              </div>
              <h3>{member.first}<br />{member.last}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
