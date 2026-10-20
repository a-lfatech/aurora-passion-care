import { Calendar, Users, Lock, RefreshCw, Star, Home } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const commitments = [
  { icon: Star, title: 'Personalized Support', desc: 'Care designed around the individual, not a one-size-fits-all approach.' },
  { icon: Users, title: 'Respectful Communication', desc: 'We keep families informed and involved in a way that works for them.' },
  { icon: Calendar, title: 'Flexible Scheduling', desc: 'Support when you need it, whether that is a few hours or ongoing assistance.' },
  { icon: RefreshCw, title: 'Family Collaboration', desc: 'We work alongside families as partners, not in isolation from them.' },
  { icon: Lock, title: 'Dignity & Privacy', desc: 'Every person\'s privacy and personal boundaries are respected, always.' },
  { icon: Home, title: 'Continuity of Care', desc: 'Familiar faces and consistent support where possible, because relationships matter.' },
];

export default function FamilySection() {
  const { ref, inView } = useInView();

  return (
    <section className="relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, #060d1a 0%, #08101e 100%)',
    }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.pexels.com/photos/28237726/pexels-photo-28237726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-8"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, #060d1a 0%, rgba(6,13,26,0.9) 50%, #060d1a 100%)',
        }} />
      </div>

      <div className="container-max section-padding relative" ref={ref}>
        <div className={`text-center mb-16 section-fade-in ${inView ? 'visible' : ''}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-aurora-teal" />
            <span className="text-aurora-teal text-xs font-semibold tracking-[0.3em] uppercase">For Families</span>
            <div className="h-px w-8 bg-aurora-teal" />
          </div>
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4 leading-tight">
            Your home. Your routine.<br />
            <span className="aurora-text">Your choice.</span>
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            Support is designed around the individual and the family; it is never imposed upon them. We adapt to your world, your rhythms, and what truly matters to you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {commitments.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`glass-card rounded-2xl p-6 hover:border-aurora-teal/20 transition-all duration-300 group section-fade-in ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.2)' }}>
                  <Icon className="w-5 h-5 text-aurora-turquoise" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Quote banner */}
        <div className={`relative rounded-3xl overflow-hidden section-fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(16,185,129,0.1))',
            border: '1px solid rgba(6,182,212,0.15)',
          }} />
          <div className="relative px-8 py-10 md:px-12 text-center">
            <div className="text-4xl mb-4 text-aurora-turquoise/40 font-serif leading-none">"</div>
            <p className="text-white/80 text-xl md:text-2xl font-display font-medium leading-relaxed max-w-3xl mx-auto italic">
              The goal is never just to care for people; it is to help them live fully, with dignity, in the home and community they love.
            </p>
            <div className="text-4xl mt-4 text-aurora-turquoise/40 font-serif leading-none">"</div>
            <p className="mt-4 text-aurora-teal text-sm font-semibold tracking-wider uppercase">Aurora Passion Care</p>
          </div>
        </div>
      </div>
    </section>
  );
}
