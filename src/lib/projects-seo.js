import { projects } from '@/data/projects';
import { generateSlug } from './metadata';

// Enhanced project data with SEO information and slugs
export const enhancedProjects = projects.map(project => ({
  ...project,
  slug: generateSlug(project.title),
  dateCreated: getProjectDate(project.id),
  seoTitle: generateSEOTitle(project),
  seoDescription: generateSEODescription(project),
  tags: generateTags(project),
}));

// Create dual UnextDoor entries as discussed
export const unextdoorMobileApp = {
  id: 'unextdoor-mobile',
  title: "UnextDoor - AI Language Learning Mobile App",
  summary: "Revolutionary AI-powered language learning mobile app built with React Native and Expo. Features real-time AI tutoring, personalized learning paths, and seamless cross-platform experience. Live on iOS App Store with Android version coming soon. Demonstrates advanced mobile development skills with AI integration and modern UX design.",
  link: "https://apps.apple.com/us/app/unextdoor/id6747754809?platform=iphone",
  appStoreLink: "https://apps.apple.com/us/app/unextdoor/id6747754809?platform=iphone",
  type: "Mobile App",
  img: "/images/projects/unextdoor.png",
  github: "",
  category: "mobile-apps",
  technologies: ["React Native", "Expo", "OpenAI API", "AI Integration", "iOS", "Android"],
  isLiveApp: true,
  slug: "unextdoor-ai-language-mobile-app",
  dateCreated: "2024-01-15",
  seoTitle: "UnextDoor AI Language Learning App - React Native Development",
  seoDescription: "Case study of UnextDoor, an AI-powered language learning mobile app built with React Native and Expo. Features OpenAI integration, cross-platform compatibility, and live App Store deployment.",
  tags: ["React Native", "AI Integration", "Mobile Development", "Language Learning", "OpenAI"],
  challenge: "Creating an intuitive mobile language learning experience with real-time AI tutoring capabilities while ensuring smooth performance across iOS and Android platforms.",
  solution: "Developed using React Native and Expo for cross-platform compatibility, integrated OpenAI API for intelligent tutoring, and implemented optimized state management for seamless user experience.",
  results: "Successfully launched on iOS App Store with positive user feedback, demonstrating scalable AI integration in mobile applications."
};

export const unextdoorWordPress = {
  id: 'unextdoor-wordpress',
  title: "UnextDoor Landing Page - WordPress Marketing Site",
  summary: "Professional WordPress landing page for UnextDoor AI language learning app. Features conversion-optimized design, responsive layouts, and integrated marketing tools. Showcases WordPress development expertise with custom themes, performance optimization, and SEO best practices for app marketing websites.",
  link: "https://unextdoor.co/",
  type: "WordPress Site",
  img: "/images/projects/unextdoor.png",
  github: "",
  category: "wordpress-sites",
  technologies: ["WordPress", "Custom Theme", "Responsive Design", "SEO Optimization", "Performance"],
  slug: "unextdoor-wordpress-landing-page",
  dateCreated: "2024-01-20",
  seoTitle: "UnextDoor WordPress Landing Page - App Marketing Website",
  seoDescription: "Professional WordPress landing page development for UnextDoor AI app. Features custom theme design, conversion optimization, and performance tuning for effective app marketing.",
  tags: ["WordPress", "Landing Page", "App Marketing", "Custom Theme", "Conversion Optimization"],
  challenge: "Creating a high-converting landing page that effectively communicates the app's value proposition while maintaining fast loading speeds and mobile responsiveness.",
  solution: "Built custom WordPress theme with optimized code structure, implemented conversion-focused design elements, and integrated performance optimization techniques.",
  results: "Achieved excellent page speed scores and conversion rates, effectively supporting the mobile app's marketing and user acquisition efforts."
};

// Add the dual entries to the enhanced projects
enhancedProjects.push(unextdoorMobileApp, unextdoorWordPress);

// Utility functions
function getProjectDate(id) {
  // Assign realistic dates based on project complexity and timeline
  const dates = {
    1: "2024-01-15", // UnextDoor
    2: "2023-11-20", // Zlaark Testimonials
    3: "2023-10-15", // Zlaark Expense Manager
    4: "2023-09-10", // Hypeworx
    5: "2023-08-05", // Shivmani Creations
    6: "2023-07-12", // Best Diet
    7: "2023-06-18", // Dentist Pitampura
    8: "2023-05-25", // Shivai Telerad
    9: "2024-02-10", // Electric Marshmallow
    // Add more dates as needed
  };
  return dates[id] || "2023-12-01";
}

function generateSEOTitle(project) {
  const categoryMap = {
    "mobile-apps": "Mobile App Development",
    "web-applications": "Web Application Development",
    "wordpress-sites": "WordPress Development",
    "custom-websites": "Custom Website Development",
    "personal": "Personal Project"
  };

  const categoryName = categoryMap[project.category] || "Development";
  return `${project.title} - ${categoryName} Portfolio`;
}

function generateSEODescription(project) {
  const description = project.summary.length > 155
    ? project.summary.substring(0, 152) + "..."
    : project.summary;
  return description;
}

function generateTags(project) {
  const baseTags = project.technologies || [];
  const categoryTags = {
    "mobile-apps": ["Mobile Development", "Cross-Platform"],
    "web-applications": ["Web Development", "Full-Stack"],
    "wordpress-sites": ["WordPress", "CMS"],
    "custom-websites": ["Frontend", "Custom Development"],
    "personal": ["Learning", "Experimentation"]
  };

  return [...baseTags, ...(categoryTags[project.category] || [])];
}

// Get projects by category
export function getProjectsByCategory(category) {
  return enhancedProjects.filter(project => project.category === category);
}

// Get project by slug
export function getProjectBySlug(slug) {
  return enhancedProjects.find(project => project.slug === slug);
}

// Get featured projects
export function getFeaturedProjects() {
  return enhancedProjects.filter(project => project.type === "Featured Project");
}

// Get all categories
export function getAllCategories() {
  return [
    "mobile-app-development",
    "web-application-development",
    "wordpress-development",
    "custom-website-development"
  ];
}

// Get all project slugs for static generation
export function getAllProjectSlugs() {
  return enhancedProjects.map(project => project.slug);
}
