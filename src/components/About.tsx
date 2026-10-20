import { useInView } from '@/hooks/useInView';

const values = [
  'Listening deeply to what matters most',
  'Noticing what others might miss',
  'Respecting each person\'s choices and privacy',
  'Encouraging independence and confidence',
  'Creating genuine connection and community',
  'Helping families feel genuinely supported',
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, #060d1a 0%, #08101e 100%)',
    }}>
      {/* Aurora glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full opacity-8 pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(6,182,212,0.4), transparent)',
        filter: 'blur(60px)',
      }} />

      <div className="container-max section-padding" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div className={`section-fade-in ${inView ? 'visible' : ''}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-aurora-teal" />
              <span className="text-aurora-teal text-xs font-semibold tracking-[0.3em] uppercase">About Us</span>
            </div>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-6 leading-tight">
              People<br />
              <span className="aurora-text">caring for people.</span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-5">
              Aurora Passion Care was created around a simple but deeply held belief: quality care is not only about completing tasks. It is about the full human experience of being supported, seen, and valued.
            </p>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              We are a private in-home care and support service dedicated to seniors, individuals living with dementia, people with autism and special needs, and families who need a trusted partner in care. Our approach begins before a single visit. It starts with careful listening, honest conversation, and a commitment to truly understanding your situation.
            </p>

            <div className="space-y-3 mb-8">
              {values.map((v) => (
                <div key={v} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{
                    background: 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(16,185,129,0.3))',
                    border: '1px solid rgba(6,182,212,0.4)',
                  }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-aurora-turquoise" />
                  </div>
                  <p className="text-white/70 text-sm">{v}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-midnight-900 text-sm transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #10b981)' }}
            >
              Get to Know Us
            </a>
          </div>

          {/* Image side */}
          <div className={`section-fade-in ${inView ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.pexels.com/photos/29372534/pexels-photo-29372534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="A compassionate caregiver warmly greeting and supporting a senior at home"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(180deg, transparent 60%, rgba(6,9,26,0.7) 100%)',
                }} />
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{
                  background: 'linear-gradient(90deg, #06b6d4, #10b981)',
                }} />
              </div>

              {/* Floating stat */}
              <div
                className="absolute -bottom-6 -left-6 rounded-2xl px-6 py-5 shadow-2xl"
                style={{ background: 'rgba(10,15,30,0.95)', border: '1px solid rgba(6,182,212,0.2)' }}
              >
                <p className="text-3xl font-display font-bold aurora-text mb-1">Calgary</p>
                <p className="text-white/75 text-xs tracking-widest uppercase">Alberta, Canada</p>
              </div>

              {/* Aurora decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-30 pointer-events-none" style={{
                background: 'radial-gradient(circle, #06b6d4, transparent)',
                filter: 'blur(20px)',
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
