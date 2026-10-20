import { useEffect, useRef, useState } from 'react';
import { Download, Eye, X, CreditCard, FileText, Mail } from 'lucide-react';
import Footer from '@/components/Footer';
import SubpageHeader from '@/components/SubpageHeader';

interface MediaItem {
  title: string;
  description: string;
  file: string;
  preview?: string;
  format: string;
  size: string;
}

interface MediaGroup {
  id: string;
  title: string;
  description: string;
  icon: typeof CreditCard;
  items: MediaItem[];
}

const groups: MediaGroup[] = [
  {
    id: 'business-cards',
    title: 'Business Cards',
    description: 'Our business card designs at standard 3.5 x 2 in (1050 x 600 px, 300 DPI), ready to share digitally or print.',
    icon: CreditCard,
    items: [
      {
        title: 'Business Card: Front',
        description: 'Logo, tagline, phone number and website.',
        file: '/media/Aurora_Passion_Care_Business_Card_-_Front.png',
        format: 'PNG',
        size: '0.7 MB',
      },
      {
        title: 'Business Card: Back',
        description: 'Our services, contact details and a QR code to our website.',
        file: '/media/Aurora_Passion_Care_Business_Card_-_Back.png',
        format: 'PNG',
        size: '0.7 MB',
      },
    ],
  },
  {
    id: 'flyers',
    title: 'Flyers',
    description: 'Our premium tri-fold brochure and one-page flyers covering our story, services, values and Alberta Blue Cross direct billing. Each comes as a print-ready PDF and shareable images.',
    icon: FileText,
    items: [
      {
        title: 'Tri-Fold Brochure: Print (Letter)',
        description: 'Our story, services, care approach and how to get started. Two-sided 11 x 8.5 in, folds into three panels. Ideal for hospitals, senior communities and referral partners.',
        file: '/media/Aurora_Passion_Care_Tri-Fold_Brochure.pdf',
        preview: '/media/Aurora_Passion_Care_Tri-Fold_Brochure_Outside.png',
        format: 'PDF',
        size: '1.1 MB',
      },
      {
        title: 'Tri-Fold Brochure: Outside Image',
        description: 'Front cover, contact details and family promises, for sharing by email or social media.',
        file: '/media/Aurora_Passion_Care_Tri-Fold_Brochure_Outside.png',
        format: 'PNG',
        size: '1.7 MB',
      },
      {
        title: 'Tri-Fold Brochure: Inside Image',
        description: 'Our story, services, care approach and getting started steps.',
        file: '/media/Aurora_Passion_Care_Tri-Fold_Brochure_Inside.png',
        format: 'PNG',
        size: '1.1 MB',
      },
      {
        title: 'Overview Flyer: Print (Letter)',
        description: 'Services, how to get started and direct billing. 8.5 x 11 in, ready to print.',
        file: '/media/Aurora_Passion_Care_Flyer.pdf',
        preview: '/media/Aurora_Passion_Care_Flyer.png',
        format: 'PDF',
        size: '1.7 MB',
      },
      {
        title: 'Overview Flyer: Image',
        description: 'High-resolution image for sharing by email, text or social media.',
        file: '/media/Aurora_Passion_Care_Flyer.png',
        format: 'PNG',
        size: '1.1 MB',
      },
      {
        title: 'Family Care Flyer: Print (Letter)',
        description: 'Photo-led flyer featuring our caregivers, services and values. 8.5 x 11 in, ready to print.',
        file: '/media/Aurora_Passion_Care_Family_Care_Flyer.pdf',
        preview: '/media/Aurora_Passion_Care_Family_Care_Flyer.png',
        format: 'PDF',
        size: '0.7 MB',
      },
      {
        title: 'Family Care Flyer: Image',
        description: 'High-resolution image for sharing by email, text or social media.',
        file: '/media/Aurora_Passion_Care_Family_Care_Flyer.png',
        format: 'PNG',
        size: '2.0 MB',
      },
    ],
  },
];

const fileName = (path: string) => path.split('/').pop() ?? path;

function PreviewDialog({ item, onClose }: { item: MediaItem; onClose: () => void }) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={item.title}>
      <div className="absolute inset-0 bg-midnight-950/90 backdrop-blur-sm" />
      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between gap-4 mb-4">
          <h3 className="font-display font-bold text-white text-lg">{item.title}</h3>
          <div className="flex items-center gap-2">
            <a
              href={item.file}
              download={fileName(item.file)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-midnight-900 text-sm hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #10b981)' }}
            >
              <Download className="w-4 h-4" /> Download
            </a>
            <button ref={closeRef} onClick={onClose} className="p-2 rounded-full text-white/75 hover:text-white bg-white/10" aria-label="Close preview">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden flex items-center justify-center bg-midnight-900">
          <img src={item.preview ?? item.file} alt={item.title} className="max-h-[75vh] w-auto object-contain" />
        </div>
      </div>
    </div>
  );
}

function MediaCard({ item, onPreview }: { item: MediaItem; onPreview: () => void }) {
  return (
    <article className="group rounded-2xl overflow-hidden border border-white/8 bg-white/[0.03] hover:border-aurora-turquoise/30 transition-all duration-300 flex flex-col">
      <button
        onClick={onPreview}
        className="relative aspect-[16/9] overflow-hidden flex items-center justify-center bg-midnight-900"
        aria-label={`Preview ${item.title}`}
      >
        <img
          src={item.preview ?? item.file}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-midnight-950/0 group-hover:bg-midnight-950/40 transition-colors">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-2 px-4 py-2 rounded-full bg-midnight-900/90 text-white text-sm font-medium">
            <Eye className="w-4 h-4" /> Preview
          </span>
        </span>
      </button>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-white text-base mb-1">{item.title}</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1">{item.description}</p>
        <div className="flex items-center justify-between gap-3">
          <span className="text-white/60 text-xs tracking-wide">{item.format} · {item.size}</span>
          <a
            href={item.file}
            download={fileName(item.file)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-aurora-turquoise border border-aurora-turquoise/30 hover:bg-aurora-turquoise hover:text-midnight-900 transition-colors"
          >
            <Download className="w-4 h-4" /> Download
          </a>
        </div>
      </div>
    </article>
  );
}

export default function MediaDownloads() {
  const [preview, setPreview] = useState<MediaItem | null>(null);

  useEffect(() => {
    document.title = 'Media & Downloads | Aurora Passion Care';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-midnight-950 min-h-screen text-white">
      <SubpageHeader />

      <main id="main-content">
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[360px] pointer-events-none" style={{
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.12), transparent 70%)',
            filter: 'blur(40px)',
          }} />
          <div className="container-max px-6 lg:px-8 py-16 md:py-24 relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-aurora-teal" />
              <span className="text-aurora-teal text-xs font-semibold tracking-[0.3em] uppercase">Media Kit</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-6">
              Media & <span className="aurora-text">Downloads</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
              Business cards, flyers and other materials for families, partners and referral sources. Preview any item, or download it to share or print.
            </p>
            <nav aria-label="Media categories" className="flex flex-wrap gap-3 mt-8">
              {groups.map((g) => (
                <a key={g.id} href={`#${g.id}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white/85 border border-white/15 hover:border-aurora-turquoise hover:text-aurora-turquoise transition-colors">
                  <g.icon className="w-4 h-4" strokeWidth={1.5} /> {g.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <div className="container-max px-6 lg:px-8 py-16 md:py-20 space-y-20">
          {groups.map((g) => (
            <section key={g.id} id={g.id} className="scroll-mt-28" aria-labelledby={`${g.id}-title`}>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.25)' }}>
                  <g.icon className="w-6 h-6 text-aurora-turquoise" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 id={`${g.id}-title`} className="font-display font-bold text-2xl md:text-3xl mb-1">{g.title}</h2>
                  <p className="text-white/70 text-base leading-relaxed">{g.description}</p>
                </div>
              </div>
              <div className={`grid gap-6 sm:grid-cols-2 ${g.items.length > 2 ? 'lg:grid-cols-4' : ''}`}>
                {g.items.map((item) => (
                  <MediaCard key={item.file} item={item} onPreview={() => setPreview(item)} />
                ))}
              </div>
            </section>
          ))}

          <div className="rounded-2xl p-8 border border-aurora-teal/20 flex flex-col md:flex-row md:items-center justify-between gap-6" style={{ background: 'rgba(6,182,212,0.05)' }}>
            <div>
              <h2 className="font-display font-bold text-xl mb-2">Using our materials</h2>
              <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
                You are welcome to share these files to refer families to Aurora Passion Care. Please don't alter the designs. Need a print-ready version or a different format? Just ask.
              </p>
            </div>
            <a href="mailto:care@aurorapassion.care?subject=Media%20request" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-midnight-900 text-sm hover:opacity-90 transition-opacity flex-shrink-0" style={{ background: 'linear-gradient(135deg, #06b6d4, #10b981)' }}>
              <Mail className="w-4 h-4" /> Request Materials
            </a>
          </div>
        </div>
      </main>

      <Footer />

      {preview && <PreviewDialog item={preview} onClose={() => setPreview(null)} />}
    </div>
  );
}
