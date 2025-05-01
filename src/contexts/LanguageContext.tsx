
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = {
  code: string;
  name: string;
};

type TranslationKey = 
  | 'hero.title'
  | 'hero.subtitle'
  | 'features.title'
  | 'features.streaming'
  | 'features.streaming.description'
  | 'features.multilingual'
  | 'features.multilingual.description'
  | 'features.monetization'
  | 'features.monetization.description'
  | 'features.liveChat'
  | 'features.liveChat.description'
  | 'features.gifts'
  | 'features.gifts.description'
  | 'features.games'
  | 'features.games.description'
  | 'testimonials.title'
  | 'monetization.title'
  | 'monetization.subtitle'
  | 'monetization.gifts.title'
  | 'monetization.gifts.description'
  | 'monetization.subscriptions.title'
  | 'monetization.subscriptions.description'
  | 'monetization.ads.title'
  | 'monetization.ads.description'
  | 'monetization.games.title'
  | 'monetization.games.description';

type Translations = {
  [key in TranslationKey]: string;
};

type TranslationsData = {
  [languageCode: string]: Translations;
};

const languages: Language[] = [
  { name: 'English', code: 'en' },
  { name: 'العربية', code: 'ar' },
  { name: 'हिन्दी', code: 'hi' },
  { name: '中文', code: 'zh' },
  { name: 'Français', code: 'fr' },
  { name: 'Español', code: 'es' }
];

const translations: TranslationsData = {
  en: {
    'hero.title': 'Stream. Connect. Earn.',
    'hero.subtitle': 'The premier live streaming platform for creators worldwide',
    'features.title': 'Features',
    'features.streaming': 'High-quality Live Streaming',
    'features.streaming.description': 'Stream in HD with low latency and reach your audience instantly.',
    'features.multilingual': 'Multilingual Support',
    'features.multilingual.description': 'Break language barriers with support for multiple languages.',
    'features.monetization': 'Earn Money from Streaming',
    'features.monetization.description': 'Monetize your content and earn rewards from your audience.',
    'features.liveChat': 'Interactive Live Chat',
    'features.liveChat.description': 'Engage with viewers in real-time through our advanced chat system.',
    'features.gifts': 'Virtual Gifts & Rewards',
    'features.gifts.description': 'Receive virtual gifts that convert to real money from your supporters.',
    'features.games': 'Interactive Games',
    'features.games.description': 'Host games during streams to boost engagement and earnings.',
    'testimonials.title': 'What Streamers Say',
    'monetization.title': 'Multiple Ways to Monetize',
    'monetization.subtitle': 'Turn your passion into profit with our comprehensive monetization tools',
    'monetization.gifts.title': 'Virtual Gifts',
    'monetization.gifts.description': 'Viewers can send virtual gifts during your streams that convert to real money.',
    'monetization.subscriptions.title': 'Channel Subscriptions',
    'monetization.subscriptions.description': 'Offer premium content to subscribers for monthly recurring revenue.',
    'monetization.ads.title': 'Ad Revenue Sharing',
    'monetization.ads.description': 'Earn from ads displayed during your streams with our fair revenue share model.',
    'monetization.games.title': 'Game Integration',
    'monetization.games.description': 'Host interactive games that viewers pay to participate in and share the profits.'
  },
  ar: {
    'hero.title': 'بث. تواصل. إربح.',
    'hero.subtitle': 'المنصة الرائدة للبث المباشر للمبدعين في جميع أنحاء العالم',
    'features.title': 'المميزات',
    'features.streaming': 'بث مباشر عالي الجودة',
    'features.streaming.description': 'قم بالبث بدقة عالية مع تأخير منخفض وتواصل مع جمهورك على الفور.',
    'features.multilingual': 'دعم متعدد اللغات',
    'features.multilingual.description': 'تخطى حواجز اللغة مع دعم للعديد من اللغات.',
    'features.monetization': 'اربح المال من البث',
    'features.monetization.description': 'حقق دخلاً من المحتوى الخاص بك واحصل على مكافآت من جمهورك.',
    'features.liveChat': 'دردشة مباشرة تفاعلية',
    'features.liveChat.description': 'تفاعل مع المشاهدين في الوقت الفعلي من خلال نظام الدردشة المتطور.',
    'features.gifts': 'هدايا افتراضية ومكافآت',
    'features.gifts.description': 'استلم هدايا افتراضية يمكن تحويلها إلى أموال حقيقية من داعميك.',
    'features.games': 'ألعاب تفاعلية',
    'features.games.description': 'استضف ألعابًا خلال البث لزيادة التفاعل والأرباح.',
    'testimonials.title': 'ماذا يقول المبثون',
    'monetization.title': 'طرق متعددة لتحقيق الربح',
    'monetization.subtitle': 'حول شغفك إلى ربح مع أدوات التحقيق النقدي الشاملة',
    'monetization.gifts.title': 'الهدايا الافتراضية',
    'monetization.gifts.description': 'يمكن للمشاهدين إرسال هدايا افتراضية أثناء البث تتحول إلى أموال حقيقية.',
    'monetization.subscriptions.title': 'اشتراكات القناة',
    'monetization.subscriptions.description': 'قدم محتوى مميزًا للمشتركين مقابل إيرادات شهرية متكررة.',
    'monetization.ads.title': 'مشاركة عائدات الإعلانات',
    'monetization.ads.description': 'اربح من الإعلانات التي تظهر أثناء البث مع نموذج مشاركة عادل للإيرادات.',
    'monetization.games.title': 'تكامل الألعاب',
    'monetization.games.description': 'استضف ألعابًا تفاعلية يدفع المشاهدون للمشاركة فيها وشارك في الأرباح.'
  },
  hi: {
    'hero.title': 'स्ट्रीम करें। जुड़ें। कमाएं।',
    'hero.subtitle': 'दुनिया भर के निर्माताओं के लिए प्रमुख लाइव स्ट्रीमिंग प्लेटफॉर्म',
    'features.title': 'विशेषताएं',
    'features.streaming': 'उच्च-गुणवत्ता वाली लाइव स्ट्रीमिंग',
    'features.streaming.description': 'कम लेटेंसी के साथ एचडी में स्ट्रीम करें और अपने दर्शकों तक तुरंत पहुंचें।',
    'features.multilingual': 'बहुभाषी समर्थन',
    'features.multilingual.description': 'कई भाषाओं के समर्थन के साथ भाषा बाधाओं को तोड़ें।',
    'features.monetization': 'स्ट्रीमिंग से पैसा कमाएं',
    'features.monetization.description': 'अपनी सामग्री को मुद्रीकृत करें और अपने दर्शकों से पुरस्कार प्राप्त करें।',
    'features.liveChat': 'इंटरैक्टिव लाइव चैट',
    'features.liveChat.description': 'हमारी उन्नत चैट प्रणाली के माध्यम से वास्तविक समय में दर्शकों के साथ जुड़ें।',
    'features.gifts': 'आभासी उपहार और पुरस्कार',
    'features.gifts.description': 'अपने समर्थकों से आभासी उपहार प्राप्त करें जो वास्तविक धन में परिवर्तित होते हैं।',
    'features.games': 'इंटरैक्टिव गेम्स',
    'features.games.description': 'जुड़ाव और कमाई बढ़ाने के लिए स्ट्रीम के दौरान खेल होस्ट करें।',
    'testimonials.title': 'स्ट्रीमर्स क्या कहते हैं',
    'monetization.title': 'पैसा कमाने के कई तरीके',
    'monetization.subtitle': 'हमारे व्यापक मुद्रीकरण उपकरणों के साथ अपने जुनून को लाभ में बदलें',
    'monetization.gifts.title': 'आभासी उपहार',
    'monetization.gifts.description': 'दर्शक आपके स्ट्रीम के दौरान आभासी उपहार भेज सकते हैं जो वास्तविक धन में बदल जाते हैं।',
    'monetization.subscriptions.title': 'चैनल सदस्यता',
    'monetization.subscriptions.description': 'मासिक आवर्ती राजस्व के लिए सदस्यों को प्रीमियम सामग्री प्रदान करें।',
    'monetization.ads.title': 'विज्ञापन राजस्व साझाकरण',
    'monetization.ads.description': 'हमारे उचित राजस्व साझाकरण मॉडल के साथ अपने स्ट्रीम के दौरान दिखाए गए विज्ञापनों से कमाई करें।',
    'monetization.games.title': 'गेम एकीकरण',
    'monetization.games.description': 'ऐसे इंटरैक्टिव गेम होस्ट करें जिनमें भाग लेने के लिए दर्शक भुगतान करते हैं और लाभ साझा करते हैं।'
  },
  zh: {
    'hero.title': '直播. 连接. 赚钱.',
    'hero.subtitle': '全球创作者的首选直播平台',
    'features.title': '特色功能',
    'features.streaming': '高质量直播',
    'features.streaming.description': '以高清低延迟进行直播，立即接触您的观众。',
    'features.multilingual': '多语言支持',
    'features.multilingual.description': '通过多种语言支持打破语言障碍。',
    'features.monetization': '从直播中赚钱',
    'features.monetization.description': '将您的内容货币化并从观众获得奖励。',
    'features.liveChat': '互动直播聊天',
    'features.liveChat.description': '通过我们先进的聊天系统与观众实时互动。',
    'features.gifts': '虚拟礼物和奖励',
    'features.gifts.description': '接收来自支持者的可转换为真实金钱的虚拟礼物。',
    'features.games': '互动游戏',
    'features.games.description': '在直播期间举办游戏以提高参与度和收入。',
    'testimonials.title': '直播者怎么说',
    'monetization.title': '多种变现方式',
    'monetization.subtitle': '利用我们全面的变现工具将您的热情转化为利润',
    'monetization.gifts.title': '虚拟礼物',
    'monetization.gifts.description': '观众可以在您的直播期间发送可以转换为真钱的虚拟礼物。',
    'monetization.subscriptions.title': '频道订阅',
    'monetization.subscriptions.description': '为订阅者提供优质内容，获取每月重复收入。',
    'monetization.ads.title': '广告收入分成',
    'monetization.ads.description': '通过我们公平的收入分成模型，从您直播期间展示的广告中获利。',
    'monetization.games.title': '游戏集成',
    'monetization.games.description': '举办互动游戏，观众付费参与并分享利润。'
  },
  fr: {
    'hero.title': 'Diffuser. Connecter. Gagner.',
    'hero.subtitle': 'La première plateforme de streaming en direct pour les créateurs du monde entier',
    'features.title': 'Fonctionnalités',
    'features.streaming': 'Streaming en direct de haute qualité',
    'features.streaming.description': 'Diffusez en HD avec une faible latence et atteignez votre public instantanément.',
    'features.multilingual': 'Support multilingue',
    'features.multilingual.description': 'Brisez les barrières linguistiques avec la prise en charge de plusieurs langues.',
    'features.monetization': 'Gagnez de l\'argent grâce au streaming',
    'features.monetization.description': 'Monétisez votre contenu et gagnez des récompenses de votre public.',
    'features.liveChat': 'Chat en direct interactif',
    'features.liveChat.description': 'Interagissez avec les spectateurs en temps réel grâce à notre système de chat avancé.',
    'features.gifts': 'Cadeaux virtuels et récompenses',
    'features.gifts.description': 'Recevez des cadeaux virtuels qui se convertissent en argent réel de vos supporters.',
    'features.games': 'Jeux interactifs',
    'features.games.description': 'Organisez des jeux pendant les streams pour augmenter l\'engagement et les revenus.',
    'testimonials.title': 'Ce que disent les streamers',
    'monetization.title': 'Plusieurs façons de monétiser',
    'monetization.subtitle': 'Transformez votre passion en profit avec nos outils de monétisation complets',
    'monetization.gifts.title': 'Cadeaux virtuels',
    'monetization.gifts.description': 'Les spectateurs peuvent envoyer des cadeaux virtuels pendant vos streams qui se convertissent en argent réel.',
    'monetization.subscriptions.title': 'Abonnements aux chaînes',
    'monetization.subscriptions.description': 'Proposez du contenu premium aux abonnés pour des revenus mensuels récurrents.',
    'monetization.ads.title': 'Partage des revenus publicitaires',
    'monetization.ads.description': 'Gagnez grâce aux publicités affichées pendant vos streams avec notre modèle équitable de partage des revenus.',
    'monetization.games.title': 'Intégration de jeux',
    'monetization.games.description': 'Organisez des jeux interactifs auxquels les spectateurs paient pour participer et partagez les bénéfices.'
  },
  es: {
    'hero.title': 'Transmite. Conecta. Gana.',
    'hero.subtitle': 'La principal plataforma de transmisión en vivo para creadores de todo el mundo',
    'features.title': 'Características',
    'features.streaming': 'Transmisión en vivo de alta calidad',
    'features.streaming.description': 'Transmite en HD con baja latencia y llega a tu audiencia al instante.',
    'features.multilingual': 'Soporte multilingüe',
    'features.multilingual.description': 'Rompe las barreras del idioma con soporte para múltiples idiomas.',
    'features.monetization': 'Gana dinero con la transmisión',
    'features.monetization.description': 'Monetiza tu contenido y gana recompensas de tu audiencia.',
    'features.liveChat': 'Chat en vivo interactivo',
    'features.liveChat.description': 'Interactúa con los espectadores en tiempo real a través de nuestro avanzado sistema de chat.',
    'features.gifts': 'Regalos virtuales y recompensas',
    'features.gifts.description': 'Recibe regalos virtuales que se convierten en dinero real de tus seguidores.',
    'features.games': 'Juegos interactivos',
    'features.games.description': 'Organiza juegos durante las transmisiones para aumentar la participación y las ganancias.',
    'testimonials.title': 'Lo que dicen los streamers',
    'monetization.title': 'Múltiples formas de monetizar',
    'monetization.subtitle': 'Convierte tu pasión en ganancias con nuestras completas herramientas de monetización',
    'monetization.gifts.title': 'Regalos virtuales',
    'monetization.gifts.description': 'Los espectadores pueden enviar regalos virtuales durante tus transmisiones que se convierten en dinero real.',
    'monetization.subscriptions.title': 'Suscripciones al canal',
    'monetization.subscriptions.description': 'Ofrece contenido premium a los suscriptores por ingresos mensuales recurrentes.',
    'monetization.ads.title': 'Reparto de ingresos por publicidad',
    'monetization.ads.description': 'Gana con los anuncios mostrados durante tus transmisiones con nuestro modelo justo de reparto de ingresos.',
    'monetization.games.title': 'Integración de juegos',
    'monetization.games.description': 'Organiza juegos interactivos en los que los espectadores pagan por participar y comparte las ganancias.'
  }
};

interface LanguageContextType {
  currentLanguage: Language;
  languages: Language[];
  setLanguage: (code: string) => void;
  t: (key: TranslationKey) => string;
  direction: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');

  useEffect(() => {
    // Set RTL direction for Arabic
    if (currentLanguage.code === 'ar') {
      setDirection('rtl');
      document.documentElement.dir = 'rtl';
    } else {
      setDirection('ltr');
      document.documentElement.dir = 'ltr';
    }
  }, [currentLanguage]);

  const setLanguage = (code: string) => {
    const language = languages.find((lang) => lang.code === code);
    if (language) {
      setCurrentLanguage(language);
    }
  };

  const t = (key: TranslationKey): string => {
    return translations[currentLanguage.code]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        languages,
        setLanguage,
        t,
        direction,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
