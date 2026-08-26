import React from 'react';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import Stats from '@/components/Stats';
import AudienceLens from '@/components/AudienceLens';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section: "Software / Transform / Accelerate" */}
      <Hero />

      {/* 2. Technology & Services Section */}
      <ServicesSection />

      {/* 3. Portfolio Section: 2x2 Grid + Detailed Phone & Monitor Showcases */}
      <FeaturedProjects />

      {/* 4. Geometric Orange Stats Badges (382+, 14+, 180+) */}
      <Stats />

      {/* 5. "We Work With" - 3 Black Cards with Neon Badges */}
      <AudienceLens />

      {/* 6. "Community love us" - Testimonials with Quote Watermarks */}
      <TestimonialsSection />

      {/* 7. "Hire us" - Comparative Pricing Cards ($3500/m. & $2000/m.) */}
      <PricingSection />

      {/* 8. "Community's questions" - FAQ Accordion + Quick Inquiry */}
      <FAQSection />

      {/* 9. "Let's work together" - Pre-Footer Black Banner */}
      <CTASection />

      {/* 10. "Contact us" - Exact Image 1 Layout (White Card + Follow Doodle + Fieldset Form + 100% Badge) */}
      <ContactSection />
    </>
  );
}

