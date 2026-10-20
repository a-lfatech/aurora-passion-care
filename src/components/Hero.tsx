import { Phone, ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Aurora Passion Care: home care in Calgary"
    >
      {/* Background: dark aurora atmosphere */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/29372709/pexels-photo-29372709.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="A caregiver warmly supporting an elderly woman in her home"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(6,9,26,0.88) 0%, rgba(8,18,36,0.75) 50%, rgba(6,9,26,0.82) 100%)',
        }} />
        {/* Aurora top glow */}
        <div className="absolute top-0 left-0 right-0 h-64 pointer-events-none" style={{
          background: 'linear-gradient(180deg, rgba(6,182,212,0.12) 0%, transparent 100%)',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding pt-32 md:pt-40">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, #06b6d4)' }} />
            <span className="text-aurora-turquoise text-xs font-semibold tracking-[0.35em] uppercase">
              Calgary, Alberta, Canada
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-white leading-none mb-6">
            <span className="block text-6xl md:text-8xl lg:text-9xl aurora-text">AURORA</span>
            <span className="block text-5xl md:text-7xl lg:text-8xl text-white/90 mt-1">PASSION CARE</span>
          </h1>

          {/* Tagline */}
          <p className="text-aurora-turquoise text-lg md:text-xl font-medium tracking-wide mb-6 italic">
            "A new dawn of human-centered care."
          </p>

          {/* Supporting text */}
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mb-10">
            Compassionate in-home support that helps people live with dignity, comfort and connection,
            in the place they call home.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-midnight-900 text-base transition-all hover:opacity-90 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #10b981)' }}
            >
              Request Care
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:4038991572"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base border border-white/20 hover:border-aurora-turquoise/60 hover:bg-white/5 transition-all focus-visible:ring-2 focus-visible:ring-aurora-turquoise"
            >
              <Phone className="w-5 h-5 text-aurora-turquoise" />
              Talk to Us: 403-899-1572
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 text-white/65 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-aurora-green" />
              <span>Private In-Home Care</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-aurora-green" />
              <span>Dementia &amp; Special Needs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-aurora-green" />
              <span>Respite &amp; Live-In Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 z-10 cursor-pointer pointer-events-auto transition-colors hover:text-white/70 focus-visible:outline-none focus-visible:text-white/70"
        role="button"
        tabIndex={0}
        aria-label="Scroll to learn more"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <span className="text-xs tracking-widest uppercase">Discover</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
