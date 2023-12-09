import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "Kanish Kumar | Best Web Developer",
  description:
    "Hi, I &sbquo; m a freelance web developer who can create stunning and user-friendly websites for any industry. I have skills in frontend and backend development, using HTML, CSS, JavaScript, NEXTJs, MYSQL, and WordPress. I can handle web design, development, maintenance, optimization, and hosting. I can deliver high-quality and responsive web solutions that suit your needs and budget. I love web development and learning new things. I communicate well, deliver on time, and satisfy customers. If you need a freelance web developer who can make your web vision a reality, please contact me. I’m excited to work with you on your next web project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
