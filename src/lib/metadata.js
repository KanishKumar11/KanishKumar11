// SEO Metadata Configuration and Utilities
export const siteConfig = {
  name: "Kanish Kumar - Full-Stack Developer",
  description: "Full-stack developer specializing in mobile app development, web applications, WordPress sites, and AI integration. Expert in React Native, Next.js, and modern web technologies.",
  url: "https://kanishkumar.in",
  ogImage: "/images/og/default-og.jpg",
  creator: "Kanish Kumar",
  keywords: [
    "full-stack developer",
    "React Native developer",
    "Next.js developer", 
    "WordPress developer",
    "mobile app development",
    "web application development",
    "AI integration",
    "freelance developer"
  ]
};

// Category-specific metadata
export const categoryMetadata = {
  "mobile-app-development": {
    title: "Mobile App Development Portfolio - React Native & Expo Expert",
    description: "Professional mobile app development services using React Native and Expo. View my portfolio of iOS and Android apps with AI integration and modern UX design.",
    keywords: ["React Native developer", "Expo developer", "mobile app development", "iOS app development", "Android app development", "AI mobile apps"],
    ogImage: "/images/og/mobile-apps-og.jpg"
  },
  "web-application-development": {
    title: "Web Application Development - Next.js & React SaaS Solutions",
    description: "Full-stack web application development using Next.js, React, and modern technologies. Specializing in SaaS platforms, dashboards, and scalable web solutions.",
    keywords: ["Next.js developer", "React developer", "SaaS development", "web application development", "full-stack developer", "dashboard development"],
    ogImage: "/images/og/web-apps-og.jpg"
  },
  "wordpress-development": {
    title: "WordPress Development Portfolio - Custom Themes & E-commerce",
    description: "Professional WordPress development services including custom themes, e-commerce solutions, and business websites. Expert in WordPress customization and optimization.",
    keywords: ["WordPress developer", "WordPress custom themes", "WordPress e-commerce", "business website development", "WordPress optimization"],
    ogImage: "/images/og/wordpress-og.jpg"
  },
  "custom-website-development": {
    title: "Custom Website Development - Hand-Coded Solutions",
    description: "Custom website development using modern web technologies. Specializing in performance-optimized, responsive websites with custom animations and interactions.",
    keywords: ["custom website development", "frontend developer", "responsive web design", "performance optimization", "custom web solutions"],
    ogImage: "/images/og/custom-sites-og.jpg"
  }
};

// Generate metadata for project pages
export function generateProjectMetadata(project) {
  const title = `${project.title} - ${getCategoryDisplayName(project.category)} Portfolio`;
  const description = project.summary.length > 160 
    ? project.summary.substring(0, 157) + "..."
    : project.summary;
  
  return {
    title,
    description,
    keywords: project.technologies?.join(", ") || "",
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: [
        {
          url: `${siteConfig.url}${project.img}`,
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ],
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}${project.img}`],
      creator: "@Kanishkumar_11",
    },
    alternates: {
      canonical: `${siteConfig.url}/projects/${project.slug}`,
    }
  };
}

// Generate metadata for category pages
export function generateCategoryMetadata(category) {
  const categoryData = categoryMetadata[category];
  if (!categoryData) return {};

  return {
    title: categoryData.title,
    description: categoryData.description,
    keywords: categoryData.keywords.join(", "),
    openGraph: {
      title: categoryData.title,
      description: categoryData.description,
      type: "website",
      url: `${siteConfig.url}/projects/${category}`,
      images: [
        {
          url: `${siteConfig.url}${categoryData.ogImage}`,
          width: 1200,
          height: 630,
          alt: categoryData.title,
        }
      ],
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: categoryData.title,
      description: categoryData.description,
      images: [`${siteConfig.url}${categoryData.ogImage}`],
      creator: "@Kanishkumar_11",
    },
    alternates: {
      canonical: `${siteConfig.url}/projects/${category}`,
    }
  };
}

// Utility functions
export function getCategoryDisplayName(category) {
  const categoryNames = {
    "mobile-apps": "Mobile App Development",
    "web-applications": "Web Application Development", 
    "wordpress-sites": "WordPress Development",
    "custom-websites": "Custom Website Development",
    "personal": "Personal Projects"
  };
  return categoryNames[category] || category;
}

export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Structured data generators
export function generateProjectStructuredData(project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.summary,
    "url": `${siteConfig.url}/projects/${project.slug}`,
    "image": `${siteConfig.url}${project.img}`,
    "creator": {
      "@type": "Person",
      "name": siteConfig.creator,
      "url": siteConfig.url
    },
    "dateCreated": project.dateCreated || new Date().toISOString(),
    "keywords": project.technologies?.join(", ") || "",
    "genre": getCategoryDisplayName(project.category),
    "workExample": project.link ? {
      "@type": "WebSite",
      "url": project.link
    } : undefined
  };
}

export function generateBreadcrumbStructuredData(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${siteConfig.url}${crumb.href}`
    }))
  };
}
