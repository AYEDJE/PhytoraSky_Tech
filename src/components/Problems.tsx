import { ChevronRight } from 'lucide-react';
import { problems } from '@/data';
import { SectionTitle } from '@/components/Shared';

export default function Problems() {
  return (
    <section className="section problems-section">
      <div className="container">
        <SectionTitle eyebrow="02 · La problématique" title="Des obstacles qui freinent les rendements" />
        <div className="problem-grid">
          {problems.map((problem) => (
            <article className="problem-card" key={problem.title}>
              <img src={problem.image} alt="" />
              <div>
                <h3>{problem.title}</h3>
                <p>{problem.text}</p>
              </div>
              <ChevronRight size={20} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
