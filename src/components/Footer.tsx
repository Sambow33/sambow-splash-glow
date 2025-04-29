
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-white/80 mb-4 md:mb-0">
          © 2025 Sambow. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <Link to="/terms" className="text-white/80 hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
