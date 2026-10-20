import { useEffect, type ReactNode } from 'react';
import { Phone, Mail } from 'lucide-react';
import Footer from '@/components/Footer';
import SubpageHeader from '@/components/SubpageHeader';

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  effectiveDate: string;
  documentTitle: string;
  sections: LegalSection[];
}

export default function LegalLayout({ eyebrow, title, intro, effectiveDate, documentTitle, sections }: LegalLayoutProps) {
  useEffect(() => {
    document.title = documentTitle;
    window.scrollTo(0, 0);
  }, [documentTitle]);

  return (
    <div className="bg-midnight-950 min-h-screen text-white">
      <SubpageHeader />

      <main id="main-content">
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[360px] pointer-events-none" style={{
            background: 'radial-gradient(ellipse, rgba(6,182,212,0.12), transparent 70%)',
            filter: 'blur(40px)',
          }} />
          <div className="container-max px-6 lg:px-8 py-16 md:py-24 relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-aurora-teal" />
              <span className="text-aurora-teal text-xs font-semibold tracking-[0.3em] uppercase">{eyebrow}</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-6">{title}</h1>
            <div className="text-white/80 text-lg leading-relaxed max-w-3xl">{intro}</div>
            <p className="mt-6 text-white/65 text-sm">Effective {effectiveDate}</p>
          </div>
        </section>

        <div className="container-max px-6 lg:px-8 py-16 md:py-20 grid lg:grid-cols-[240px_1fr] gap-12">
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-white/65 text-xs font-semibold tracking-[0.25em] uppercase mb-4">On this page</p>
              <ol className="space-y-2 border-l border-white/10">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block -ml-px pl-4 border-l border-transparent text-white/70 hover:text-white hover:border-aurora-turquoise text-sm leading-snug py-1 transition-colors"
                    >
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="max-w-3xl">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-28 pb-10 mb-10 border-b border-white/5 last:border-0">
                <h2 className="font-display font-bold text-2xl text-white mb-4">
                  <span className="text-aurora-turquoise mr-2">{i + 1}.</span>
                  {s.title}
                </h2>
                <div className="legal-prose">{s.body}</div>
              </section>
            ))}

            <div className="rounded-2xl p-8 border border-aurora-teal/20" style={{ background: 'rgba(6,182,212,0.05)' }}>
              <h2 className="font-display font-bold text-xl mb-2">Questions?</h2>
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                We are happy to talk through anything on this page. Reach us by phone or email during business hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:4038991572" className="flex items-center gap-2 text-aurora-turquoise font-semibold hover:underline">
                  <Phone className="w-4 h-4" /> 403-899-1572
                </a>
                <a href="mailto:care@aurorapassion.care" className="flex items-center gap-2 text-aurora-turquoise font-semibold hover:underline break-all">
                  <Mail className="w-4 h-4" /> care@aurorapassion.care
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
