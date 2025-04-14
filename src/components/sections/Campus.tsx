
import React from 'react';
import { BookOpen, Monitor, Users, Dumbbell, BookMarked, Coffee } from 'lucide-react';

const Campus: React.FC = () => {
  const facilities = [
    {
      icon: <BookOpen size={32} className="text-gold mb-4" />,
      title: 'Modern Library',
      description: 'Extensive collection of books, journals, and digital resources in multiple languages.',
    },
    {
      icon: <Monitor size={32} className="text-gold mb-4" />,
      title: 'Computer Labs',
      description: 'State-of-the-art computer laboratories with high-speed internet and latest software.',
    },
    {
      icon: <Dumbbell size={32} className="text-gold mb-4" />,
      title: 'Sports Facilities',
      description: 'Indoor and outdoor sports facilities including cricket, football, basketball, and more.',
    },
    {
      icon: <BookMarked size={32} className="text-gold mb-4" />,
      title: 'Science Labs',
      description: 'Well-equipped physics, chemistry, and biology laboratories for practical learning.',
    },
    {
      icon: <Users size={32} className="text-gold mb-4" />,
      title: 'Auditorium',
      description: 'Modern auditorium for cultural events, seminars, and special programs.',
    },
    {
      icon: <Coffee size={32} className="text-gold mb-4" />,
      title: 'Cafeteria',
      description: 'Clean and hygienic cafeteria serving nutritious meals and refreshments.',
    },
  ];

  return (
    <section id="campus" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Campus & Facilities</h2>
          <p className="section-subtitle">Experience our state-of-the-art infrastructure designed for holistic development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="aspect-video bg-navy/5 rounded-lg overflow-hidden mb-4">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
                alt="Computer Lab"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-navy/5 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80"
                  alt="Classroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-navy/5 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
                  alt="Library"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-6 font-playfair">Modern Infrastructure</h3>
            <p className="text-gray-700 mb-4">
              Our campus is designed to provide an optimal learning environment with modern facilities that enhance the educational experience of our students. We believe in creating spaces that inspire creativity, collaboration, and academic growth.
            </p>
            <p className="text-gray-700 mb-4">
              From well-equipped classrooms to specialized laboratories, our infrastructure supports both academic excellence and extracurricular activities, ensuring the holistic development of every student.
            </p>
            <p className="text-gray-700">
              The campus layout promotes a sense of community while providing dedicated spaces for focused learning, research, sports, and cultural activities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="flex flex-col items-center">
                {facility.icon}
                <h3 className="text-xl font-bold text-navy mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-block bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-3 rounded-md text-lg transition-colors">
            Schedule a Campus Tour
          </a>
        </div>
      </div>
    </section>
  );
};

export default Campus;
