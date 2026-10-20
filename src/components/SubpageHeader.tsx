import { ArrowLeft } from 'lucide-react';

export default function SubpageHeader() {
  return (
    <header className="sticky top-0 z-40 bg-midnight-900/95 backdrop-blur-md border-b border-white/5">
      <div className="container-max px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center gap-2 group rounded-lg">
          <img src="/apc_logo_mark.png" alt="" aria-hidden="true" className="w-11 md:w-14 h-auto block" />
          <span className="leading-none">
            <span className="block text-[15px] md:text-lg font-display font-extrabold tracking-tight aurora-text">AURORA</span>
            <span className="block text-[9px] md:text-[11px] font-bold tracking-[0.08em] text-white">PASSION CARE</span>
          </span>
        </a>
        <a
          href="/"
          className="flex items-center gap-2 text-white/80 hover:text-aurora-turquoise text-sm font-medium transition-colors rounded"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </a>
      </div>
    </header>
  );
}
