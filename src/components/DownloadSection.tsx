
import { useLanguage } from '@/contexts/LanguageContext';
import { Download, Smartphone, TabletSmartphone, Laptop } from 'lucide-react';
import DownloadButton from './DownloadButton';

const DownloadSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-tiktok-black to-tiktok-gray opacity-90 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-tiktok-cyan opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-tiktok-pink opacity-10 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-tiktok-cyan to-tiktok-pink bg-clip-text text-transparent">
              {t('download.title', 'Get Sambow App')}
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t('download.subtitle', 'Download our app and take Sambow with you everywhere. Available on all major platforms.')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mobile Download */}
          <div className="card-highlight p-6 text-center">
            <div className="mb-6 text-white text-5xl flex justify-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-tiktok-cyan to-tiktok-pink">
                <Smartphone className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {t('download.mobile.title', 'Mobile App')}
            </h3>
            <p className="text-white/80 mb-6">
              {t('download.mobile.description', 'Perfect for streaming on the go. Available for iOS and Android.')}
            </p>
            <DownloadButton variant="gradient" size="md" />
          </div>
          
          {/* Tablet Download */}
          <div className="card-highlight p-6 text-center">
            <div className="mb-6 text-white text-5xl flex justify-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-tiktok-cyan to-tiktok-pink">
                <TabletSmartphone className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {t('download.tablet.title', 'Tablet App')}
            </h3>
            <p className="text-white/80 mb-6">
              {t('download.tablet.description', 'Optimized for larger screens with enhanced viewing experience.')}
            </p>
            <DownloadButton variant="gradient" size="md" />
          </div>
          
          {/* Desktop Download */}
          <div className="card-highlight p-6 text-center">
            <div className="mb-6 text-white text-5xl flex justify-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-tiktok-cyan to-tiktok-pink">
                <Laptop className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {t('download.desktop.title', 'Desktop App')}
            </h3>
            <p className="text-white/80 mb-6">
              {t('download.desktop.description', 'Full-featured streaming studio for professional creators.')}
            </p>
            <DownloadButton variant="gradient" size="md" />
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/60 max-w-lg mx-auto text-sm">
            {t('download.requirements', 'System requirements: iOS 13+, Android 8+, Windows 10/11, macOS 10.15+. Internet connection required for streaming features.')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
