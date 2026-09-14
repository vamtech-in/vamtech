import React from 'react';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import ServicesTicker from '@/components/ServicesTicker';
import BrandStatement from '@/components/BrandStatement';
import ServicesOverview from '@/components/ServicesOverview';
import FeaturedWorks from '@/components/FeaturedWorks';
import Testimonials from '@/components/Testimonials';
import StatsSection from '@/components/StatsSection';
import TeamSection from '@/components/TeamSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section: "Custom Software for Growing Businesses based in India" */}
      <Hero />

      {/* 2. Trust / Client Logo Marquee: "Trusted by founders." */}
      <ClientLogos />

      {/* 3. Services Scrolling Ticker with '✻' separators */}
      <ServicesTicker />

      {/* 4. Brand Statement with Progressive Scroll Word Highlight */}
      <BrandStatement />

      {/* 5. Services Overview: "What we do" (01 to 07 Interactive Desktop + Mobile Accordion) */}
      <ServicesOverview />

      {/* 6. Featured Works: "Recent Works" (01 / 07 Slider with Scale Hover & Custom Cursor) */}
      <FeaturedWorks />

      {/* 7. Testimonials Carousel: "Why clients love Morfikos" */}
      <Testimonials />

      {/* 8. Bold Typographic Statistics Area */}
      <StatsSection />

      {/* 9. Team Section: "The people who build it" (Portrait Cards with Hover Reveal) */}
      <TeamSection />

      {/* 10. Problem → Solution 3-Column Table: "We turn business bottlenecks into better systems." */}
      <ProblemSolutionSection />

      {/* 11. Pricing Section: "Explore Pricing" (Essentials ₹20,000 & Custom Build) */}
      <PricingSection />

      {/* 12. Large Dark CTA Section: "Have a business problem worth solving?" */}
      <CTASection />

      {/* 13. Interactive Contact Intake Form: "Let's build something useful." */}
      <ContactSection />
    </>
  );
}
