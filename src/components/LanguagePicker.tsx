
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

type Language = {
  name: string;
  code: string;
};

const languages: Language[] = [
  { name: 'English', code: 'en' },
  { name: 'Arabic', code: 'ar' },
  { name: 'Hindi', code: 'hi' },
  { name: 'Chinese', code: 'zh' },
  { name: 'French', code: 'fr' }
];

const LanguagePicker = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm transition-all border border-white/20">
        {currentLanguage.name}
        <ChevronDown className="ml-2 h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black/80 backdrop-blur-lg border-white/10 text-white">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className={`hover:bg-white/10 cursor-pointer ${
              currentLanguage.code === language.code ? 'font-bold text-cyan-400' : ''
            }`}
            onClick={() => setCurrentLanguage(language)}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguagePicker;
