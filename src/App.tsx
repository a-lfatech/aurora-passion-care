import { useState, useEffect } from 'react';
import AuroraIntro from '@/components/AuroraIntro';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import DirectBilling from '@/components/DirectBilling';
import WhyAurora from '@/components/WhyAurora';
import FinlandStory from '@/components/FinlandStory';
import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import FamilySection from '@/components/FamilySection';
import Contact from '@/components/Contact';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import MediaDownloads from '@/pages/MediaDownloads';

function HomePage() {
  // Visitors returning to a specific section (e.g. from the legal pages) skip the intro
  const [showIntro, setShowIntro] = useState(() => !window.location.hash);
  const [introVisible, setIntroVisible] = useState(() => !window.location.hash);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) document.getElementById(hash)?.scrollIntoView();
  }, []);

  // Respect prefers-reduced-motion: skip intro
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setShowIntro(false);
      setIntroVisible(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setIntroVisible(false);
    setTimeout(() => setShowIntro(false), 900);
  };

  return (
    <div className="bg-midnight-950 min-h-screen">
      {showIntro && (
        <AuroraIntro onComplete={handleIntroComplete} />
      )}

      <div
        className="transition-opacity duration-700"
        style={{ opacity: introVisible ? 0 : 1 }}
        aria-hidden={introVisible}
      >
        <Navigation />
        <main id="main-content">
          <Hero />
          <Services />
          <DirectBilling />
          <WhyAurora />
          <FinlandStory />
          <About />
          <HowItWorks />
          <FamilySection />
          <Contact />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '');
  if (path === '/privacy') return <PrivacyPolicy />;
  if (path === '/terms') return <TermsOfService />;
  if (path === '/media') return <MediaDownloads />;
  return <HomePage />;
}

export default App;
