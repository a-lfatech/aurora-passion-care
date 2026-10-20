import { Heart } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const journey = [
  { label: 'Finland', flag: '🇫🇮', desc: 'Nordic healthcare values rooted in dignity, equality, and deep respect for the individual.' },
  { label: 'Experience', icon: 'experience', desc: 'Years of practical care knowledge gained in one of the world\'s most trusted healthcare environments.' },
  { label: 'Compassion', icon: 'compassion', desc: 'A genuine calling to care for others, not just as a profession, but as a personal commitment.' },
  { label: 'Canada', flag: '🇨🇦', desc: 'The warmth and multicultural spirit of Calgary, Alberta: a new home and a new chapter.' },
  { label: 'Aurora Passion Care', icon: 'aurora', desc: 'The meeting point of Nordic care values and Canadian family warmth. A new dawn.' },
];

export default function FinlandStory() {
  const { ref, inView } = useInView();

  return (
    <section className="relative bg-midnight-900 section-padding overflow-hidden">
      {/* Background image with strong overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/907343/pexels-photo-907343.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="A peaceful Finnish winter forest with snow-covered trees in serene Seinäjoki, Finland"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, #080e1a 0%, rgba(8,14,26,0.6) 50%, #080e1a 100%)',
        }} />
      </div>

      {/* Aurora colour bands */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-64 opacity-8" style={{
          background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.3) 30%, rgba(16,185,129,0.2) 70%, transparent)',
          filter: 'blur(40px)',
        }} />
      </div>

      <div className="container-max relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className={`section-fade-in ${inView ? 'visible' : ''}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-aurora-teal" />
              <span className="text-aurora-teal text-xs font-semibold tracking-[0.3em] uppercase">Our Story</span>
            </div>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-6 leading-tight">
              From Nordic care values<br />
              <span className="aurora-text">to Canadian homes.</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              Aurora Passion Care draws inspiration from Finnish healthcare experience: a tradition built on equality, humanity, and deep respect for every individual's worth and dignity.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              That perspective, shaped by years of lived and professional experience in the Nordic model of care, now finds its home in Calgary, Alberta, brought together with the warmth, diversity, and spirit of Canadian families.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              The result is a care philosophy that combines the best of both worlds: structured, thoughtful, person-centred Nordic values, delivered with the warmth and closeness that defines how Canadians care for one another.
            </p>

            <div className="flex items-center gap-4">
              <img
                src="https://images.pexels.com/photos/32131624/pexels-photo-32131624.jpeg?auto=compress&cs=tinysrgb&h=200&w=300"
                alt="Rocky Mountains in Banff National Park, Alberta, Canada"
                className="w-20 h-20 rounded-xl object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-white font-semibold text-sm">Based in Calgary</p>
                <p className="text-white/65 text-xs">Alberta, Canada</p>
              </div>
            </div>
          </div>

          {/* Right: journey visualization */}
          <div className={`section-fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-3 top-6 bottom-6 w-0.5" style={{
                background: 'linear-gradient(180deg, #06b6d4, #10b981, #06b6d4)',
              }} />

              <div className="space-y-8">
                {journey.map((step, i) => (
                  <div key={step.label} className="relative flex items-start gap-4">
                    {/* Node */}
                    <div
                      className="absolute -left-5 w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 z-10"
                      style={{
                        background: i === journey.length - 1
                          ? 'linear-gradient(135deg, #06b6d4, #10b981)'
                          : 'rgba(6,182,212,0.15)',
                        border: '2px solid rgba(6,182,212,0.5)',
                      }}
                    >
                      {step.flag ? (
                        <span className="text-base">{step.flag}</span>
                      ) : step.icon === 'aurora' ? (
                        <Heart className="w-4 h-4 text-white" fill="white" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-aurora-turquoise" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pl-6 pb-2">
                      <h3 className="font-display font-bold text-white text-lg mb-1">{step.label}</h3>
                      <p className="text-white/75 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
