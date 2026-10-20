import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-midnight-900/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container-max px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group rounded-lg focus-visible:ring-2 focus-visible:ring-aurora-turquoise">
              <img
                src="/apc_logo_mark.png"
                alt=""
                aria-hidden="true"
                className="w-11 md:w-14 h-auto block drop-shadow-[0_4px_12px_rgba(6,182,212,0.18)] transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <span className="leading-none">
                <span className="block text-[15px] md:text-lg font-display font-extrabold tracking-tight aurora-text">AURORA</span>
                <span className="block text-[9px] md:text-[11px] font-bold tracking-[0.08em] text-white">PASSION CARE</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors focus-visible:ring-2 focus-visible:ring-aurora-turquoise rounded"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:4038991572"
                className="flex items-center gap-2 text-white/70 hover:text-aurora-turquoise text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                403-899-1572
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-midnight-900 transition-all hover:opacity-90 focus-visible:ring-2 focus-visible:ring-aurora-turquoise"
                style={{ background: 'linear-gradient(135deg, #06b6d4, #10b981)' }}
              >
                Request Care
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2 rounded focus-visible:ring-2 focus-visible:ring-aurora-turquoise"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-midnight-950/95 backdrop-blur-lg" onClick={() => setMenuOpen(false)} />
        <nav
          className={`absolute top-16 left-0 right-0 bg-midnight-900/98 border-b border-white/5 p-6 transition-transform duration-300 ${
            menuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white text-lg font-medium py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:4038991572"
              className="flex items-center gap-2 text-aurora-turquoise font-semibold text-lg py-2 mt-2"
            >
              <Phone className="w-5 h-5" />
              403-899-1572
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-6 py-3 rounded-full text-center font-bold text-midnight-900 text-lg"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #10b981)' }}
            >
              Request Care
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile sticky call button */}
      <a
        href="tel:4038991572"
        className="fixed bottom-6 right-6 z-40 lg:hidden flex items-center gap-2 px-4 py-3 rounded-full shadow-lg font-semibold text-white text-sm"
        style={{
          background: 'linear-gradient(135deg, #0d9488, #06b6d4)',
          boxShadow: '0 4px 24px rgba(6,182,212,0.4)',
        }}
        aria-label="Call Aurora Passion Care"
      >
        <Phone className="w-4 h-4" />
        Call Us
      </a>
    </>
  );
}
