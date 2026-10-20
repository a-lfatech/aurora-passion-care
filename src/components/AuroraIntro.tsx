import { useEffect, useRef, useState } from 'react';

interface Props {
  onComplete: () => void;
}

const STEPS = [
  { text: 'FUN FACT', delay: 1200, size: 'text-sm tracking-[0.4em] font-medium opacity-60' },
  { text: 'AURORA means dawn.', delay: 2600, size: 'text-3xl md:text-5xl font-display font-bold' },
  { text: 'A new dawn of human-centered care is emerging.', delay: 4400, size: 'text-lg md:text-2xl font-light max-w-xl leading-relaxed' },
];

export default function AuroraIntro({ onComplete }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [step, setStep] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [exiting, setExiting] = useState(false);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Stars
    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.7,
      r: Math.random() * 1.5 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.015 + 0.005,
    }));

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep night sky gradient
      const bg = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bg.addColorStop(0, '#04080f');
      bg.addColorStop(0.5, '#080d1a');
      bg.addColorStop(1, '#0a1020');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Stars
      stars.forEach((s) => {
        const alpha = 0.2 + 0.8 * (0.5 + 0.5 * Math.sin(s.phase + t * s.speed * 60));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 230, 255, ${alpha})`;
        ctx.fill();
      });

      // Soft, flowing aurora ribbons
      const ribbons = [
        { y: 0.2, height: 150, amplitude: 70, speed: 0.32, phase: 0, color: ['#083d5c', '#06b6d4', '#10b981'] },
        { y: 0.3, height: 120, amplitude: 56, speed: 0.24, phase: 2.4, color: ['#064e63', '#14b8a6', '#22d3ee'] },
        { y: 0.39, height: 100, amplitude: 42, speed: 0.4, phase: 4.6, color: ['#064e3b', '#059669', '#67e8f9'] },
      ];

      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      ribbons.forEach((ribbon) => {
        const y = canvas.height * ribbon.y;
        const wave = (x: number, offset: number) =>
          y +
          Math.sin(x * 0.0022 + t * ribbon.speed + ribbon.phase) * ribbon.amplitude +
          Math.sin(x * 0.005 - t * ribbon.speed * 0.7 + ribbon.phase) * ribbon.amplitude * 0.35 +
          offset;

        const gradient = ctx.createLinearGradient(0, y - ribbon.height, 0, y + ribbon.height);
        gradient.addColorStop(0, `${ribbon.color[0]}00`);
        gradient.addColorStop(0.28, `${ribbon.color[1]}55`);
        gradient.addColorStop(0.52, `${ribbon.color[2]}8c`);
        gradient.addColorStop(0.8, `${ribbon.color[1]}30`);
        gradient.addColorStop(1, `${ribbon.color[0]}00`);

        ctx.beginPath();
        ctx.moveTo(0, wave(0, -ribbon.height * 0.4));
        for (let x = 0; x < canvas.width; x += 140) {
          const nextX = Math.min(x + 140, canvas.width);
          const midX = x + (nextX - x) / 2;
          ctx.quadraticCurveTo(midX, wave(midX, -ribbon.height * 0.4), nextX, wave(nextX, -ribbon.height * 0.4));
        }
        ctx.lineTo(canvas.width, wave(canvas.width, ribbon.height * 0.55));
        for (let x = canvas.width; x > 0; x -= 140) {
          const nextX = Math.max(x - 140, 0);
          const midX = x - (x - nextX) / 2;
          ctx.quadraticCurveTo(midX, wave(midX, ribbon.height * 0.55), nextX, wave(nextX, ribbon.height * 0.55));
        }
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.filter = 'blur(10px)';
        ctx.fill();
        ctx.filter = 'none';
      });
      ctx.restore();

      t += 0.016;
      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Step progression
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    STEPS.forEach((s, i) => {
      timers.push(setTimeout(() => setStep(i + 1), s.delay));
    });

    timers.push(setTimeout(() => setShowLogo(true), 6200));
    timers.push(
      setTimeout(() => {
        setExiting(true);
        setTimeout(onComplete, 900);
      }, 8000)
    );

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-900 ${
        exiting ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ transition: 'opacity 0.9s ease' }}
    >
      <canvas ref={canvasRef} id="aurora-canvas" aria-hidden="true" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 space-y-8">
        {STEPS.map((s, i) => (
          <p
            key={i}
            className={`text-white transition-all duration-700 ${s.size} ${
              step > i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            {i === 1 ? (
              <>
                AURORA means <span className="aurora-text font-extrabold drop-shadow-[0_0_18px_rgba(34,211,238,0.65)]">dawn.</span>
              </>
            ) : s.text}
          </p>
        ))}

        {/* Logo reveal */}
        <div
          className={`flex flex-col items-center mt-4 transition-all duration-1000 ${
            showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="flex items-center gap-4 md:gap-6" style={{
            filter: 'drop-shadow(0 0 22px rgba(6,182,212,0.3))',
          }}>
            <img
              src="/apc_logo_mark.png"
              alt=""
              aria-hidden="true"
              className="w-28 md:w-44 h-auto block"
            />
            <div className="text-left leading-none">
              <span className="block text-4xl md:text-7xl font-display font-extrabold tracking-tight aurora-text">AURORA</span>
              <span className="block mt-2 text-lg md:text-3xl font-bold tracking-[0.08em] text-white">PASSION CARE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Skip button */}
      <button
        onClick={() => { setExiting(true); setTimeout(onComplete, 900); }}
        className="absolute bottom-8 right-8 text-white/65 hover:text-white/80 text-sm tracking-widest transition-colors focus-visible:ring-2 focus-visible:ring-aurora-turquoise rounded px-3 py-1"
        aria-label="Skip introduction"
      >
        SKIP →
      </button>
    </div>
  );
}
