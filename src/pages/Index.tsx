
import { RiLiveFill } from '@remixicon/react';
import { RiTranslate2 } from '@remixicon/react';
import { RiMoneyDollarCircleFill } from '@remixicon/react';
import AnimatedLogo from '@/components/AnimatedLogo';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import LanguagePicker from '@/components/LanguagePicker';
import LaunchButton from '@/components/LaunchButton';
import SupportSection from '@/components/SupportSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-sambow flex flex-col overflow-x-hidden">
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
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-8 animate-glow">
            Stream. Connect. Earn.
          </h2>
          <div className="mb-12">
            <LaunchButton />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<RiLiveFill />}
                title="High-quality Live Streaming"
                description="Stream in HD with low latency and reach your audience instantly."
              />
              <FeatureCard
                icon={<RiTranslate2 />}
                title="Multilingual Support"
                description="Break language barriers with support for multiple languages."
              />
              <FeatureCard
                icon={<RiMoneyDollarCircleFill />}
                title="Earn Money from Streaming"
                description="Monetize your content and earn rewards from your audience."
              />
            </div>
          </div>
        </section>
        
        {/* Support Section */}
        <SupportSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
