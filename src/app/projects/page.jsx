// Server component that handles SEO metadata
export const metadata = {
  title: "Projects Portfolio - Full-Stack Development Showcase",
  description: "Explore my portfolio of mobile apps, web applications, WordPress sites, and custom development projects. Featuring React Native, Next.js, and AI-integrated solutions.",
  keywords: [
    "portfolio",
    "projects", 
    "mobile apps",
    "web applications",
    "WordPress development",
    "React Native",
    "Next.js",
    "full-stack developer",
    "AI integration",
    "SaaS development",
    "custom website development"
  ],
  openGraph: {
    title: "Projects Portfolio - Full-Stack Development Showcase",
    description: "Explore my portfolio of mobile apps, web applications, WordPress sites, and custom development projects. Featuring React Native, Next.js, and AI-integrated solutions.",
    type: "website",
    url: "https://kanishkumar.in/projects",
    images: [
      {
        url: "/images/og/projects-og.jpg",
        width: 1200,
        height: 630,
        alt: "Kanish Kumar Projects Portfolio - Full-Stack Development Showcase",
      }
    ],
    siteName: "Kanish Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects Portfolio - Full-Stack Development Showcase",
    description: "Explore my portfolio of mobile apps, web applications, WordPress sites, and custom development projects.",
    images: ["/images/og/projects-og.jpg"],
    creator: "@Kanishkumar_11",
  },
  alternates: {
    canonical: "https://kanishkumar.in/projects",
  },
};

// Import the client component
import ProjectsClient from "./ProjectsClient";

// Server component that renders the client component
export default function ProjectsPage() {
  return <ProjectsClient />;
}