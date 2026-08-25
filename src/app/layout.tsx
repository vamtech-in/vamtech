import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParallaxGlow from '@/components/ParallaxGlow';
import CommandPalette from '@/components/CommandPalette';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

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
    <html lang="en" className={`${plusJakarta.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body style={{ backgroundColor: '#060913', color: '#F8FAFC', minHeight: '100vh', margin: 0 }}>
        <ParallaxGlow />
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '80px', position: 'relative', zIndex: 1 }}>
          {children}
        </main>
        <CommandPalette />
        <Footer />
      </body>
    </html>
  );
}
