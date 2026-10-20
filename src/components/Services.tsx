import { useState } from 'react';
import { Brain, Puzzle, Heart, Users, MessageCircle, Home, Leaf, ChevronRight, X, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const services = [
  {
    icon: Brain,
    title: "Dementia & Alzheimer's Care",
    short: 'Safety, dignity, routine, companionship and meaningful engagement for those living with memory challenges.',
    full: "Our approach to dementia and Alzheimer's care centres on maintaining the individual's sense of self, safety, and comfort. We focus on consistent routines, gentle engagement, and compassionate presence, creating an environment where your loved one feels secure and valued every day.",
    colorClass: 'from-cyan-500/10 to-teal-500/10',
    accent: '#06b6d4',
  },
  {
    icon: Puzzle,
    title: 'Autism & Special Needs Support',
    short: "Individualized support designed around each person's unique abilities, routines, comfort and independence.",
    full: "We believe that every individual has unique strengths, needs, and ways of experiencing the world. Our support is carefully tailored, respecting sensory sensitivities, established routines, and personal communication styles to help each person thrive with confidence.",
    colorClass: 'from-emerald-500/10 to-green-500/10',
    accent: '#10b981',
  },
  {
    icon: Heart,
    title: 'Personal Care',
    short: 'Thoughtful support with everyday personal-care needs while upholding dignity, privacy and respect.',
    full: "Personal care is provided with the highest levels of respect and discretion. We understand that receiving assistance is a deeply personal experience, and our caregivers approach every interaction with patience, sensitivity, and genuine care for the individual's well-being.",
    colorClass: 'from-sky-500/10 to-blue-500/10',
    accent: '#7dd3fc',
  },
  {
    icon: Users,
    title: 'Respite Care',
    short: 'Reliable support that gives family caregivers meaningful time to rest, recharge and attend to their own needs.',
    full: "Family caregivers give so much. Respite care gives you the peace of mind that your loved one is in capable, caring hands while you take time to restore your own energy and well-being. Whether for a few hours or several days, we are here when you need us.",
    colorClass: 'from-amber-500/10 to-orange-500/10',
    accent: '#f97316',
  },
  {
    icon: MessageCircle,
    title: 'Companionship',
    short: 'Meaningful conversation, shared activities, and genuine connection that reduce isolation and enrich daily life.',
    full: "Loneliness has a profound impact on well-being. Our companionship service is built around genuine human connection: shared stories, favourite activities, walks, music, and meaningful conversation that bring warmth and purpose to each day.",
    colorClass: 'from-violet-500/10 to-purple-500/10',
    accent: '#a78bfa',
  },
  {
    icon: Home,
    title: 'Live-In Care',
    short: 'Longer-duration in-home support for families requiring consistent, around-the-clock care and companionship.',
    full: "For those who need a more consistent presence, live-in care provides reassurance around the clock. Our caregivers become a trusted, familiar part of the household, offering continuity and connection that both clients and families can rely on.",
    colorClass: 'from-teal-500/10 to-emerald-500/10',
    accent: '#0d9488',
  },
  {
    icon: Leaf,
    title: 'In-Home Support',
    short: "Practical, day-to-day support that helps clients remain comfortable, organized and supported at home.",
    full: "Sometimes what's needed is practical help with the rhythms of daily life; support that keeps a home comfortable, calm and running smoothly. We work alongside clients and families to identify what matters most and provide meaningful, flexible assistance.",
    colorClass: 'from-green-500/10 to-cyan-500/10',
    accent: '#059669',
  },
];

type Service = typeof services[0];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <>
      <div
        className={`relative rounded-2xl p-6 bg-gradient-to-br ${service.colorClass} border border-white/8 hover:border-white/16 transition-all duration-300 group cursor-pointer`}
        style={{ backdropFilter: 'blur(8px)', animationDelay: `${index * 80}ms` }}
        onClick={() => setExpanded(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setExpanded(true)}
        aria-label={`Learn more about ${service.title}`}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
          style={{ background: `${service.accent}22`, border: `1px solid ${service.accent}40` }}
        >
          <Icon className="w-6 h-6" style={{ color: service.accent }} strokeWidth={1.5} />
        </div>
        <h3 className="font-display font-bold text-white text-lg mb-2 leading-snug">{service.title}</h3>
        <p className="text-white/75 text-sm leading-relaxed mb-4">{service.short}</p>
        <div className="flex items-center gap-1 text-sm font-medium" style={{ color: service.accent }}>
          Learn More
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setExpanded(false)}
          role="dialog"
          aria-modal="true"
          aria-label={service.title}
        >
          <div className="absolute inset-0 bg-midnight-950/80 backdrop-blur-sm" />
          <div
            className="relative max-w-lg w-full rounded-2xl p-8 border border-white/10 shadow-2xl"
            style={{ background: 'rgba(10,15,30,0.98)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpanded(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-white/65 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
              style={{ background: `${service.accent}22`, border: `1px solid ${service.accent}40` }}
            >
              <Icon className="w-7 h-7" style={{ color: service.accent }} strokeWidth={1.5} />
            </div>
            <h3 className="font-display font-bold text-white text-2xl mb-3">{service.title}</h3>
            <p className="text-white/70 text-base leading-relaxed mb-6">{service.full}</p>
            <a
              href="#contact"
              onClick={() => setExpanded(false)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-midnight-900 text-sm transition-opacity hover:opacity-90"
              style={{ background: `linear-gradient(135deg, ${service.accent}, #10b981)` }}
            >
              Request This Service <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="relative bg-midnight-900 section-padding overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)',
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent)',
      }} />

      <div className="container-max" ref={ref}>
        <div className={`mb-16 section-fade-in ${inView ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-aurora-teal" />
            <span className="text-aurora-teal text-xs font-semibold tracking-[0.3em] uppercase">What We Offer</span>
          </div>
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4 leading-tight">
            Care that begins with<br />
            <span className="aurora-text">understanding.</span>
          </h2>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">
            Every person and family is different. Our services are shaped around your unique situation, values, and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
