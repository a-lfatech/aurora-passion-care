import { MessageSquare, Search, FileText, Heart, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell us what you need',
    description: 'Reach out by phone, email, or our contact form. Share your situation, concerns, and what kind of support you are looking for. There is no wrong way to start.',
    accent: '#06b6d4',
  },
  {
    number: '02',
    icon: Search,
    title: "Let's understand your situation",
    description: "We'll have an open, unhurried conversation to understand the individual's needs, preferences, daily routines, and what matters most to your family.",
    accent: '#10b981',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Create a support plan',
    description: 'Together we develop a care approach that fits your unique circumstances: thoughtful, flexible, and centred around the person receiving care.',
    accent: '#7dd3fc',
  },
  {
    number: '04',
    icon: Heart,
    title: 'Begin compassionate care',
    description: "Care begins with consistency, warmth, and a genuine commitment to the individual's dignity and well-being. We're with you every step of the way.",
    accent: '#f97316',
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView();

  return (
    <section id="how-it-works" className="relative bg-midnight-900 section-padding overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)',
      }} />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 opacity-8" style={{
          background: 'radial-gradient(ellipse, rgba(16,185,129,0.6), transparent)',
          filter: 'blur(60px)',
        }} />
      </div>

      <div className="container-max relative" ref={ref}>
        <div className={`text-center mb-16 section-fade-in ${inView ? 'visible' : ''}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-aurora-teal" />
            <span className="text-aurora-teal text-xs font-semibold tracking-[0.3em] uppercase">The Process</span>
            <div className="h-px w-8 bg-aurora-teal" />
          </div>
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4 leading-tight">
            Four simple steps to<br />
            <span className="aurora-text">compassionate care.</span>
          </h2>
          <p className="text-white/75 text-lg max-w-xl mx-auto leading-relaxed">
            We make it easy to take the first step. There is no pressure, just a genuine conversation about how we can help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`relative rounded-2xl p-6 border border-white/8 hover:border-white/14 transition-all duration-300 section-fade-in ${inView ? 'visible' : ''}`}
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  transitionDelay: `${i * 100}ms`,
                  backdropFilter: 'blur(8px)',
                }}
              >
                {/* Step number */}
                <div className="text-6xl font-display font-bold mb-4 leading-none" style={{
                  color: `${step.accent}30`,
                  letterSpacing: '-0.02em',
                }}>
                  {step.number}
                </div>

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${step.accent}18`, border: `1px solid ${step.accent}35` }}
                >
                  <Icon className="w-5 h-5" style={{ color: step.accent }} strokeWidth={1.5} />
                </div>

                <h3 className="font-display font-bold text-white text-lg mb-2 leading-snug">{step.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{step.description}</p>

                {/* Connector arrow (not last) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-white/15" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-midnight-900 text-base transition-all hover:opacity-90 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #06b6d4, #10b981)' }}
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
