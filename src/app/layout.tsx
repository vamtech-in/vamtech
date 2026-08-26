import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import ScrollProgressBar from '@/components/ScrollProgressBar';

const gaMeasurementId = 'G-253YX57JZ7';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VAMTech — Software • Transform • Accelerate',
  description:
    'VAMTech builds scalable digital products, custom enterprise software, AI automation, and cloud platforms for ambitious startups and businesses.',
  keywords: [
    'VAMTech',
    'Software Development',
    'AI Automation',
    'Web & Mobile Development',
    'Cloud DevOps',
    'UI/UX Product Design',
    'Digital Transformation',
  ],
  authors: [{ name: 'VAMTech Technologies Inc.' }],
  verification: {
    google: 'bsvWlgXxqFFkRu7Q0Tuqd5SDjB-ctvgNL4hgM8Eooqk',
  },
  openGraph: {
    title: 'VAMTech — Software • Transform • Accelerate',
    description:
      'Empower your business with cutting-edge digital solutions & custom software engineering.',
    url: 'https://vamtech.io',
    siteName: 'VAMTech',
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
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} ${inter.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="bsvWlgXxqFFkRu7Q0Tuqd5SDjB-ctvgNL4hgM8Eooqk"
        />
        {gaMeasurementId ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaMeasurementId}', { anonymize_ip: true });
                `,
              }}
            />
          </>
        ) : null}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Suppress noisy third-party chrome-extension errors from dev overlay
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
          backgroundColor: 'var(--bg-canvas)',
          color: 'var(--text-main)',
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
