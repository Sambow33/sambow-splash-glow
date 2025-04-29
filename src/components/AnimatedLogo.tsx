
import { useEffect, useState } from 'react';

const AnimatedLogo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 animate-pulse-gentle"></div>
        <div className="relative glossy-effect">
          <h1 className="text-6xl md:text-8xl font-bold text-white text-shadow animate-float">
            Sambow
          </h1>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
