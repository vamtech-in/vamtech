import React from 'react';
import type { Metadata } from 'next';
import CareersClient from '@/components/CareersClient';

export const metadata: Metadata = {
  title: 'Careers & Engineering Jobs at VAMTech | Join Our Remote Pods',
  description:
    'Explore engineering, UI/UX, and AI jobs at VAMTech. Work on ambitious web, mobile, and cloud software systems with competitive compensation and remote flexibility.',
  keywords: [
    'Software Developer Jobs Lucknow',
    'Remote Full Stack Developer Hiring',
    'Frontend React Developer Jobs',
    'AI Engineer Openings India',
    'VAMTech Careers',
  ],
  alternates: {
    canonical: 'https://vamtech.io/careers',
  },
  openGraph: {
    title: 'Careers at VAMTech — Engineering & Product Roles',
    description:
      'Join our team of software craftspeople building modern web and AI applications.',
    url: 'https://vamtech.io/careers',
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
