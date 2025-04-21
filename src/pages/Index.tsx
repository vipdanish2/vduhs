import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Academics from '@/components/sections/Academics';
import Faculty from '@/components/sections/Faculty';
import Campus from '@/components/sections/Campus';
import News from '@/components/sections/News';
import Testimonials from '@/components/sections/Testimonials';
import Admissions from '@/components/sections/Admissions';
import Contact from '@/components/sections/Contact';
import GallerySection from "@/components/sections/GallerySection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <GallerySection />
      <Academics />
      <Faculty />
      <Campus />
      <News />
      <Testimonials />
      <Admissions />
      <Contact />
    </Layout>
  );
};

export default Index;
