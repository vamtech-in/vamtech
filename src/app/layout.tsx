import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Plus_Jakarta_Sans, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import JsonLd from '@/components/JsonLd';

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-253YX57JZ7';
const gtmContainerId = (process.env.NEXT_PUBLIC_GTM_ID && process.env.NEXT_PUBLIC_GTM_ID !== 'GTM-XXXXXXX') ? process.env.NEXT_PUBLIC_GTM_ID : null;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0055ff',
};

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vamtech.in'),
  title: {
    default: 'VAMTech — Best Software Development Company in Lucknow | Custom Software & AI',
    template: '%s | VAMTech — Software Company in Lucknow',
  },
  description:
    'VAMTech is the leading custom software development company in Lucknow, India. We build high-performance web apps, mobile apps, SaaS MVPs in 2–4 weeks, AI automation, and cloud platforms with 100% source code ownership. Packages start at ₹24,999.',
  keywords: [
    'Software Company in Lucknow',
    'Best Software Development Company in Lucknow',
    'Top Software Companies in Lucknow',
    'Software Development Company Lucknow',
    'Web Development Company in Lucknow',
    'Mobile App Development Company Lucknow',
    'Custom Software Development Lucknow',
    'IT Company in Lucknow',
    'Software Agency Lucknow',
    'Best Web Developers in Lucknow',
    'Software Company Near Me Lucknow',
    'Gomti Nagar Lucknow Software Company',
    'Indira Nagar Lucknow Software Agency',
    'Faizabad Road Tiwariganj Lucknow IT Company',
    'Startup MVP Development Lucknow',
    'AI Development Company Lucknow',
    'Full Stack Developers Lucknow',
    'Affordable Software Development Services',
    'SaaS Development Agency India',
    'VAMTech',
  ],
  authors: [{ name: 'VAMTech Technologies', url: 'https://www.vamtech.in' }],
  creator: 'VAMTech Technologies',
  publisher: 'VAMTech Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.vamtech.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.vamtech.in',
    siteName: 'VAMTech Software & AI Technologies',
    title: 'Best Software Development Company in Lucknow | VAMTech',
    description:
      'Custom software engineering, mobile apps, SaaS MVPs, and AI automations in 2–4 weeks with 100% source code ownership. Headquartered in Lucknow, serving clients globally.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VAMTech — Best Software Development Company in Lucknow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Software Development Company in Lucknow | VAMTech',
    description:
      'Custom software engineering, mobile apps, SaaS MVPs, and AI automations in 2–4 weeks with 100% source code ownership.',
    creator: '@vamtech_io',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'bsvWlgXxqFFkRu7Q0Tuqd5SDjB-ctvgNL4hgM8Eooqk',
  },
  category: 'technology',
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
        <meta
          name="google-site-verification"
          content="bsvWlgXxqFFkRu7Q0Tuqd5SDjB-ctvgNL4hgM8Eooqk"
        />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Lucknow" />
        <meta name="geo.position" content="26.8927;81.0422" />
        <meta name="ICBM" content="26.8927, 81.0422" />
        <JsonLd />
        {gaMeasurementId ? (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}
        {gtmContainerId ? (
          <Script id="gtm-init" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmContainerId}');
            `}
          </Script>
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
        {gtmContainerId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmContainerId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        ) : null}
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
