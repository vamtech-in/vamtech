import type { Metadata } from 'next';
import { EB_Garamond, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import CommandPalette from '@/components/CommandPalette';
import ParallaxGlow from '@/components/ParallaxGlow';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vamtech — High-Concurrency Software & Autonomous Systems Journal',
  description: 'An editorial tech journal and engineering lab typeset on warm parchment. Specializing in mission-critical distributed systems, cloud infrastructure, and autonomous AI architectures.',
  keywords: [
    'Enterprise Software Architecture',
    'High-Concurrency Distributed Systems',
    'AI Engineering & Vector RAG',
    'OCSF Data Pipelines',
    'Zero-Trust Cloud DevOps',
    'Technical Journal'
  ],
  authors: [{ name: 'Vamtech Engineering Labs' }],
  openGraph: {
    title: 'Vamtech — Editorial Tech Journal & Architecture Lab',
    description: 'Transforming complex business logic into high-performance, resilient software systems.',
    url: 'https://vamtech.io',
    siteName: 'Vamtech Labs',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${jetbrainsMono.variable} ${inter.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Suppress noisy third-party chrome-extension errors from bubbling to Next.js dev overlay
              if (typeof window !== 'undefined') {
                window.addEventListener('error', function(e) {
                  if (e.filename && e.filename.startsWith('chrome-extension://')) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                  }
                }, true);
                window.addEventListener('unhandledrejection', function(e) {
                  if (e.reason && (e.reason.stack?.includes('chrome-extension://') || e.reason.message?.includes('chrome: call method'))) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                  }
                }, true);
              }
            `,
          }}
        />
      </head>
      <body
        style={{
          backgroundColor: '#f6f3f1',
          color: '#242424',
          minHeight: '100vh',
          margin: 0,
          fontFamily: 'var(--font-abc-diatype-mono)',
        }}
      >
        <AnnouncementBar
          badge="JOURNAL v2.4"
          message="In-Flight Data Transforms & Zero-Copy Pipeline Specs Published"
          linkText="Read Journal"
          linkHref="/case-studies"
        />
        <Navbar />
        <main
          style={{
            minHeight: 'calc(100vh - 120px)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {children}
        </main>
        <CommandPalette />
        <Footer />
      </body>
    </html>
  );
}
