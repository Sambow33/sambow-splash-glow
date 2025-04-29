
import { useState } from 'react';

const LaunchButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`px-8 py-4 bg-white rounded-full font-semibold text-lg 
                transition-all duration-300 transform
                ${isHovered 
                  ? 'scale-105 shadow-lg text-sambow-purple' 
                  : 'shadow-md text-sambow-purple'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="flex items-center justify-center relative z-10">
        Launch App
        {isHovered && (
          <svg className="w-5 h-5 ml-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        )}
      </span>
    </button>
  );
};

export default LaunchButton;
