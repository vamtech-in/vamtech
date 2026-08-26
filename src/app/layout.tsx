import type { Metadata } from 'next';
import Script from 'next/script';
import { Plus_Jakarta_Sans, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import JsonLd from '@/components/JsonLd';

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-253YX57JZ7';
const gtmContainerId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

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
  metadataBase: new URL('https://vamtech.io'),
  title: {
    default: 'VAMTech — Custom Software Development & AI Agency | Lucknow & Global',
    template: '%s | VAMTech Software & AI',
  },
  description:
    'VAMTech is a top custom software development company in Lucknow, India. We build high-performance web apps, mobile apps, SaaS MVPs in 2–4 weeks, AI automation, and cloud platforms with 100% source code ownership. Packages start at ₹24,999.',
  keywords: [
    'VAMTech',
    'Custom Software Development Company',
    'Software Development Company in Lucknow',
    'Hire Software Developers India',
    'Web Application Development Services',
    'Mobile App Development Lucknow',
    'SaaS MVP Development Agency',
    'Rapid MVP Development 2-4 Weeks',
    'Next.js Web Development Agency',
    'React Native App Developers',
    'AI Automation Agency',
    'Custom AI Agents Development',
    'LLM Integration Services',
    'Cloud DevOps Consulting',
    'AWS Cloud Architecture',
    'UI UX Product Design Company',
    'Affordable Software Development Services',
    'Software Startup Lucknow',
    'Full Stack Developers for Hire',
    'IT Solutions Company Tiwariganj Lucknow',
    'Software Development Uttar Pradesh India',
    'Digital Transformation Agency',
    'Bespoke Enterprise Software',
    'Next.js 15 TypeScript Developers',
    'Hire Dedicated Developers',
    'Software Development Cost India',
  ],
  authors: [{ name: 'VAMTech Technologies', url: 'https://vamtech.io' }],
  creator: 'VAMTech Technologies',
  publisher: 'VAMTech Technologies',
  applicationName: 'VAMTech',
  alternates: {
    canonical: 'https://vamtech.io',
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
  openGraph: {
    title: 'VAMTech — Custom Software Development & AI Agency | Lucknow & Global',
    description:
      'Turn your vision into high-performance web applications, mobile apps, AI automations, and scalable software. 2–4 week MVP sprints, starting at ₹24,999. 100% IP ownership.',
    url: 'https://vamtech.io',
    siteName: 'VAMTech',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/favicon.svg',
        width: 800,
        height: 800,
        alt: 'VAMTech — Custom Software & AI Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VAMTech — Custom Software Development & AI Agency',
    description:
      'We engineer web apps, mobile apps, SaaS MVPs, and AI automations for ambitious startups and businesses. Starting at ₹24,999.',
    site: '@vamtech_io',
    creator: '@vamtech_io',
    images: ['/favicon.svg'],
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
