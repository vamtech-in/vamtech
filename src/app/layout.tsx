import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParallaxGlow from '@/components/ParallaxGlow';

export const metadata: Metadata = {
  title: 'Vamtech | Enterprise Software Development, Cloud & AI Engineering',
  description: 'Vamtech engineers high-concurrency custom software, cloud DevOps foundations, and autonomous AI systems for technology leaders and fast-scaling enterprises.',
  keywords: [
    'Custom Software Development',
    'Enterprise Cloud Architecture',
    'AI Engineering & RAG',
    'DevOps Automation',
    'Next.js Web Applications',
    'High Throughput Backend Systems'
  ],
  authors: [{ name: 'Vamtech Technologies' }],
  openGraph: {
    title: 'Vamtech | Enterprise Software Development, Cloud & AI Engineering',
    description: 'Transform complex business logic into high-performance, resilient software systems.',
    url: 'https://vamtech.io',
    siteName: 'Vamtech Technologies',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ParallaxGlow />
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
