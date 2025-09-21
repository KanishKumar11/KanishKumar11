"use client";

import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import { generateBreadcrumbStructuredData } from '@/lib/metadata';

export default function Breadcrumb({ items }) {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    ...items
  ];

  // Generate structured data
  const structuredData = generateBreadcrumbStructuredData(breadcrumbs);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Breadcrumb Navigation */}
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.href} className="inline-flex items-center">
              {index > 0 && (
                <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
              )}
              
              {index === 0 ? (
                <Link
                  href={crumb.href}
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  <HomeIcon className="w-4 h-4 mr-2" />
                  {crumb.name}
                </Link>
              ) : index === breadcrumbs.length - 1 ? (
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-sm font-medium text-gray-700 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
