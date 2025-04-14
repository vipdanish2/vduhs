
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const Faculty: React.FC = () => {
  const facultyMembers = [
    {
      name: 'Dr. Syed Ahmad',
      position: 'Principal',
      image: null,
      initials: 'SA',
      description: 'Ph.D. in Education with over 20 years of experience in educational leadership.',
    },
    {
      name: 'Mrs. Fatima Khan',
      position: 'Vice Principal',
      image: null,
      initials: 'FK',
      description: 'Master's in Mathematics and Educational Administration with expertise in curriculum development.',
    },
    {
      name: 'Mr. Rahul Deshmukh',
      position: 'Head of Sciences',
      image: null,
      initials: 'RD',
      description: 'Master's in Physics with a passion for innovative teaching methods in sciences.',
    },
    {
      name: 'Ms. Aisha Patel',
      position: 'Head of Languages',
      image: null,
      initials: 'AP',
      description: 'Ph.D. in Urdu Literature with publications in language education and linguistics.',
    },
  ];

  return (
    <section id="faculty" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Distinguished Faculty</h2>
          <p className="section-subtitle">Meet the dedicated educators shaping the future of our students</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 pb-6">
                <div className="mb-4 flex justify-center">
                  <Avatar className="h-24 w-24">
                    {member.image && <AvatarImage src={member.image} alt={member.name} />}
                    <AvatarFallback className="text-xl bg-navy text-white">{member.initials}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-bold text-navy mb-1">{member.name}</h3>
                <p className="text-gold-dark font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-navy/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-navy mb-4 font-playfair">Join Our Team</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            We are always looking for passionate educators to join our institution. If you are dedicated to making a difference in students' lives, we'd love to hear from you.
          </p>
          <a href="#" className="inline-block bg-navy hover:bg-navy-dark text-white font-medium px-6 py-3 rounded-md transition-colors">
            View Opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
