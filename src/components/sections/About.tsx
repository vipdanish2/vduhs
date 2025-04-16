
import React from 'react';
import { BookOpen, Award, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-gold" />,
      title: 'Quality Education',
      description: 'Providing outstanding academic programs that prepare students for future success.',
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: 'Expert Faculty',
      description: 'Our dedicated teachers bring passion and expertise to inspire young minds.',
    },
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: 'Excellence Tradition',
      description: 'A long history of academic achievement and producing exceptional graduates.',
    },
    {
      icon: <Clock className="w-8 h-8 text-gold" />,
      title: 'Modern Approach',
      description: 'Blending traditional values with innovative teaching methodologies.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Our Institution</h2>
          <p className="section-subtitle">A Legacy of Excellence in Urdu-Medium Education</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&q=80"
              alt="School building"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              style={{ maxHeight: '400px' }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-6 font-playfair">Our Rich History</h3>
            <p className="text-gray-700 mb-4">
              Founded with a vision to provide quality education with a focus on Urdu language and culture, Vilasrao Deshmukh Urdu High School & Jr. College has been a beacon of educational excellence for decades.
            </p>
            <p className="text-gray-700 mb-4">
              Named after the renowned leader Vilasrao Deshmukh, our institution embodies his vision of inclusive education and community development. We take pride in our heritage while embracing modern educational practices.
            </p>
            <p className="text-gray-700">
              Our institution has consistently maintained high academic standards, producing graduates who excel in various fields and contribute meaningfully to society.
            </p>
          </div>
        </div>

        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-xl shadow-2xl group"
          >
            <div className="aspect-w-16 aspect-h-9 md:aspect-h-6">
              <img
                src="/lovable-uploads/9361ac80-eaae-4905-b9d1-fbbcb3eae0c7.png"
                alt="School assembly with students in uniform"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-6 text-white">
                <h4 className="text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">School Assembly</h4>
                <p className="text-white/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  Our students gather for morning assembly, embodying discipline and unity that form the foundation of our educational philosophy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-navy/5 rounded-full transform transition-transform duration-300 hover:scale-110">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-navy mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
