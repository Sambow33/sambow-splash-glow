
import { useLanguage } from '@/contexts/LanguageContext';
import { RiCoinsFill, RiVipCrownFill, RiAdvertisementFill, RiGamepadFill } from '@remixicon/react';

const MonetizationSection = () => {
  const { t, direction } = useLanguage();
  
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-tiktok-cyan/5 to-tiktok-pink/5 backdrop-blur-md">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-3">
          <span className="bg-gradient-to-r from-tiktok-pink to-tiktok-cyan bg-clip-text text-transparent">
            {t('monetization.title')}
          </span>
        </h2>
        <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
          {t('monetization.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card-highlight p-6 animate-float-up opacity-0 stagger-item">
            <div className="mb-4 text-5xl text-tiktok-pink flex justify-center">
              <RiCoinsFill />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">
              {t('monetization.gifts.title')}
            </h3>
            <p className="text-white/80 text-center">
              {t('monetization.gifts.description')}
            </p>
          </div>
          
          <div className="card-highlight p-6 animate-float-up opacity-0 stagger-item">
            <div className="mb-4 text-5xl text-tiktok-cyan flex justify-center">
              <RiVipCrownFill />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">
              {t('monetization.subscriptions.title')}
            </h3>
            <p className="text-white/80 text-center">
              {t('monetization.subscriptions.description')}
            </p>
          </div>
          
          <div className="card-highlight p-6 animate-float-up opacity-0 stagger-item">
            <div className="mb-4 text-5xl text-tiktok-pink flex justify-center">
              <RiAdvertisementFill />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">
              {t('monetization.ads.title')}
            </h3>
            <p className="text-white/80 text-center">
              {t('monetization.ads.description')}
            </p>
          </div>
          
          <div className="card-highlight p-6 animate-float-up opacity-0 stagger-item">
            <div className="mb-4 text-5xl text-tiktok-cyan flex justify-center">
              <RiGamepadFill />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">
              {t('monetization.games.title')}
            </h3>
            <p className="text-white/80 text-center">
              {t('monetization.games.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonetizationSection;
