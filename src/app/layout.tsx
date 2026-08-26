import type { Metadata } from 'next';
import { EB_Garamond, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';

import ScrollProgressBar from '@/components/ScrollProgressBar';

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
  title: 'VAM|Tech — IT Services, Cloud & Intelligent Software Solutions',
  description:
    'VAM|Tech builds scalable digital products, custom enterprise software, AI automation, and cloud platforms for ambitious startups and businesses.',
  keywords: [
    'VAM Tech',
    'Software Development',
    'AI Automation',
    'Web & Mobile Development',
    'Cloud DevOps',
    'UI/UX Product Design',
    'Digital Transformation',
  ],
  authors: [{ name: 'VAM|Tech Technologies Inc.' }],
  openGraph: {
    title: 'VAM|Tech — Building Technology That Moves Businesses Forward',
    description:
      'Transform ideas into scalable digital products through software engineering, AI, cloud, and modern technology solutions.',
    url: 'https://vamtech.io',
    siteName: 'VAM|Tech',
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
      suppressHydrationWarning
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
        suppressHydrationWarning
        style={{
          backgroundColor: '#f8fafc',
          color: '#0f172a',
          minHeight: '100vh',
          margin: 0,
        }}
      >
        <ScrollProgressBar />
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
