
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, Globe } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const LanguagePicker = () => {
  const { currentLanguage, languages, setLanguage } = useLanguage();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-white bg-black/30 hover:bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm transition-all border border-tiktok-cyan/30">
        <Globe className="w-4 h-4 mr-2" />
        {currentLanguage.name}
        <ChevronDown className="ml-2 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black/80 backdrop-blur-lg border-tiktok-cyan/20 text-white">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className={`hover:bg-tiktok-cyan/10 cursor-pointer ${
              currentLanguage.code === language.code ? 'font-bold text-tiktok-cyan' : ''
            }`}
            onClick={() => setLanguage(language.code)}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguagePicker;
