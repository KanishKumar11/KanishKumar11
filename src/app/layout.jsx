import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import SmoothScroll from "@/components/hooks/SmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  metadataBase: new URL('https://kanishkumar.in'),
  title: {
    default: "Kanish Kumar - Full-Stack Developer",
    template: "%s | Kanish Kumar - Full-Stack Developer"
  },
  description: "Full-stack developer specializing in mobile app development, web applications, WordPress sites, and AI integration. Expert in React Native, Next.js, and modern web technologies.",
  keywords: [
    "full-stack developer",
    "React Native developer",
    "Next.js developer",
    "WordPress developer",
    "mobile app development",
    "web application development",
    "AI integration",
    "freelance developer",
    "SaaS development",
    "custom website development"
  ],
  authors: [{ name: "Kanish Kumar", url: "https://kanishkumar.in" }],
  creator: "Kanish Kumar",
  publisher: "Kanish Kumar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kanishkumar.in",
    title: "Kanish Kumar - Full-Stack Developer",
    description: "Full-stack developer specializing in mobile app development, web applications, WordPress sites, and AI integration. Expert in React Native, Next.js, and modern web technologies.",
    siteName: "Kanish Kumar Portfolio",
    images: [
      {
        url: "/images/og/default-og.jpg",
        width: 1200,
        height: 630,
        alt: "Kanish Kumar - Full-Stack Developer Portfolio",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanish Kumar - Full-Stack Developer",
    description: "Full-stack developer specializing in mobile app development, web applications, WordPress sites, and AI integration.",
    creator: "@Kanishkumar_11",
    images: ["/images/og/default-og.jpg"],
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
    google: 'your-google-verification-code', // Add your actual verification code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Kanish Kumar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://kanishkumar.in" />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kanish Kumar",
              "url": "https://kanishkumar.in",
              "sameAs": [
                "https://twitter.com/Kanishkumar_11",
                "https://github.com/KanishKumar11",
                "https://linkedin.com/in/kanishkumar11"
              ],
              "jobTitle": "Full-Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "knowsAbout": [
                "React Native Development",
                "Next.js Development",
                "WordPress Development",
                "Mobile App Development",
                "Web Application Development",
                "AI Integration"
              ],
              "description": "Full-stack developer specializing in mobile app development, web applications, WordPress sites, and AI integration."
            })
          }}
        />
      </head>
      <body className={`${montserrat.variable} font-mont bg-light dark:bg-dark`}>
        <NextTopLoader color="#f97316" showSpinner={false} />
        {/* <SmoothScroll /> */}
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-GA-ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YOUR-GA-ID');
          `}
        </Script>
      </body>
    </html>
  );
}
