
import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const News: React.FC = () => {
  const newsItems = [
    {
      title: 'Annual Science Exhibition 2023',
      date: 'October 15, 2023',
      excerpt: 'Students showcase innovative science projects and experiments at the annual science exhibition.',
      image: 'https://images.unsplash.com/photo-1605711285791-0219e80e43a3?auto=format&fit=crop&q=80',
    },
    {
      title: 'State-Level Urdu Debate Competition',
      date: 'September 28, 2023',
      excerpt: 'Our students excel at the state-level Urdu debate competition, bringing home multiple awards.',
      image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80',
    },
    {
      title: 'New Computer Lab Inauguration',
      date: 'August 12, 2023',
      excerpt: 'The school inaugurates a new state-of-the-art computer laboratory to enhance digital learning.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04b0252?auto=format&fit=crop&q=80',
    },
  ];

  const events = [
    {
      title: 'Parent-Teacher Meeting',
      date: 'November 10, 2023',
    },
    {
      title: 'Annual Sports Day',
      date: 'December 5-7, 2023',
    },
    {
      title: 'Winter Break',
      date: 'December 24, 2023 - January 5, 2024',
    },
    {
      title: 'Cultural Festival',
      date: 'January 25-26, 2024',
    },
  ];

  return (
    <section id="news" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">News & Events</h2>
          <p className="section-subtitle">Stay updated with the latest happenings at our institution</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-navy mb-6 font-playfair">Latest News</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar size={14} className="mr-1" />
                      <span>{item.date}</span>
                    </div>
                    <h4 className="text-lg font-bold text-navy mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <a href="#" className="text-gold hover:text-gold-dark font-medium flex items-center text-sm transition-colors">
                      Read More <ChevronRight size={16} className="ml-1" />
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-navy mb-6 font-playfair">Upcoming Events</h3>
            <div className="bg-navy/5 rounded-lg p-6">
              <ul className="space-y-5">
                {events.map((event, index) => (
                  <li key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-bold text-navy mb-1">{event.title}</h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar size={14} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <a href="#" className="inline-block w-full bg-navy hover:bg-navy-dark text-white text-center font-medium px-4 py-2 rounded-md transition-colors">
                  View Full Calendar
                </a>
              </div>
            </div>

            <div className="mt-8 bg-gold/10 rounded-lg p-6">
              <h3 className="text-xl font-bold text-navy mb-4">Newsletter</h3>
              <p className="text-gray-600 text-sm mb-4">Subscribe to our newsletter to receive updates and news directly in your inbox.</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy"
                />
                <button className="w-full bg-gold hover:bg-gold-dark text-navy font-medium px-4 py-2 rounded-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
