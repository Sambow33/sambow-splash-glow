
import { RiLiveFill } from '@remixicon/react';
import { RiTranslate2 } from '@remixicon/react';
import { RiMoneyDollarCircleFill } from '@remixicon/react';
import { RiMessage2Fill } from '@remixicon/react';
import { RiGiftFill } from '@remixicon/react';
import { RiGamepadFill } from '@remixicon/react';
import AnimatedLogo from '@/components/AnimatedLogo';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import LanguagePicker from '@/components/LanguagePicker';
import LaunchButton from '@/components/LaunchButton';
import SupportSection from '@/components/SupportSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import AppPreview from '@/components/AppPreview';
import StatsBanner from '@/components/StatsBanner';
import MonetizationSection from '@/components/MonetizationSection';
import LiveDemo from '@/components/LiveDemo';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t, direction } = useLanguage();
  
  return (
    <div className={`min-h-screen bg-gradient-to-br from-tiktok-black to-tiktok-gray flex flex-col overflow-x-hidden ${direction === 'rtl' ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className="w-full py-4 px-6">
        <div className="flex justify-end">
          <LanguagePicker />
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12">
          <div className="mb-6">
            <AnimatedLogo />
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-2 animate-glow">
            {t('hero.title')}
          </h2>
          <p className="text-white/70 max-w-lg mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="mb-12">
            <LaunchButton />
          </div>
        </section>

        {/* App Preview Section */}
        <AppPreview />
        
        {/* Live Demo Section */}
        <LiveDemo />
        
        {/* Stats Banner */}
        <StatsBanner />

        {/* Features Section */}
        <section className="py-12 px-4 bg-black/10 backdrop-blur-sm">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              <span className="bg-gradient-to-r from-tiktok-cyan to-tiktok-pink bg-clip-text text-transparent">
                {t('features.title')}
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<RiLiveFill />}
                title={t('features.streaming')}
                description={t('features.streaming.description')}
              />
              <FeatureCard
                icon={<RiTranslate2 />}
                title={t('features.multilingual')}
                description={t('features.multilingual.description')}
              />
              <FeatureCard
                icon={<RiMoneyDollarCircleFill />}
                title={t('features.monetization')}
                description={t('features.monetization.description')}
              />
              <FeatureCard
                icon={<RiMessage2Fill />}
                title={t('features.liveChat')}
                description={t('features.liveChat.description')}
              />
              <FeatureCard
                icon={<RiGiftFill />}
                title={t('features.gifts')}
                description={t('features.gifts.description')}
              />
              <FeatureCard
                icon={<RiGamepadFill />}
                title={t('features.games')}
                description={t('features.games.description')}
              />
            </div>
          </div>
        </section>
        
        {/* Monetization Section */}
        <MonetizationSection />
        
        {/* Testimonials Section */}
        <TestimonialsCarousel />
        
        {/* Support Section */}
        <SupportSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
