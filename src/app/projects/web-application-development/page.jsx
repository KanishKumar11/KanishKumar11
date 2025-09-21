import Link from 'next/link';
import { getProjectsByCategory } from '@/lib/projects-seo';
import { generateCategoryMetadata } from '@/lib/metadata';
import Breadcrumb from '@/components/Breadcrumb';
import ProcessStepper from '@/components/ProcessStepper';
import AnimatedText from '@/components/AnimatedText';
import ServiceCard from '@/components/ServiceCard';
import CategoryProjectCard from '@/components/CategoryProjectCard';

// Generate metadata for SEO
export async function generateMetadata() {
  return generateCategoryMetadata('web-application-development');
}

export default async function WebApplicationDevelopmentPage() {
  const projects = await getProjectsByCategory('web-applications');

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Web Application Development', href: '/projects/web-application-development' }
  ];

  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={breadcrumbItems.slice(1)} />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <AnimatedText
            text="Web Application Development"
            className="text-4xl md:text-6xl font-bold text-dark dark:text-light mb-6"
          />
          <p className="text-xl text-dark/70 dark:text-light/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            Full-stack web application development using Next.js, React, and modern technologies.
            I specialize in building scalable SaaS platforms, dashboards, and complex web applications
            with exceptional user experiences and robust backend systems.
          </p>

          {/* Key Technologies */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'SaaS'].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Services Overview */}
        <div className="grid md:grid-cols-1 grid-cols-3 gap-8 mb-16">
          <ServiceCard
            icon="🚀"
            title="SaaS Platforms"
            description="Complete SaaS solutions with user authentication, subscriptions, and scalable architecture."
            index={0}
          />
          <ServiceCard
            icon="📊"
            title="Dashboards & Analytics"
            description="Interactive dashboards with real-time data visualization and comprehensive analytics."
            index={1}
          />
          <ServiceCard
            icon="⚡"
            title="Performance Optimization"
            description="Lightning-fast applications with optimized loading times and excellent Core Web Vitals."
            index={2}
          />
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <AnimatedText
            text="Web Application Portfolio"
            className="text-3xl font-bold text-dark dark:text-light mb-8 text-center"
          />

          {projects.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-8">
              {projects.map((project) => (
                <CategoryProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-dark/70 dark:text-light/70">
                Web application projects will be displayed here.
              </p>
            </div>
          )}
        </section>

        {/* Development Process */}
        <ProcessStepper
          title="Web Application Development Process"
          steps={[
            {
              step: "01",
              title: "Planning & Architecture",
              description: "Requirements analysis, system architecture design, and technology stack selection."
            },
            {
              step: "02",
              title: "Development & Integration",
              description: "Full-stack development with API integration, database design, and frontend implementation."
            },
            {
              step: "03",
              title: "Testing & Optimization",
              description: "Comprehensive testing, performance optimization, and security implementation."
            },
            {
              step: "04",
              title: "Deployment & Maintenance",
              description: "Production deployment, monitoring setup, and ongoing maintenance and updates."
            }
          ]}
        />

        {/* CTA Section */}
        <section className="text-center bg-orange-50 dark:bg-orange-900/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-dark dark:text-light mb-4">
            Need a Custom Web Application?
          </h2>
          <p className="text-dark/70 dark:text-light/70 mb-6 max-w-2xl mx-auto">
            Let's build a scalable, high-performance web application that meets your business needs.
            From SaaS platforms to complex dashboards, I deliver solutions that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://cal.com/kanishkumar/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
            >
              Book a Call
            </Link>
            <Link
              href="/book-a-call"
              className="inline-flex items-center px-6 py-3 border border-orange-600 text-base font-medium rounded-md text-orange-600 bg-transparent hover:bg-orange-50 dark:hover:bg-orange-900/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
