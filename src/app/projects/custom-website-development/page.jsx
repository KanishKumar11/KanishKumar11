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
  return generateCategoryMetadata('custom-website-development');
}

export default async function CustomWebsiteDevelopmentPage() {
  const projects = await getProjectsByCategory('custom-websites');

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Custom Website Development', href: '/projects/custom-website-development' }
  ];

  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={breadcrumbItems.slice(1)} />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <AnimatedText
            text="Custom Website Development"
            className="text-4xl md:text-6xl font-bold text-dark dark:text-light mb-6"
          />
          <p className="text-xl text-dark/70 dark:text-light/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            Bespoke website development with unique designs, cutting-edge animations, and exceptional performance.
            I create custom websites that stand out from the crowd and deliver unforgettable user experiences
            tailored specifically to your brand and business objectives.
          </p>

          {/* Key Technologies */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Next.js', 'React', 'Framer Motion', 'GSAP', 'Custom Design', 'Performance', 'SEO', 'Animations'].map((tech) => (
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
            icon="🎨"
            title="Unique Design"
            description="Completely custom designs tailored to your brand with pixel-perfect implementation and attention to detail."
            index={0}
          />
          <ServiceCard
            icon="⚡"
            title="Performance Optimized"
            description="Lightning-fast loading times with optimized code, images, and best practices for Core Web Vitals."
            index={1}
          />
          <ServiceCard
            icon="✨"
            title="Interactive Animations"
            description="Engaging animations and interactions using Framer Motion and GSAP for memorable user experiences."
            index={2}
          />
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <AnimatedText
            text="Custom Website Portfolio"
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
                Custom website projects will be displayed here.
              </p>
            </div>
          )}
        </section>

        {/* Development Process */}
        <ProcessStepper
          title="Custom Website Development Process"
          steps={[
            {
              step: "01",
              title: "Discovery & Strategy",
              description: "Brand analysis, competitor research, and strategic planning to create a unique digital presence."
            },
            {
              step: "02",
              title: "Design & Prototyping",
              description: "Custom UI/UX design, interactive prototypes, and animation planning for exceptional user experiences."
            },
            {
              step: "03",
              title: "Development & Animation",
              description: "Custom coding with advanced animations, performance optimization, and responsive implementation."
            },
            {
              step: "04",
              title: "Testing & Launch",
              description: "Comprehensive testing, performance auditing, and seamless deployment with ongoing support."
            }
          ]}
        />

        {/* CTA Section */}
        <section className="text-center bg-orange-50 dark:bg-orange-900/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-dark dark:text-light mb-4">
            Ready for a Truly Custom Website?
          </h2>
          <p className="text-dark/70 dark:text-light/70 mb-6 max-w-2xl mx-auto">
            Let's create a one-of-a-kind website that perfectly represents your brand and captivates your audience.
            From concept to launch, I'll bring your vision to life with exceptional design and development.
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