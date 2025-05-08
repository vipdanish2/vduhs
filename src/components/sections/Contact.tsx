
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">We're here to answer your questions and assist you in any way we can</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-none shadow-md">
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-navy/5 rounded-full">
                  <MapPin className="h-8 w-8 text-navy" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Our Location</h3>
              <p className="text-gray-600">123 Education Street</p>
              <p className="text-gray-600">City, Maharashtra</p>
              <p className="text-gray-600">India - 400001</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-navy/5 rounded-full">
                  <Phone className="h-8 w-8 text-navy" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Call Us</h3>
              <p className="text-gray-600">Main Office: +91 1234 567 890</p>
              <p className="text-gray-600">Admissions: +91 1234 567 891</p>
              <p className="text-gray-600">Student Affairs: +91 1234 567 892</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-navy/5 rounded-full">
                  <Clock className="h-8 w-8 text-navy" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-gray-600">Sunday & Holidays: Closed</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6 font-playfair">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy"
                    placeholder="Your email address"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy"
                  placeholder="Message subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-navy hover:bg-navy-dark text-white font-medium px-6 py-3 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              title="School Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0195678546176!2d72.83899361490024!3d19.103590387071547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c839e2766325%3A0x7cd2da63c6c12a89!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="mt-16 bg-navy/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-navy mb-4 font-playfair">Email Us</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-4">
            <div className="flex items-center justify-center">
              <Mail className="w-5 h-5 text-gold mr-2" />
              <span className="text-navy font-medium">General Inquiries:</span>
              <a href="mailto:info@vduhs.edu.in" className="text-navy-light ml-2 hover:underline">info@vduhs.edu.in</a>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-5 h-5 text-gold mr-2" />
              <span className="text-navy font-medium">Admissions:</span>
              <a href="mailto:admissions@vduhs.edu.in" className="text-navy-light ml-2 hover:underline">admissions@vduhs.edu.in</a>
            </div>
          </div>
          <p className="text-gray-600">We strive to respond to all inquiries within 24-48 hours during business days.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
