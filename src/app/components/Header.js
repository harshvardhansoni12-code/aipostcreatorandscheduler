"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ReelScheduler
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
            >
              Docs
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/auth/login"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
