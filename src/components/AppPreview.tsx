
import { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share } from 'lucide-react';

const AppPreview = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className={`md:w-1/2 text-center md:text-left transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Engage with Your Audience <span className="text-cyan-400">Anywhere</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              Create captivating live streams, connect with viewers around the world, and monetize your content all in one place.
            </p>
            <div className="flex gap-8 justify-center md:justify-start mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">10M+</p>
                <p className="text-white/70">Active Users</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">150+</p>
                <p className="text-white/70">Countries</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">5M+</p>
                <p className="text-white/70">Daily Streams</p>
              </div>
            </div>
          </div>
          
          <div className={`md:w-1/2 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="relative">
              {/* Phone mockup */}
              <div className="mx-auto w-[280px] h-[570px] bg-black rounded-[40px] p-3 shadow-xl border-4 border-gray-800 relative z-10">
                <div className="w-full h-full overflow-hidden rounded-[32px] bg-gradient-to-b from-pink-500 to-purple-700 relative">
                  {/* App Interface Mockup */}
                  <div className="h-full flex flex-col">
                    {/* Status bar */}
                    <div className="bg-black/20 p-2 flex justify-between items-center">
                      <div className="text-white text-xs">9:41</div>
                      <div className="rounded-full w-16 h-5 bg-black/30"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 overflow-hidden relative">
                      {/* Video content */}
                      <div className="absolute inset-0">
                        <div className="w-full h-full bg-gradient-to-br from-purple-900/80 via-pink-800/50 to-red-900/80 flex items-center justify-center">
                          <div className="text-center">
                            <div className="animate-pulse w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                              <div className="w-16 h-16 rounded-full bg-white/40 flex items-center justify-center">
                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                                  <span className="text-pink-600 text-4xl">▶</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-white text-sm">LIVE</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* UI overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 rounded-full bg-white/20 mr-3"></div>
                          <div>
                            <p className="text-white text-sm font-bold">@username</p>
                            <p className="text-white/70 text-xs">Streaming now</p>
                          </div>
                          <button className="ml-auto bg-white py-1 px-3 rounded-full text-xs font-bold text-pink-600">
                            Follow
                          </button>
                        </div>
                        <p className="text-white text-sm mb-3">
                          Check out my live stream! #Sambow #LiveNow
                        </p>
                      </div>
                      
                      {/* Side actions */}
                      <div className="absolute right-2 bottom-20 flex flex-col items-center gap-4">
                        <div className="flex flex-col items-center">
                          <button className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center mb-1">
                            <Heart className="w-5 h-5 text-white" />
                          </button>
                          <span className="text-white text-xs">127k</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <button className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center mb-1">
                            <MessageCircle className="w-5 h-5 text-white" />
                          </button>
                          <span className="text-white text-xs">4.2k</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <button className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center mb-1">
                            <Share className="w-5 h-5 text-white" />
                          </button>
                          <span className="text-white text-xs">Share</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute top-10 -right-20 w-40 h-40 rounded-full bg-cyan-400 blur-3xl opacity-20"></div>
              <div className="absolute -bottom-10 -left-20 w-60 h-60 rounded-full bg-pink-500 blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
