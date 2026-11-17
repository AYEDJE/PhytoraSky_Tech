import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '@/data';
import { Logo } from '@/components/Shared';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Nous contacter <ArrowRight size={16} />
          </a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
