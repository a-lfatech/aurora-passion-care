import { useState } from 'react';
import { Phone, Mail, Globe, CheckCircle, ArrowRight, AlertCircle, ShieldCheck } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useInView } from '@/hooks/useInView';

const supportTypes = [
  'Dementia / Alzheimer\'s',
  'Autism / Special Needs',
  'Personal Care',
  'Respite',
  'Companionship',
  'Live-In Care',
  'In-Home Support',
  'Other',
];

const contactMethods = ['Phone', 'Email', 'Either'];

interface FormState {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  preferred_contact: string;
  support_type: string;
  preferred_start_date: string;
  message: string;
}

const EMPTY: FormState = {
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  preferred_contact: '',
  support_type: '',
  preferred_start_date: '',
  message: '',
};

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.first_name || !form.last_name || !form.email || !consent) return;
    setSubmitting(true);
    setError(null);

    const { error: dbError } = await supabase.from('contact_inquiries').insert(form);

    if (dbError) {
      setSubmitting(false);
      setError('Something went wrong. Please try calling us directly at 403-899-1572.');
      return;
    }

    const { error: emailError } = await supabase.functions.invoke('send-consultation-email', {
      body: form,
    });

    setSubmitting(false);
    if (emailError) {
      setError('Your request was saved, but we could not send the email. Please call us directly at 403-899-1572.');
    } else {
      setSuccess(true);
      setForm(EMPTY);
      setConsent(false);
    }
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-aurora-turquoise/50 focus:ring-1 focus:ring-aurora-turquoise/30 transition-all';

  return (
    <section id="contact" className="relative bg-midnight-900 section-padding overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)',
      }} />

      {/* Aurora glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none" style={{
        background: 'radial-gradient(ellipse, rgba(6,182,212,0.06), transparent)',
        filter: 'blur(60px)',
      }} />

      <div className="container-max relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div className={`section-fade-in ${inView ? 'visible' : ''}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-aurora-teal" />
              <span className="text-aurora-teal text-xs font-semibold tracking-[0.3em] uppercase">Get In Touch</span>
            </div>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4 leading-tight">
              Let's talk<br />
              <span className="aurora-text">about care.</span>
            </h2>
            <p className="text-white/75 text-base leading-relaxed mb-10 max-w-md">
              There is no pressure and no commitment required. Just a genuine conversation about your situation and how we might be able to support you and your family.
            </p>

            <div className="space-y-5">
              <a href="tel:4038991572" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                  style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.2)' }}>
                  <Phone className="w-5 h-5 text-aurora-turquoise" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white/65 text-xs tracking-wider uppercase mb-0.5">Phone</p>
                  <p className="text-white font-semibold text-lg group-hover:text-aurora-turquoise transition-colors">403-899-1572</p>
                </div>
              </a>

              <a href="mailto:care@aurorapassion.care" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                  style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.2)' }}>
                  <Mail className="w-5 h-5 text-aurora-turquoise" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white/65 text-xs tracking-wider uppercase mb-0.5">Email</p>
                  <p className="text-white font-semibold group-hover:text-aurora-turquoise transition-colors break-all">care@aurorapassion.care</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.2)' }}>
                  <Globe className="w-5 h-5 text-aurora-turquoise" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white/65 text-xs tracking-wider uppercase mb-0.5">Web</p>
                  <p className="text-white font-semibold">www.aurorapassion.care</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mt-10 pt-8 border-t border-white/8">
              <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Location</p>
              <p className="text-white/70 text-sm leading-relaxed">Calgary, Alberta, Canada</p>
              <p className="text-white/65 text-xs mt-1">Serving Calgary and surrounding communities</p>
            </div>
          </div>

          {/* Right: form */}
          <div className={`section-fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
            {success ? (
              <div className="rounded-3xl border border-aurora-teal/20 p-10 text-center" style={{
                background: 'rgba(6,182,212,0.05)',
              }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{
                  background: 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(16,185,129,0.3))',
                  border: '2px solid rgba(6,182,212,0.5)',
                }}>
                  <CheckCircle className="w-8 h-8 text-aurora-turquoise" />
                </div>
                <h3 className="font-display font-bold text-white text-2xl mb-3">Thank you for reaching out.</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  We have received your inquiry and will be in touch soon. In the meantime, please feel free to call us directly at 403-899-1572.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="text-aurora-turquoise text-sm hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl p-8 border border-white/8"
                style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(8px)' }}
                noValidate
              >
                <h3 className="font-display font-bold text-white text-xl mb-6">Request a Consultation</h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="first_name" className="block text-white/75 text-xs mb-1.5 tracking-wide">First Name *</label>
                    <input id="first_name" type="text" required value={form.first_name} onChange={set('first_name')} className={inputClass} placeholder="Jane" />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-white/75 text-xs mb-1.5 tracking-wide">Last Name *</label>
                    <input id="last_name" type="text" required value={form.last_name} onChange={set('last_name')} className={inputClass} placeholder="Smith" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-white/75 text-xs mb-1.5 tracking-wide">Phone</label>
                    <input id="phone" type="tel" value={form.phone} onChange={set('phone')} className={inputClass} placeholder="403-000-0000" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/75 text-xs mb-1.5 tracking-wide">Email *</label>
                    <input id="email" type="email" required value={form.email} onChange={set('email')} className={inputClass} placeholder="jane@example.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="preferred_contact" className="block text-white/75 text-xs mb-1.5 tracking-wide">Preferred Contact Method</label>
                    <select id="preferred_contact" value={form.preferred_contact} onChange={set('preferred_contact')} className={`${inputClass} [color-scheme:dark]`}>
                      <option value="" className="bg-midnight-900 text-white">Select…</option>
                      {contactMethods.map((m) => <option key={m} value={m} className="bg-midnight-900 text-white">{m}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="support_type" className="block text-white/75 text-xs mb-1.5 tracking-wide">Type of Support Needed</label>
                    <select id="support_type" value={form.support_type} onChange={set('support_type')} className={`${inputClass} [color-scheme:dark]`}>
                      <option value="" className="bg-midnight-900 text-white">Select…</option>
                      {supportTypes.map((t) => <option key={t} value={t} className="bg-midnight-900 text-white">{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="preferred_start_date" className="block text-white/75 text-xs mb-1.5 tracking-wide">Preferred Start Date</label>
                  <input id="preferred_start_date" type="date" value={form.preferred_start_date} onChange={set('preferred_start_date')} className={inputClass} />
                </div>

                <div className="mb-5">
                  <label htmlFor="message" className="block text-white/75 text-xs mb-1.5 tracking-wide">Message</label>
                  <p id="message-hint" className="flex items-start gap-2 text-white/70 text-xs leading-relaxed mb-2">
                    <ShieldCheck className="w-4 h-4 text-aurora-teal flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
                    Please keep this general. Do not include medical histories, diagnoses, medications or health card numbers; we will go over care needs privately during your consultation.
                  </p>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={set('message')}
                    aria-describedby="message-hint"
                    className={`${inputClass} resize-none`}
                    placeholder="For example: looking for weekday companionship for my mother, a few hours at a time."
                  />
                </div>

                <label htmlFor="privacy_consent" className="flex items-start gap-3 mb-6 cursor-pointer">
                  <input
                    id="privacy_consent"
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-white/30 bg-white/5 accent-aurora-turquoise flex-shrink-0"
                  />
                  <span className="text-white/75 text-xs leading-relaxed">
                    I agree that Aurora Passion Care may use this information to respond to my enquiry, as described in the{' '}
                    <a href="/privacy" target="_blank" rel="noopener" className="text-aurora-turquoise underline underline-offset-2 hover:text-white">Privacy Policy</a>. *
                  </span>
                </label>

                {error && (
                  <div className="flex items-start gap-2 mb-5 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-red-300 text-xs leading-relaxed">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting || !form.first_name || !form.last_name || !form.email || !consent}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-midnight-900 text-sm transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, #06b6d4, #10b981)' }}
                >
                  {submitting ? 'Sending…' : 'Request a Consultation'}
                  {!submitting && <ArrowRight className="w-4 h-4" />}
                </button>

                <p className="text-white/60 text-xs text-center mt-4">
                  Your information is kept private and only used to respond to you. Read our{' '}
                  <a href="/privacy" className="text-aurora-turquoise underline underline-offset-2 hover:text-white">Privacy Policy</a>{' '}
                  and{' '}
                  <a href="/terms" className="text-aurora-turquoise underline underline-offset-2 hover:text-white">Terms of Service</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
