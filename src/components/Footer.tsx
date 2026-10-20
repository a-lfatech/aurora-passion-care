import { Phone, Mail, Globe } from 'lucide-react';

const links = {
  navigation: [
    { label: 'Home', href: '/#home' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Contact', href: '/#contact' },
  ],
  legal: [
    { label: 'Media & Downloads', href: '/media' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-midnight-950 border-t border-white/5" role="contentinfo">
      {/* Top aurora accent */}
      <div className="h-px w-full" style={{
        background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.3), rgba(16,185,129,0.2), transparent)',
      }} />

      <div className="container-max px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-3 mb-5">
              <img
                src="/apc_logo_mark.png"
                alt=""
                aria-hidden="true"
                className="w-16 h-auto block drop-shadow-[0_6px_18px_rgba(6,182,212,0.2)]"
              />
              <span className="leading-none">
                <span className="block text-2xl font-display font-extrabold tracking-tight aurora-text">AURORA</span>
                <span className="block text-sm font-bold tracking-[0.1em] text-white">PASSION CARE</span>
              </span>
            </div>
            <p className="text-white/65 text-sm italic mb-5 leading-relaxed">
              "A new dawn of human-centered care."
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Private in-home care and support for seniors, individuals with dementia, autism and special needs, and families in Calgary, Alberta.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white/60 text-xs font-semibold tracking-[0.25em] uppercase mb-5">Navigation</h3>
            <ul className="space-y-2.5">
              {links.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/65 hover:text-white text-sm transition-colors focus-visible:ring-2 focus-visible:ring-aurora-turquoise rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white/60 text-xs font-semibold tracking-[0.25em] uppercase mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:4038991572" className="flex items-start gap-3 group">
                  <Phone className="w-4 h-4 text-aurora-teal mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-white/65 group-hover:text-white text-sm transition-colors">403-899-1572</span>
                </a>
              </li>
              <li>
                <a href="mailto:care@aurorapassion.care" className="flex items-start gap-3 group">
                  <Mail className="w-4 h-4 text-aurora-teal mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-white/65 group-hover:text-white text-sm transition-colors break-all">care@aurorapassion.care</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-aurora-teal mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-white/65 text-sm">www.aurorapassion.care</span>
                </div>
              </li>
            </ul>
            <p className="mt-5 text-white/60 text-xs leading-relaxed">Calgary, Alberta, Canada</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs">
            © {new Date().getFullYear()} Aurora Passion Care. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {links.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/60 hover:text-white/75 text-xs transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
