
import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Ahmed Khan',
      role: 'Alumni, Class of 2018',
      text: "My time at VDUHS laid a strong foundation for my academic and personal growth. The teachers' dedication and comprehensive curriculum prepared me well for university life and beyond.",
      initials: 'AK',
    },
    {
      name: 'Saira Patel',
      role: 'Parent',
      text: "We chose VDUHS for its academic excellence and values-based education. The school has exceeded our expectations by nurturing our child's talents and instilling important life skills.",
      initials: 'SP',
    },
    {
      name: 'Dr. Mohammed Ali',
      role: 'Community Leader',
      text: 'VDUHS stands as a pillar of educational excellence in our community. Its commitment to preserving our cultural heritage while providing modern education is commendable.',
      initials: 'MA',
    },
  ];

  return (
    <section className="section-padding bg-navy text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-playfair">Testimonials</h2>
          <p className="text-xl md:text-2xl font-medium text-white/80 mb-8 max-w-3xl mx-auto">
            What our students, parents, and community have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-none">
              <CardContent className="p-6">
                <Quote className="text-gold h-10 w-10 mb-4 opacity-80" />
                <p className="text-white/90 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-gold text-navy">{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-white/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
