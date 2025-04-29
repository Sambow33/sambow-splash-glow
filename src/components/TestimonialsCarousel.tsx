
import { useState, useCallback, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah K.",
    role: "Content Creator",
    text: "Sambow has transformed my streaming experience. I'm reaching a global audience and earning more than ever before!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200"
  },
  {
    name: "Ahmed M.",
    role: "Gaming Streamer",
    text: "The multilingual support has connected me with fans from around the world. My community has grown 300% in two months!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200"
  },
  {
    name: "Priya S.",
    role: "Travel Vlogger",
    text: "The HD streaming quality is perfect for showing my adventures. My viewers say it feels like they're traveling with me!",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200"
  },
  {
    name: "Carlos R.",
    role: "Music Artist",
    text: "I've been able to monetize my concerts and connect with fans worldwide. Sambow is changing the game for indie musicians.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200"
  }
];

const TestimonialsCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  
  const handleSelect = useCallback(() => {
    if (!api) return;
    setActiveSlide(api.selectedScrollSnap());
  }, [api]);

  // Set up the event handlers when the API is available
  useEffect(() => {
    if (!api) return;
    
    // Add event listeners to the carousel
    api.on("select", handleSelect);
    // Remove event listener when component unmounts
    return () => {
      api.off("select", handleSelect);
    };
  }, [api, handleSelect]);

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-tiktok-cyan/10 to-tiktok-pink/10 backdrop-blur-md">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          <span className="bg-gradient-to-r from-tiktok-cyan to-tiktok-pink bg-clip-text text-transparent">
            What Streamers Say
          </span>
        </h2>
        
        <Carousel 
          className="w-full max-w-3xl mx-auto"
          setApi={setApi}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-black/40 backdrop-blur-md border border-white/10 hover:border-tiktok-pink/50 transition-all duration-300 overflow-hidden shadow-xl">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 overflow-hidden rounded-full mb-4 border-2 border-tiktok-pink ring-2 ring-tiktok-cyan shadow-glow">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <blockquote className="text-white mb-4 italic font-light">"{testimonial.text}"</blockquote>
                      <footer className="mt-2">
                        <p className="text-white font-bold text-tiktok-cyan">{testimonial.name}</p>
                        <p className="text-tiktok-pink text-sm">{testimonial.role}</p>
                      </footer>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === index ? "bg-gradient-to-r from-tiktok-cyan to-tiktok-pink w-6" : "bg-white/30 w-2"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex justify-center mt-6 gap-4">
            <CarouselPrevious className="relative static translate-y-0 left-0 bg-black/30 border-tiktok-cyan text-tiktok-cyan hover:bg-black/50 hover:text-white" />
            <CarouselNext className="relative static translate-y-0 right-0 bg-black/30 border-tiktok-pink text-tiktok-pink hover:bg-black/50 hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
