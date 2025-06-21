'use client';

import { useState } from 'react';
import Link from 'next/link';

interface LandingPage {
  id: string;
  title: string;
  description: string;
  slug: string;
  url: string;
  thumbnail?: string;
  category: string;
  isActive: boolean;
}

export default function Home() {
  const [landingPages] = useState<LandingPage[]>([
    {
      id: '1',
      title: 'SaaS Product Landing',
      description: 'Modern SaaS product landing page with pricing and features',
      slug: 'saas-product',
      url: '/saas-product',
      category: 'SaaS',
      isActive: true,
    },
    {
      id: '2',
      title: 'E-commerce Store',
      description: 'Beautiful e-commerce landing page with product showcase',
      slug: 'ecommerce-store',
      url: '/ecommerce-store',
      category: 'E-commerce',
      isActive: true,
    },
    {
      id: '3',
      title: 'Portfolio Website',
      description: 'Creative portfolio landing page for designers and developers',
      slug: 'portfolio',
      url: '/portfolio',
      category: 'Portfolio',
      isActive: true,
    },
    {
      id: '4',
      title: 'Mobile App Landing',
      description: 'App store ready landing page for mobile applications',
      slug: 'mobile-app',
      url: '/mobile-app',
      category: 'Mobile',
      isActive: true,
    },
    {
      id: '5',
      title: 'Agency Website',
      description: 'Professional agency landing page with team and services',
      slug: 'agency',
      url: '/agency',
      category: 'Business',
      isActive: true,
    },
    {
      id: '6',
      title: 'Event Landing',
      description: 'Event registration and information landing page',
      slug: 'event',
      url: '/event',
      category: 'Events',
      isActive: true,
    },
    {
      id: '7',
      title: 'Sustainable Farming',
      description: 'Eco-friendly farming practices and consultation landing page',
      slug: 'sustainable-farm',
      url: '/sustainable-farm',
      category: 'Agriculture',
      isActive: true,
    },
    {
      id: '8',
      title: 'Vintage Clothing',
      description: 'Retro and vintage clothing collection landing page',
      slug: 'vintage-clothes',
      url: '/vintage-clothes',
      category: 'Clothing',
      isActive: true,
    },
    {
      id: '9',
      title: 'Streaming Hub',
      description: 'Landing page for movies, series, and live TV streaming service',
      slug: 'streaming-hub',
      url: '/streaming-hub',
      category: 'Streaming',
      isActive: true,
    }

  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(landingPages.map(page => page.category)))];

  const filteredPages = selectedCategory === 'All'
    ? landingPages
    : landingPages.filter(page => page.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Landing Page Collection
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Explore our curated collection of modern, responsive landing page templates.
            Perfect for any project or business need.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${selectedCategory === category
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-600 shadow-md hover:shadow-lg'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Landing Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPages.map((page) => (
            <div
              key={page.id}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Thumbnail Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-white font-semibold text-sm">{page.title}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
                    {page.category}
                  </span>
                  <div className={`w-3 h-3 rounded-full ${page.isActive ? 'bg-green-400' : 'bg-gray-400'}`} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {page.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-2">
                  {page.description}
                </p>

                {/* Actions */}
                <div className="flex gap-3">
                  <Link
                    href={`/${page.slug}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-center transition-colors duration-200"
                  >
                    View Live
                  </Link>
                  <button className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{landingPages.length}</div>
            <div className="text-slate-600 dark:text-slate-300">Total Pages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {landingPages.filter(p => p.isActive).length}
            </div>
            <div className="text-slate-600 dark:text-slate-300">Active</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{categories.length - 1}</div>
            <div className="text-slate-600 dark:text-slate-300">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">100%</div>
            <div className="text-slate-600 dark:text-slate-300">Responsive</div>
          </div>
        </div>
      </div>
    </div>
  );
}