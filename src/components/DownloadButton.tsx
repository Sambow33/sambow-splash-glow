
import { useState } from 'react';
import { DownloadCloud } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

type DownloadButtonProps = {
  variant?: 'default' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
};

const DownloadButton = ({ variant = 'gradient', size = 'md' }: DownloadButtonProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { t } = useLanguage();

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false);
      toast.success(t('download.success'), {
        description: t('download.success.description')
      });
    }, 1500);
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2",
    lg: "px-8 py-3 text-lg"
  };

  if (variant === 'gradient') {
    return (
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className={`relative flex items-center gap-2 font-medium rounded-full transition-all duration-300 transform hover:scale-105 
          bg-gradient-to-r from-tiktok-cyan to-tiktok-pink text-white shadow-lg 
          hover:shadow-xl ${sizeClasses[size]} hover:brightness-110 active:brightness-90`}
      >
        <DownloadCloud className="w-5 h-5" />
        <span>{isDownloading ? t('download.downloading') : t('download.button')}</span>
        
        {isDownloading && (
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-tiktok-cyan to-tiktok-pink opacity-70 animate-pulse"></span>
        )}
      </button>
    );
  }

  return (
    <Button 
      variant={variant} 
      size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'default'} 
      onClick={handleDownload}
      disabled={isDownloading}
      className="flex items-center gap-2"
    >
      <DownloadCloud className="w-4 h-4" />
      <span>{isDownloading ? t('download.downloading') : t('download.button')}</span>
    </Button>
  );
};

export default DownloadButton;
