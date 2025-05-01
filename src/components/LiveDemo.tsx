
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, MessageCircle, Share, Gift } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const LiveDemo = () => {
  const [likes, setLikes] = useState(1243);
  const [comments, setComments] = useState([
    { id: 1, user: 'Sarah_K', message: 'Love this content! 🔥', time: '1m ago' },
    { id: 2, user: 'Ahmed_M', message: 'Great stream as always!', time: '2m ago' },
    { id: 3, user: 'Carlos_R', message: 'Can you show that again?', time: '3m ago' }
  ]);
  
  const handleLike = () => {
    setLikes(likes + 1);
  };
  
  const { t, direction } = useLanguage();
  
  return (
    <section className="py-12 px-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tiktok-pink/10 to-tiktok-cyan/10 opacity-30"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          <span className="bg-gradient-to-r from-tiktok-pink to-tiktok-cyan bg-clip-text text-transparent">
            Live Streaming Demo
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto bg-black/40 rounded-xl overflow-hidden shadow-2xl border border-white/10">
          {/* Video Preview */}
          <div className="aspect-video bg-gradient-to-r from-tiktok-black to-tiktok-gray relative">
            <div className="absolute top-4 left-4">
              <Badge variant="destructive" className="bg-red-500 animate-pulse">LIVE</Badge>
            </div>
            <div className="absolute top-4 right-4">
              <Badge className="bg-black/60 backdrop-blur-md border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-tiktok-cyan animate-pulse"></div>
                  1.5K viewers
                </div>
              </Badge>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 border-2 border-tiktok-pink mr-3">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200" alt="Streamer" />
                </Avatar>
                <div>
                  <h3 className="text-white font-bold text-sm">Sarah_K</h3>
                  <p className="text-white/70 text-xs">Gaming & Entertainment</p>
                </div>
                <button className="ml-auto bg-gradient-to-r from-tiktok-cyan to-tiktok-pink text-white rounded-full px-4 py-1 text-sm font-medium">
                  Follow
                </button>
              </div>
            </div>
          </div>
          
          {/* Interaction Area */}
          <div className="flex flex-col md:flex-row">
            {/* Video Controls */}
            <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-white/10">
              <div className="flex justify-between items-center">
                <div className="flex space-x-6">
                  <button onClick={handleLike} className="flex flex-col items-center text-white/80 hover:text-tiktok-pink transition-colors">
                    <Heart className={`h-6 w-6 ${likes > 1243 ? 'text-tiktok-pink fill-tiktok-pink' : ''}`} />
                    <span className="text-xs mt-1">{likes}</span>
                  </button>
                  <button className="flex flex-col items-center text-white/80 hover:text-tiktok-cyan transition-colors">
                    <MessageCircle className="h-6 w-6" />
                    <span className="text-xs mt-1">321</span>
                  </button>
                  <button className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
                    <Share className="h-6 w-6" />
                    <span className="text-xs mt-1">Share</span>
                  </button>
                </div>
                <div>
                  <button className="flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-medium rounded-full px-4 py-2">
                    <Gift className="h-4 w-4" />
                    <span>Send Gift</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Live Chat */}
            <div className="w-full md:w-96 p-4 bg-black/40">
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <MessageCircle className="h-4 w-4 mr-2" />
                Live Chat
              </h4>
              <div className="space-y-3 mb-4 h-32 overflow-y-auto scrollbar-none">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full overflow-hidden flex-shrink-0 bg-tiktok-pink/20"></div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-tiktok-cyan text-xs font-medium">{comment.user}</p>
                        <span className="text-white/40 text-xs">{comment.time}</span>
                      </div>
                      <p className="text-white text-sm">{comment.message}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  placeholder="Add a comment..." 
                  className="flex-1 bg-white/10 border border-white/20 rounded-full py-2 px-4 text-white text-sm focus:outline-none focus:border-tiktok-cyan"
                />
                <button className="bg-tiktok-cyan/80 hover:bg-tiktok-cyan text-white rounded-full p-2">
                  <MessageCircle className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
