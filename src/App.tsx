import Contact      from '@/components/Contact';
import Context      from '@/components/Context';
import DroneAnatomy from '@/components/DroneAnatomy';
import Environment  from '@/components/Environment';
import Footer       from '@/components/Footer';
import Header       from '@/components/Header';
import Hero         from '@/components/Hero';
import Impact       from '@/components/Impact';
import Innovation   from '@/components/Innovation';
import Investment   from '@/components/Investment';
import Missions     from '@/components/Missions';
import Problems     from '@/components/Problems';
import Process      from '@/components/Process';
import RoiCalculator from '@/components/RoiCalculator';
import Solution     from '@/components/Solution';
import StatsBar     from '@/components/StatsBar';
import Team         from '@/components/Team';

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Context />
        <Problems />
        <Solution />
        <DroneAnatomy />
        <Missions />
        <Innovation />
        <Process />
        <RoiCalculator />
        <Investment />
        <Impact />
        <Environment />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
