import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "Kanish Kumar | Best Web Developer",
  description:
    "Hi, I'm a freelance web developer who can create stunning and user-friendly websites for any industry. I have skills in frontend and backend development, using HTML, CSS, JavaScript, NEXTJs, MYSQL, and WordPress. I can handle web design, development, maintenance, optimization, and hosting. I can deliver high-quality and responsive web solutions that suit your needs and budget. I love web development and learning new things. I communicate well, deliver on time, and satisfy customers. If you need a freelance web developer who can make your web vision a reality, please contact me. I’m excited to work with you on your next web project.",
  keywords:
    "web developer, frontend developer, backend developer, fullstack developer, nextjs developer, wordpress developer, freelance web developer",
  image: "https://kanishkumar.in/images/KanishKumar.png",
  twitter: {
    handle: "@KanishKumar_11",
    site: "@KanishKumar_11",
    card: "summary_large_image",
  },
  og: {
    url: "https://kanishkumar.in/",
    title: "Kanish Kumar | Best Web Developer",
    description:
      "Hi, I'm a freelance web developer who can create stunning and user-friendly websites for any industry. I have skills in frontend and backend development, using HTML, CSS, JavaScript, NEXTJs, MYSQL, and WordPress. I can handle web design, development, maintenance, optimization, and hosting. I can deliver high-quality and responsive web solutions that suit your needs and budget. I love web development and learning new things. I communicate well, deliver on time, and satisfy customers. If you need a freelance web developer who can make your web vision a reality, please contact me. I’m excited to work with you on your next web project.",
    image: "https://kanishkumar.in/images/KanishKumar.png",
    site_name: "Kanish Kumar | Best Web Developer",
    type: "website",
  },
  openGraph: {
    title: "Kanish Kumar | Best Web Developer",
    type: "profile",
    description:
      "Hi, I'm a freelance web developer who can create stunning and user-friendly websites for any industry. I have skills in frontend and backend development, using HTML, CSS, JavaScript, NEXTJs, MYSQL, and WordPress. I can handle web design, development, maintenance, optimization, and hosting. I can deliver high-quality and responsive web solutions that suit your needs and budget. I love web development and learning new things. I communicate well, deliver on time, and satisfy customers. If you need a freelance web developer who can make your web vision a reality, please contact me. I’m excited to work with you on your next web project.",
    url: "https://kanishkumar.in/",
    siteName: "KanishKumar",
    locale: "en_US",
    images: [{ url: "/KanishKumar.png", alt: "Kanish Kumar" }],
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
        <meta name="keywords" content={metadata.keywords} />
        <meta name="image" content={metadata.image} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:site_name" content={metadata.og.site_name} />
        <meta property="og:type" content={metadata.og.type} />
        <link rel="stylesheet" href="/styles/globals.css" />
      </head>
      <body className={montserrat.className}>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }          `}
        </Script>
        <Navbar />
        <NextTopLoader
          color="#ff4800"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
