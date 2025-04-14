
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 font-playfair">VDUHS</h3>
            <p className="mb-4 text-sm">
              Vilasrao Deshmukh Urdu High School & Jr. College is dedicated to providing quality education that empowers students to achieve excellence in academics and character development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 font-playfair">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#academics" className="hover:text-gold transition-colors">Academics</a></li>
              <li><a href="#faculty" className="hover:text-gold transition-colors">Faculty</a></li>
              <li><a href="#admissions" className="hover:text-gold transition-colors">Admissions</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 font-playfair">Academics</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">High School</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Junior College</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Curriculum</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Examination</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Academic Calendar</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 font-playfair">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5" />
                <span>123 Education Street, Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+91 1234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>info@vduhs.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} Vilasrao Deshmukh Urdu High School & Jr. College. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
