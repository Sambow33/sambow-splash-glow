
import { useState, useCallback } from 'react';
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
  useCallback(() => {
    if (!api) return;
    
    // Add event listeners to the carousel
    api.on("select", handleSelect);
    // Remove event listener when component unmounts
    return () => {
      api.off("select", handleSelect);
    };
  }, [api, handleSelect]);

  return (
    <section className="py-16 px-4 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">What Streamers Say</h2>
        
        <Carousel 
          className="w-full max-w-3xl mx-auto"
          setApi={setApi}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 overflow-hidden rounded-full mb-4 border-2 border-pink-500">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <blockquote className="text-white mb-4">"{testimonial.text}"</blockquote>
                      <footer className="mt-2">
                        <p className="text-white font-semibold">{testimonial.name}</p>
                        <p className="text-white/70 text-sm">{testimonial.role}</p>
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
                className={`w-2 h-2 rounded-full transition-all ${
                  activeSlide === index ? "bg-white w-4" : "bg-white/50"
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="relative static translate-y-0 left-0" />
            <CarouselNext className="relative static translate-y-0 right-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
