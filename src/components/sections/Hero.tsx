
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(10, 36, 99, 0.8), rgba(10, 36, 99, 0.8)), url(https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/90"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 font-playfair animate-fade-in">
          Vilasrao Deshmukh
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-6 font-playfair animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Urdu High School & Jr. College
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Empowering Minds, Building Futures through Excellence in Education
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={36} />
      </a>
    </section>
  );
};

export default Hero;
