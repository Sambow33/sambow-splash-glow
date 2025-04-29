
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-sambow flex flex-col">
      <div className="container mx-auto py-12 px-4 flex-1">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
          <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
          <div className="text-white/90 space-y-4">
            <p>
              This page contains the Privacy Policy for Sambow. 
              Please check back later for the complete privacy policy.
            </p>
            <Link to="/" className="inline-block text-white hover:underline mt-4">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
