
import { ReactNode } from 'react';

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode; // New prop to add optional action buttons
};

const FeatureCard = ({ icon, title, description, action }: FeatureCardProps) => {
  return (
    <div className="card-highlight p-6 hover:shadow-xl transition-all duration-300 animate-float-up opacity-0 stagger-item group">
      <div className="mb-6 text-white text-5xl flex justify-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-tiktok-cyan to-tiktok-pink group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 text-center">{title}</h3>
      <p className="text-white/80 text-center mb-4">{description}</p>
      
      {action && (
        <div className="flex justify-center mt-2">
          {action}
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
