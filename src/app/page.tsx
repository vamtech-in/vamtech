import React from 'react';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ServicesSection from '@/components/ServicesSection';
import WhyVamTech from '@/components/WhyVamTech';
import TechStackSection from '@/components/TechStackSection';
import IndustriesSection from '@/components/IndustriesSection';
import ProcessSection from '@/components/ProcessSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Stats Section */}
      <Stats />

      {/* 3. Services Section */}
      <ServicesSection />

      {/* 4. Why VAM|Tech Section */}
      <WhyVamTech />

      {/* 5. Technology Stack Section */}
      <TechStackSection />

      {/* 6. Solutions / Industries Section */}
      <IndustriesSection />

      {/* 7. Process Section */}
      <ProcessSection />

      {/* 8. Featured Projects Section */}
      <FeaturedProjects />

      {/* 9. About Section */}
      <AboutSection />

      {/* 10. Final CTA Section */}
      <CTASection />

      {/* 11. Interactive Contact Section */}
      <ContactSection />
    </>
  );
}
