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
  return generateCategoryMetadata('mobile-app-development');
}

export default async function MobileAppDevelopmentPage() {
  const projects = await getProjectsByCategory('mobile-apps');

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Mobile App Development', href: '/projects/mobile-app-development' }
  ];

  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={breadcrumbItems.slice(1)} />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <AnimatedText
            text="Mobile App Development"
            className="text-4xl md:text-6xl font-bold text-dark dark:text-light mb-6"
          />
          <p className="text-xl text-dark/70 dark:text-light/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            Professional mobile app development services using React Native and Expo.
            I create cross-platform mobile applications with modern UX design, AI integration,
            and seamless performance across iOS and Android devices.
          </p>

          {/* Key Technologies */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['React Native', 'Expo', 'TypeScript', 'AI Integration', 'iOS', 'Android', 'Firebase'].map((tech) => (
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
            icon="📱"
            title="Cross-Platform Development"
            description="Build once, deploy everywhere. React Native apps that work seamlessly on both iOS and Android."
            index={0}
          />
          <ServiceCard
            icon="🤖"
            title="AI Integration"
            description="Integrate cutting-edge AI capabilities including OpenAI, machine learning, and intelligent features."
            index={1}
          />
          <ServiceCard
            icon="🚀"
            title="App Store Deployment"
            description="Complete deployment process from development to live apps on iOS App Store and Google Play."
            index={2}
          />
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <AnimatedText
            text="Mobile App Portfolio"
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
              <p className="text-gray-600 dark:text-gray-300">
                Mobile app projects will be displayed here.
              </p>
            </div>
          )}
        </section>

        {/* Development Process */}
        <ProcessStepper
          title="Mobile App Development Process"
          steps={[
            {
              step: "01",
              title: "Planning & Design",
              description: "User research, wireframing, and UI/UX design with focus on mobile-first experience."
            },
            {
              step: "02",
              title: "Development",
              description: "Cross-platform development using React Native and Expo with clean, maintainable code."
            },
            {
              step: "03",
              title: "Testing & QA",
              description: "Comprehensive testing on multiple devices and platforms to ensure quality and performance."
            },
            {
              step: "04",
              title: "Deployment",
              description: "App Store submission, deployment, and ongoing maintenance and updates."
            }
          ]}
        />

        {/* CTA Section */}
        <section className="text-center bg-orange-50 dark:bg-orange-900/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-dark dark:text-light mb-4">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-dark/70 dark:text-light/70 mb-6 max-w-2xl mx-auto">
            Let's discuss your mobile app idea and create a solution that engages users
            and drives business growth. From concept to App Store deployment.
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
    </div >
  );
}
