
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, GraduationCap, Users, Beaker, Languages, Music } from 'lucide-react';

const Academics: React.FC = () => {
  const programs = {
    highSchool: [
      {
        icon: <Languages className="w-6 h-6 text-navy" />,
        title: 'Languages',
        description: 'Urdu, Hindi, English, Arabic & Marathi',
      },
      {
        icon: <Beaker className="w-6 h-6 text-navy" />,
        title: 'Sciences',
        description: 'Physics, Chemistry, Biology & Computer Science',
      },
      {
        icon: <BookOpen className="w-6 h-6 text-navy" />,
        title: 'Social Studies',
        description: 'History, Geography, Civics & Economics',
      },
      {
        icon: <Music className="w-6 h-6 text-navy" />,
        title: 'Arts & Physical Education',
        description: 'Drawing, Craft, Music & Sports Activities',
      },
    ],
    juniorCollege: [
      {
        icon: <Beaker className="w-6 h-6 text-navy" />,
        title: 'Science Stream',
        description: 'Physics, Chemistry, Biology, Mathematics',
      },
      {
        icon: <BookOpen className="w-6 h-6 text-navy" />,
        title: 'Commerce Stream',
        description: 'Accounts, Economics, Business Studies',
      },
      {
        icon: <Users className="w-6 h-6 text-navy" />,
        title: 'Arts Stream',
        description: 'Literature, History, Political Science, Sociology',
      },
      {
        icon: <Languages className="w-6 h-6 text-navy" />,
        title: 'Language Studies',
        description: 'Advanced Urdu, English, and other languages',
      },
    ],
  };

  return (
    <section id="academics" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Academic Programs</h2>
          <p className="section-subtitle">Comprehensive education tailored to develop well-rounded individuals</p>
        </div>

        <Tabs defaultValue="highSchool" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="highSchool" className="text-lg py-3">High School</TabsTrigger>
            <TabsTrigger value="juniorCollege" className="text-lg py-3">Junior College</TabsTrigger>
          </TabsList>

          <TabsContent value="highSchool">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-navy mb-4 font-playfair">High School Program (Classes 8-10)</h3>
              <p className="text-gray-700 mb-6">
                Our high school program focuses on providing a strong foundation in core subjects while nurturing students' talents and interests. The curriculum follows the State Board syllabus with additional enrichment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.highSchool.map((program, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">{program.icon}</div>
                      <div>
                        <h4 className="font-bold text-lg text-navy mb-2">{program.title}</h4>
                        <p className="text-gray-600">{program.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="juniorCollege">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-navy mb-4 font-playfair">Junior College (Classes 11-12)</h3>
              <p className="text-gray-700 mb-6">
                Our Junior College offers diverse streams that prepare students for higher education and future careers. The curriculum is designed to build depth in chosen fields while maintaining a holistic approach to education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.juniorCollege.map((program, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">{program.icon}</div>
                      <div>
                        <h4 className="font-bold text-lg text-navy mb-2">{program.title}</h4>
                        <p className="text-gray-600">{program.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <a href="#admissions" className="inline-flex items-center bg-navy hover:bg-navy-dark text-white font-medium px-6 py-3 rounded-md transition-colors">
            <GraduationCap className="mr-2 h-5 w-5" />
            Learn More About Admissions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Academics;
