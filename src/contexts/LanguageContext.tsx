
import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next, UseTranslationResponse } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Define the structure for our languages
export type Language = {
  code: string;
  name: string;
  dir: 'ltr' | 'rtl';
};

// Define our language context
type LanguageContextType = {
  currentLanguage: Language;
  languages: Language[];
  setLanguage: (code: string) => void;
  t: UseTranslationResponse<'translation'>['t'];
  i18n: typeof i18n;
  direction: 'ltr' | 'rtl';
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Define our language context provider
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State for the current language
  const [currentLanguage, setCurrentLanguage] = useState<Language>({
    code: 'en',
    name: 'English',
    dir: 'ltr',
  });

  // List of supported languages
  const languages: Language[] = [
    { code: 'en', name: 'English', dir: 'ltr' },
    { code: 'es', name: 'Español', dir: 'ltr' },
    { code: 'fr', name: 'Français', dir: 'ltr' },
    { code: 'de', name: 'Deutsch', dir: 'ltr' },
    { code: 'ar', name: 'العربية', dir: 'rtl' },
    { code: 'zh', name: '中文', dir: 'ltr' },
  ];

  // Function to set the language
  const setLanguage = (code: string) => {
    const language = languages.find((lang) => lang.code === code);
    if (language) {
      setCurrentLanguage(language);
      i18n.changeLanguage(code);
    }
  };

  // Initialize i18next
  useEffect(() => {
    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        debug: false,
        fallbackLng: 'en',
        interpolation: {
          escapeValue: false,
        },
        resources: {
          en: {
            translation: {
              'hero.title': 'Stream, Connect, Earn with Sambow',
              'hero.subtitle': 'The premier live streaming platform for creators and influencers',
              'features.title': 'What Makes Sambow Special',
              'features.streaming': 'High Quality Streaming',
              'features.streaming.description': 'Stream in up to 4K resolution with ultra-low latency',
              'features.multilingual': 'Global Reach',
              'features.multilingual.description': 'Automatic translation in 50+ languages',
              'features.monetization': 'Multiple Revenue Streams',
              'features.monetization.description': 'Earn from subscriptions, gifts, and brand deals',
              'features.liveChat': 'Interactive Live Chat',
              'features.liveChat.description': 'Real-time chat with filters and moderation tools',
              'features.gifts': 'Virtual Gifts',
              'features.gifts.description': 'Receive gifts from fans that convert to real money',
              'features.games': 'Interactive Games',
              'features.games.description': 'Play games with your audience during live streams',
              'features.download': 'Mobile App',
              'features.download.description': 'Take Sambow with you anywhere with our mobile app',
              'download.button': 'Download App',
              'download.downloading': 'Downloading...',
              'download.success': 'Download Started',
              'download.success.description': 'Your download will begin shortly',
              'launchButton': 'Launch App',
              'download.title': 'Get Sambow App',
              'download.subtitle': 'Download our app and take Sambow with you everywhere. Available on all major platforms.',
              'download.mobile.title': 'Mobile App',
              'download.mobile.description': 'Perfect for streaming on the go. Available for iOS and Android.',
              'download.tablet.title': 'Tablet App',
              'download.tablet.description': 'Optimized for larger screens with enhanced viewing experience.',
              'download.desktop.title': 'Desktop App',
              'download.desktop.description': 'Full-featured streaming studio for professional creators.',
              'download.requirements': 'System requirements: iOS 13+, Android 8+, Windows 10/11, macOS 10.15+. Internet connection required for streaming features.'
            },
          },
          es: {
            translation: {
              'hero.title': 'Transmite, Conecta, Gana con Sambow',
              'hero.subtitle': 'La principal plataforma de transmisión en vivo para creadores e influencers',
              'features.title': 'Qué Hace Especial a Sambow',
              'features.streaming': 'Streaming de Alta Calidad',
              'features.streaming.description': 'Transmite en resolución de hasta 4K con latencia ultra baja',
              'features.multilingual': 'Alcance Global',
              'features.multilingual.description': 'Traducción automática en más de 50 idiomas',
              'features.monetization': 'Múltiples Fuentes de Ingresos',
              'features.monetization.description': 'Gana con suscripciones, regalos y acuerdos de marca',
              'features.liveChat': 'Chat en Vivo Interactivo',
              'features.liveChat.description': 'Chat en tiempo real con filtros y herramientas de moderación',
              'features.gifts': 'Regalos Virtuales',
              'features.gifts.description': 'Recibe regalos de fans que se convierten en dinero real',
              'features.games': 'Juegos Interactivos',
              'features.games.description': 'Juega con tu audiencia durante las transmisiones en vivo',
              'features.download': 'Aplicación Móvil',
              'features.download.description': 'Lleva Sambow contigo a cualquier parte con nuestra aplicación móvil',
              'download.button': 'Descargar App',
              'download.downloading': 'Descargando...',
              'download.success': 'Descarga Iniciada',
              'download.success.description': 'Tu descarga comenzará en breve',
              'launchButton': 'Iniciar App',
              'download.title': 'Obtén la App de Sambow',
              'download.subtitle': 'Descarga nuestra app y lleva Sambow contigo a todas partes. Disponible en todas las plataformas principales.',
              'download.mobile.title': 'App Móvil',
              'download.mobile.description': 'Perfecta para transmitir sobre la marcha. Disponible para iOS y Android.',
              'download.tablet.title': 'App para Tablet',
              'download.tablet.description': 'Optimizada para pantallas más grandes con una experiencia de visualización mejorada.',
              'download.desktop.title': 'App de Escritorio',
              'download.desktop.description': 'Estudio de transmisión con todas las funciones para creadores profesionales.',
              'download.requirements': 'Requisitos del sistema: iOS 13+, Android 8+, Windows 10/11, macOS 10.15+. Se requiere conexión a Internet para las funciones de transmisión.'
            },
          },
          fr: {
            translation: {
              'hero.title': 'Diffusez, Connectez, Gagnez avec Sambow',
              'hero.subtitle': 'La plateforme de streaming en direct pour les créateurs et influenceurs',
              'features.title': 'Ce Qui Rend Sambow Spécial',
              'features.streaming': 'Streaming Haute Qualité',
              'features.streaming.description': 'Diffusez en résolution jusqu\'à 4K avec une latence ultra-faible',
              'features.multilingual': 'Portée Mondiale',
              'features.multilingual.description': 'Traduction automatique dans plus de 50 langues',
              'features.monetization': 'Multiples Sources de Revenus',
              'features.monetization.description': 'Gagnez grâce aux abonnements, cadeaux et partenariats',
              'features.liveChat': 'Chat En Direct Interactif',
              'features.liveChat.description': 'Chat en temps réel avec filtres et outils de modération',
              'features.gifts': 'Cadeaux Virtuels',
              'features.gifts.description': 'Recevez des cadeaux de fans convertibles en argent réel',
              'features.games': 'Jeux Interactifs',
              'features.games.description': 'Jouez avec votre public pendant les streams',
              'features.download': 'Application Mobile',
              'features.download.description': 'Emportez Sambow partout avec notre application mobile',
              'download.button': 'Télécharger l\'App',
              'download.downloading': 'Téléchargement...',
              'download.success': 'Téléchargement Démarré',
              'download.success.description': 'Votre téléchargement débutera sous peu',
              'launchButton': 'Lancer l\'App',
              'download.title': 'Téléchargez l\'App Sambow',
              'download.subtitle': 'Téléchargez notre application et emportez Sambow partout avec vous. Disponible sur toutes les plateformes principales.',
              'download.mobile.title': 'App Mobile',
              'download.mobile.description': 'Parfait pour le streaming en déplacement. Disponible pour iOS et Android.',
              'download.tablet.title': 'App pour Tablette',
              'download.tablet.description': 'Optimisée pour les grands écrans avec une expérience de visionnage améliorée.',
              'download.desktop.title': 'App de Bureau',
              'download.desktop.description': 'Studio de streaming complet pour les créateurs professionnels.',
              'download.requirements': 'Configuration système requise : iOS 13+, Android 8+, Windows 10/11, macOS 10.15+. Connexion Internet requise pour les fonctionnalités de streaming.'
            },
          },
          de: {
            translation: {
              'hero.title': 'Streame, Verbinde, Verdiene mit Sambow',
              'hero.subtitle': 'Die führende Livestreaming-Plattform für Creator und Influencer',
              'features.title': 'Was Sambow Besonders Macht',
              'features.streaming': 'Hochwertige Streams',
              'features.streaming.description': 'Streame in bis zu 4K-Auflösung mit ultraniedriger Latenz',
              'features.multilingual': 'Globale Reichweite',
              'features.multilingual.description': 'Automatische Übersetzung in über 50 Sprachen',
              'features.monetization': 'Vielfältige Einnahmequellen',
              'features.monetization.description': 'Verdiene durch Abos, Geschenke und Markendeals',
              'features.liveChat': 'Interaktiver Live-Chat',
              'features.liveChat.description': 'Echtzeit-Chat mit Filtern und Moderationstools',
              'features.gifts': 'Virtuelle Geschenke',
              'features.gifts.description': 'Erhalte Geschenke von Fans, die zu echtem Geld werden',
              'features.games': 'Interaktive Spiele',
              'features.games.description': 'Spiele mit deinem Publikum während der Livestreams',
              'features.download': 'Mobile App',
              'features.download.description': 'Nimm Sambow überall mit unserer mobilen App mit',
              'download.button': 'App Herunterladen',
              'download.downloading': 'Wird heruntergeladen...',
              'download.success': 'Download Gestartet',
              'download.success.description': 'Dein Download beginnt in Kürze',
              'launchButton': 'App Starten',
              'download.title': 'Hol Dir die Sambow App',
              'download.subtitle': 'Lade unsere App herunter und nimm Sambow überallhin mit. Verfügbar auf allen wichtigen Plattformen.',
              'download.mobile.title': 'Mobile App',
              'download.mobile.description': 'Perfekt für Streaming unterwegs. Verfügbar für iOS und Android.',
              'download.tablet.title': 'Tablet App',
              'download.tablet.description': 'Optimiert für größere Bildschirme mit verbesserter Darstellung.',
              'download.desktop.title': 'Desktop App',
              'download.desktop.description': 'Vollständig ausgestattetes Streaming-Studio für professionelle Creator.',
              'download.requirements': 'Systemanforderungen: iOS 13+, Android 8+, Windows 10/11, macOS 10.15+. Internetverbindung für Streaming-Funktionen erforderlich.'
            },
          },
          ar: {
            translation: {
              'hero.title': 'بث، تواصل، اربح مع سامبو',
              'hero.subtitle': 'منصة البث المباشر الرائدة للمبدعين والمؤثرين',
              'features.title': 'ما الذي يجعل سامبو مميزًا',
              'features.streaming': 'بث عالي الجودة',
              'features.streaming.description': 'بث بدقة تصل إلى 4K مع زمن استجابة منخفض للغاية',
              'features.multilingual': 'وصول عالمي',
              'features.multilingual.description': 'ترجمة تلقائية بأكثر من 50 لغة',
              'features.monetization': 'مصادر دخل متعددة',
              'features.monetization.description': 'اكسب من الاشتراكات والهدايا وصفقات العلامات التجارية',
              'features.liveChat': 'دردشة مباشرة تفاعلية',
              'features.liveChat.description': 'دردشة في الوقت الفعلي مع فلاتر وأدوات إشراف',
              'features.gifts': 'هدايا افتراضية',
              'features.gifts.description': 'استلم هدايا من المعجبين تتحول إلى أموال حقيقية',
              'features.games': 'ألعاب تفاعلية',
              'features.games.description': 'العب مع جمهورك أثناء البث المباشر',
              'features.download': 'تطبيق الجوال',
              'features.download.description': 'خذ سامبو معك في أي مكان مع تطبيق الهاتف المحمول',
              'download.button': 'تحميل التطبيق',
              'download.downloading': 'جاري التحميل...',
              'download.success': 'بدأ التنزيل',
              'download.success.description': 'سيبدأ التنزيل الخاص بك قريبًا',
              'launchButton': 'تشغيل التطبيق',
              'download.title': 'احصل على تطبيق سامبو',
              'download.subtitle': 'قم بتنزيل تطبيقنا وخذ سامبو معك في كل مكان. متاح على جميع المنصات الرئيسية.',
              'download.mobile.title': 'تطبيق الجوال',
              'download.mobile.description': 'مثالي للبث أثناء التنقل. متاح لنظامي التشغيل iOS و Android.',
              'download.tablet.title': 'تطبيق الجهاز اللوحي',
              'download.tablet.description': 'محسن للشاشات الكبيرة مع تجربة مشاهدة محسنة.',
              'download.desktop.title': 'تطبيق سطح المكتب',
              'download.desktop.description': 'استوديو بث كامل الميزات للمبدعين المحترفين.',
              'download.requirements': 'متطلبات النظام: iOS 13+ و Android 8+ و Windows 10/11 و macOS 10.15+. يلزم الاتصال بالإنترنت لميزات البث.'
            },
          },
          zh: {
            translation: {
              'hero.title': '与Sambow一起直播、连接和赚钱',
              'hero.subtitle': '创作者和影响者的首选直播平台',
              'features.title': '是什么让Sambow与众不同',
              'features.streaming': '高质量流媒体',
              'features.streaming.description': '以高达4K分辨率和超低延迟进行直播',
              'features.multilingual': '全球覆盖',
              'features.multilingual.description': '50多种语言的自动翻译',
              'features.monetization': '多元化收入来源',
              'features.monetization.description': '从订阅、礼物和品牌合作中获利',
              'features.liveChat': '互动直播聊天',
              'features.liveChat.description': '实时聊天，配备过滤和审核工具',
              'features.gifts': '虚拟礼物',
              'features.gifts.description': '接收粉丝礼物，转换为真实货币',
              'features.games': '互动游戏',
              'features.games.description': '在直播期间与观众一起玩游戏',
              'features.download': '移动应用',
              'features.download.description': '通过我们的移动应用，随时随地使用Sambow',
              'download.button': '下载应用',
              'download.downloading': '下载中...',
              'download.success': '下载已开始',
              'download.success.description': '您的下载即将开始',
              'launchButton': '启动应用',
              'download.title': '获取Sambow应用',
              'download.subtitle': '下载我们的应用，随时随地使用Sambow。可在所有主要平台上使用。',
              'download.mobile.title': '移动应用',
              'download.mobile.description': '非常适合在旅途中进行流式传输。适用于iOS和Android。',
              'download.tablet.title': '平板电脑应用',
              'download.tablet.description': '针对更大的屏幕进行了优化，具有增强的观看体验。',
              'download.desktop.title': '桌面应用',
              'download.desktop.description': '适用于专业创作者的全功能流媒体工作室。',
              'download.requirements': '系统要求：iOS 13+，Android 8+，Windows 10/11，macOS 10.15+。流媒体功能需要互联网连接。'
            },
          },
        },
      });

    // Set current language based on detected language
    const detectedLanguage = i18n.language.substring(0, 2);
    const initialLanguage = languages.find((lang) => lang.code === detectedLanguage) || currentLanguage;
    setCurrentLanguage(initialLanguage);
  }, [currentLanguage, languages]);

  // Provide the context value
  const value: LanguageContextType = {
    currentLanguage,
    languages,
    setLanguage,
    t: i18n.t,
    i18n: i18n,
    direction: currentLanguage.dir,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
