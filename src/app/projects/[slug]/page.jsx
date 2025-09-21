import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { getProjectBySlug, getAllProjectSlugs, getProjectsByCategory } from '@/lib/projects-seo';
import { generateProjectMetadata, generateProjectStructuredData, getCategoryDisplayName } from '@/lib/metadata';
import Breadcrumb from '@/components/Breadcrumb';

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.'
    };
  }

  return generateProjectMetadata(project);
}

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Get related projects from the same category
  const relatedProjects = getProjectsByCategory(project.category)
    .filter(p => p.slug !== project.slug)
    .slice(0, 3);

  // Generate structured data
  const structuredData = generateProjectStructuredData(project);

  // Breadcrumb items
  const breadcrumbItems = [
    { name: 'Projects', href: '/projects' },
    { name: getCategoryDisplayName(project.category), href: `/projects/${project.category}` },
    { name: project.title, href: `/projects/${project.slug}` }
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb Navigation */}
          <Breadcrumb items={breadcrumbItems.slice(1)} />

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                {getCategoryDisplayName(project.category)}
              </span>
              {project.isLiveApp && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Live App
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {project.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                >
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                  View Live Project
                </Link>
              )}

              {project.appStoreLink && (
                <Link
                  href={project.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
                >
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                  App Store
                </Link>
              )}

              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
                >
                  <CodeBracketIcon className="w-5 h-5 mr-2" />
                  View Code
                </Link>
              )}
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-12">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={project.img}
                alt={`${project.title} - ${getCategoryDisplayName(project.category)} project screenshot`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Challenge Section */}
              {project.challenge && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    The Challenge
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </section>
              )}

              {/* Solution Section */}
              {project.solution && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    The Solution
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.solution}
                  </p>
                </section>
              )}

              {/* Results Section */}
              {project.results && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Results & Impact
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.results}
                  </p>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Technologies Used */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Project Info
                </h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Category</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">{getCategoryDisplayName(project.category)}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Date</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">
                      {new Date(project.dateCreated).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </dd>
                  </div>
                  {project.type && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Type</dt>
                      <dd className="text-sm text-gray-900 dark:text-white">{project.type}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Related Projects
              </h2>
              <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.slug}
                    href={`/projects/${relatedProject.slug}`}
                    className="group block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="relative aspect-video rounded-t-lg overflow-hidden">
                      <Image
                        src={relatedProject.img}
                        alt={relatedProject.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                        {relatedProject.summary}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
