
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, FileText, Calendar, HelpCircle } from 'lucide-react';

const Admissions: React.FC = () => {
  const admissionSteps = [
    {
      title: 'Submit Application',
      description: 'Complete and submit the online application form with required documents.',
      icon: <FileText className="w-10 h-10 text-gold" />,
    },
    {
      title: 'Entrance Test',
      description: 'Applicants may be required to take an entrance test based on their desired program.',
      icon: <CheckCircle2 className="w-10 h-10 text-gold" />,
    },
    {
      title: 'Interview',
      description: 'Selected candidates will be invited for an interview with faculty members.',
      icon: <HelpCircle className="w-10 h-10 text-gold" />,
    },
    {
      title: 'Admission Confirmation',
      description: 'Successful candidates will receive an admission offer to confirm their enrollment.',
      icon: <Calendar className="w-10 h-10 text-gold" />,
    },
  ];

  const faqItems = [
    {
      question: 'What is the admission process for new students?',
      answer: 'The admission process includes submitting an application form, providing necessary documents, appearing for an entrance test, and attending an interview. Successful candidates will receive an admission offer.',
    },
    {
      question: 'What are the documents required for admission?',
      answer: 'Required documents include birth certificate, previous academic records, transfer certificate (if applicable), passport-sized photographs, and address proof.',
    },
    {
      question: 'Is there an entrance exam for admission?',
      answer: 'Yes, depending on the grade level and program, an entrance test may be conducted to assess the student\'s academic readiness.',
    },
    {
      question: 'What are the fee payment options available?',
      answer: 'Fees can be paid annually, semi-annually, or quarterly. We accept payments through online transfer, cheque, or at our administrative office.',
    },
  ];

  return (
    <section id="admissions" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Admissions</h2>
          <p className="section-subtitle">Join our community of learners and begin your journey towards excellence</p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-navy mb-6 font-playfair text-center">Admission Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <h4 className="text-lg font-bold text-navy mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Tabs defaultValue="highSchool" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="highSchool" className="text-lg py-3">High School</TabsTrigger>
            <TabsTrigger value="juniorCollege" className="text-lg py-3">Junior College</TabsTrigger>
          </TabsList>

          <TabsContent value="highSchool">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy mb-4">High School Admission Requirements</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-2 mt-0.5" />
                    <span>Completed application form with recent photographs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-2 mt-0.5" />
                    <span>Birth certificate (original and photocopy)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-2 mt-0.5" />
                    <span>Previous academic records and progress reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-2 mt-0.5" />
                    <span>Transfer certificate from previous school</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-2 mt-0.5" />
                    <span>Entrance test and interview as per grade level</span>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <a href="#" className="bg-navy hover:bg-navy-dark text-white font-medium px-6 py-3 rounded-md transition-colors">
                    Download Application Form
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="juniorCollege">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy mb-4">Junior College Admission Requirements</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-2 mt-0.5" />
                    <span>Completed application form with recent photographs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-2 mt-0.5" />
                    <span>Class 10 mark sheet and passing certificate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-2 mt-0.5" />
                    <span>School leaving certificate or transfer certificate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-2 mt-0.5" />
                    <span>Caste certificate (if applicable for scholarship)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gold mr-2 mt-0.5" />
                    <span>Eligibility based on Class 10 results and entrance test (for specific streams)</span>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <a href="#" className="bg-navy hover:bg-navy-dark text-white font-medium px-6 py-3 rounded-md transition-colors">
                    Download Application Form
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-navy mb-6 font-playfair text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold text-navy mb-2">{item.question}</h4>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-700 mb-4">Have more questions about admission? Contact our admissions office:</p>
            <div className="font-medium text-navy">admissions@vduhs.edu.in | +91 1234 567 890</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
