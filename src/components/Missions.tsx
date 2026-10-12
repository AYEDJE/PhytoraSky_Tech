import { CloudRain, Flame, Sprout, Trees, type LucideIcon } from 'lucide-react';
import { missions } from '@/data';
import { SectionTitle } from '@/components/Shared';

const iconMap: Record<string, LucideIcon> = {
  Sprout, Trees, Flame, CloudRain,
};

export default function Missions() {
  return (
    <section id="missions" className="section missions-section">
      <div className="container">
        <SectionTitle eyebrow="Les capacités" title="Un regard précis sur chaque parcelle" />
        <div className="mission-grid">
          {missions.map((mission, index) => {
            const Icon = iconMap[mission.icon] ?? Sprout;
            return (
              <article className="mission-card" key={mission.title}>
                <span className="mission-icon"><Icon /></span>
                <h3>{mission.title}</h3>
                <p>{mission.text}</p>
                <span className="mission-number">0{index + 1}</span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
