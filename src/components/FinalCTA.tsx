import { Phone, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function FinalCTA() {
  const { ref, inView } = useInView();

  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{
      background: 'linear-gradient(180deg, #08101e 0%, #0a0f1e 100%)',
    }}>
      {/* Aurora shimmer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px]" style={{
          background: 'radial-gradient(ellipse, rgba(6,182,212,0.1) 0%, rgba(16,185,129,0.06) 50%, transparent 80%)',
          filter: 'blur(40px)',
        }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{
          background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.3), rgba(16,185,129,0.3), transparent)',
        }} />
      </div>

      <div className="container-max px-6 lg:px-8 text-center relative" ref={ref}>
        <div className={`section-fade-in ${inView ? 'visible' : ''}`}>
          <p className="text-aurora-turquoise text-sm font-semibold tracking-[0.35em] uppercase mb-6">
            A new dawn begins with care.
          </p>
          <h2 className="font-display font-bold text-white text-4xl md:text-6xl mb-6 leading-tight">
            Let's talk about how Aurora<br />
            Passion Care can{' '}
            <span className="aurora-text">support you</span><br />
            and your family.
          </h2>
          <p className="text-white/75 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            No commitment required. Just a caring conversation about what your family needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full font-bold text-midnight-900 text-base transition-all hover:opacity-90 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #10b981)' }}
            >
              Request Care
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:4038991572"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full font-semibold text-white text-base border border-white/20 hover:border-aurora-turquoise/60 hover:bg-white/5 transition-all"
            >
              <Phone className="w-5 h-5 text-aurora-turquoise" />
              403-899-1572
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
