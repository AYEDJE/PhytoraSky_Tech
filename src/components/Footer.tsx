import { Logo } from '@/components/Shared';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Logo />
        <p>
          PhytoraSky · Drone intelligent multifonction pour l'agriculture et l'environnement.
        </p>
        <span>© 2026 PhytoraSky</span>
      </div>
    </footer>
  );
}
