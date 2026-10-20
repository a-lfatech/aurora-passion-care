import { Eye, Shield, Sparkles, CheckCircle } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const principles = [
  {
    icon: Eye,
    title: 'Human-Centered',
    description: 'We see the person, not just the care need. Every decision starts with understanding who someone is, what matters to them, and how they want to live.',
    accent: '#06b6d4',
  },
  {
    icon: Shield,
    title: 'Dignity',
    description: 'Every individual deserves respect, privacy and the freedom to make choices. We never lose sight of the person behind the care.',
    accent: '#10b981',
  },
  {
    icon: Sparkles,
    title: 'Compassion',
    description: 'We bring patience, kindness and genuine human connection to everything we do. Care is not just a service; it is a relationship.',
    accent: '#7dd3fc',
  },
  {
    icon: CheckCircle,
    title: 'Reliability',
    description: 'Families deserve dependable support they can trust. We show up consistently, attentively, and with care, because that consistency matters.',
    accent: '#f97316',
  },
];

export default function WhyAurora() {
  const { ref, inView } = useInView();

  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{
      background: 'linear-gradient(180deg, #060d1a 0%, #0a1220 50%, #060d1a 100%)',
    }}>
      {/* Background aurora glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{
          background: 'radial-gradient(circle, #06b6d4, transparent)',
        }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-8" style={{
          background: 'radial-gradient(circle, #10b981, transparent)',
        }} />
      </div>

      <div className="container-max section-padding py-0" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image + aurora overlay */}
          <div className={`relative section-fade-in ${inView ? 'visible' : ''}`}>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[600px]">
              <img
                src="https://images.pexels.com/photos/18509794/pexels-photo-18509794.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="A warm caregiving moment: a caregiver with senior client in a comfortable home"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(180deg, transparent 50%, rgba(6,9,26,0.8) 100%)',
              }} />
              {/* Aurora accent */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{
                background: 'linear-gradient(90deg, #06b6d4, #10b981, #7dd3fc)',
              }} />
              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card rounded-2xl px-5 py-4">
                  <p className="text-white/90 text-sm leading-relaxed italic">
                    "Quality care is not only about completing tasks. It is about listening, noticing, and helping people feel genuinely supported."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: principles */}
          <div className={`section-fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-aurora-teal" />
              <span className="text-aurora-teal text-xs font-semibold tracking-[0.3em] uppercase">Our Values</span>
            </div>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4 leading-tight">
              Care should feel<br />
              <span className="aurora-text">like family.</span>
            </h2>
            <p className="text-white/75 text-base leading-relaxed mb-10 max-w-md">
              These four principles guide every interaction, every visit, and every relationship we build with the families we serve.
            </p>

            <div className="space-y-6">
              {principles.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="flex gap-4 group">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                      style={{ background: `${p.accent}18`, border: `1px solid ${p.accent}30` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: p.accent }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-lg mb-1">{p.title}</h3>
                      <p className="text-white/75 text-sm leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
