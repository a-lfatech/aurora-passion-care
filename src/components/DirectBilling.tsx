import { useEffect, useRef, useState } from 'react';
import { BadgeCheck, Receipt, ClipboardCheck, CalendarCheck, HandCoins, MessageCircle, X, ArrowRight, ChevronRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const highlights = [
  { icon: BadgeCheck, label: 'Registered Alberta Blue Cross care provider' },
  { icon: Receipt, label: 'Billed directly for authorized, eligible services' },
  { icon: MessageCircle, label: 'Help understanding the process before care begins' },
];

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Confirm eligibility',
    desc: 'We talk through your situation and help you check whether you or your family member has Alberta Blue Cross coverage that may apply to in-home support.',
  },
  {
    icon: CalendarCheck,
    title: 'Authorization and approved hours',
    desc: 'Services must be authorized before care begins. Your approved service hours and program requirements set what can be billed directly.',
  },
  {
    icon: Receipt,
    title: 'We bill Alberta Blue Cross directly',
    desc: 'For authorized, eligible services within your approved hours, we submit billing to Alberta Blue Cross on your behalf, so there is less paperwork for your family.',
  },
  {
    icon: HandCoins,
    title: 'Clear communication about any balance',
    desc: 'If any service falls outside your coverage or approved hours, we explain this to you before it is provided, so there are no surprises.',
  },
];

function BillingDetails({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="billing-dialog-title"
    >
      <div className="absolute inset-0 bg-midnight-950/80 backdrop-blur-sm" />
      <div
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8 md:p-10 border border-white/10 shadow-2xl"
        style={{ background: 'rgba(10,15,30,0.98)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-white/65 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-aurora-turquoise text-xs font-semibold tracking-[0.3em] uppercase">Alberta Blue Cross</span>
        <h3 id="billing-dialog-title" className="font-display font-bold text-white text-2xl md:text-3xl mt-2 mb-3 leading-tight">
          How direct billing works
        </h3>
        <p className="text-white/80 text-base leading-relaxed mb-8">
          Our goal is to make the financial side of care feel simple and transparent. Here is what to expect when your services may be covered by Alberta Blue Cross.
        </p>

        <ol className="space-y-6 mb-8">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.3)' }}>
                  <step.icon className="w-5 h-5 text-aurora-turquoise" strokeWidth={1.5} />
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 mt-2 bg-gradient-to-b from-aurora-turquoise/40 to-transparent" />}
              </div>
              <div className="pb-2">
                <h4 className="font-display font-semibold text-white text-lg mb-1">
                  <span className="text-aurora-turquoise mr-1.5">{i + 1}.</span>{step.title}
                </h4>
                <p className="text-white/75 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="rounded-xl p-4 mb-8 border border-white/10 bg-white/[0.03]">
          <p className="text-white/75 text-sm leading-relaxed">
            Coverage and reimbursement depend on individual eligibility, authorization and applicable program requirements. Please contact Alberta Blue Cross or your plan administrator to confirm the details of your coverage.
          </p>
        </div>

        <a
          href="#contact"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-midnight-900 text-sm transition-opacity hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #06b6d4, #10b981)' }}
        >
          Ask Us About Billing <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default function DirectBilling() {
  const { ref, inView } = useInView();
  const [open, setOpen] = useState(false);

  return (
    <section id="direct-billing" aria-labelledby="direct-billing-title" className="relative bg-midnight-950 px-6 lg:px-8 py-16 md:py-20">
      <div className="container-max" ref={ref}>
        <div
          className={`section-fade-in ${inView ? 'visible' : ''} relative overflow-hidden rounded-3xl border border-aurora-turquoise/20 p-8 md:p-12`}
          style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.08), rgba(13,148,136,0.05) 50%, rgba(16,185,129,0.07))' }}
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none" style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.18), transparent 70%)',
            filter: 'blur(30px)',
          }} />

          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-aurora-teal" />
                <span className="text-aurora-teal text-xs font-semibold tracking-[0.3em] uppercase">Alberta Blue Cross Direct Billing</span>
              </div>
              <h2 id="direct-billing-title" className="font-display font-bold text-white text-3xl md:text-4xl mb-5 leading-tight">
                A convenient option for <span className="aurora-text">eligible clients.</span>
              </h2>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4">
                Aurora Passion Care is registered with Alberta Blue Cross as a care provider and can bill Alberta Blue Cross directly for authorized, eligible services, subject to the client's coverage and approved service hours.
              </p>
              <p className="text-white/75 text-base leading-relaxed">
                Coverage and reimbursement depend on individual eligibility, authorization and applicable program requirements. We can help families understand the billing process before care begins.
              </p>
            </div>

            <div>
              <ul className="space-y-3 mb-6">
                {highlights.map((h) => (
                  <li key={h.label} className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white/[0.04] border border-white/8">
                    <h.icon className="w-5 h-5 text-aurora-green flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-white/85 text-sm leading-snug">{h.label}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                <button
                  onClick={() => setOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-midnight-900 text-sm transition-opacity hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #06b6d4, #10b981)' }}
                >
                  How Direct Billing Works
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm border border-white/20 hover:border-aurora-turquoise hover:text-aurora-turquoise transition-colors"
                >
                  Ask About Billing
                </a>
              </div>
            </div>
          </div>

          <p className="relative mt-8 pt-6 border-t border-white/10 text-white/65 text-xs leading-relaxed">
            Direct billing is subject to eligibility, authorization and program limits.
          </p>
        </div>
      </div>

      {open && <BillingDetails onClose={() => setOpen(false)} />}
    </section>
  );
}
