
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { BackgroundSlideshow } from '@/components/ui/background-slideshow';

const Hero: React.FC = () => {
  const images = [
    "/lovable-uploads/ba6a37e5-754b-4315-bb63-b280c9a92957.png",
    "/lovable-uploads/c6d9b869-9adb-4e5c-8dc1-2ae1b9634215.png",
    "/lovable-uploads/006d8414-eb23-4174-93cb-f717b807804b.png",
    "/lovable-uploads/2c225e42-f418-49cb-9fcd-895b712901df.png",
    "/lovable-uploads/0bf4242a-0290-449b-8b33-2891e03920d9.png"
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <BackgroundSlideshow 
        images={images} 
        interval={6000} 
        overlayColor="rgba(10, 36, 99, 0.75)"
        className="absolute inset-0"
      />
      
      <div className="container mx-auto px-6 relative z-30 text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gold mb-2 animate-fade-in">
          Adarsh Sevhabhvi Sanstha
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 font-playfair animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Vilasrao Deshmukh
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-6 font-playfair animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Urdu High School & Jr. College
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Empowering Minds, Building Futures through Excellence in Education
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a href="#admissions" className="bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-3 rounded-md text-lg transition-colors">
            Apply Now
          </a>
          <a href="#about" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold px-8 py-3 rounded-md text-lg transition-colors">
            Learn More
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-30"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={36} />
      </a>
    </section>
  );
};

export default Hero;
