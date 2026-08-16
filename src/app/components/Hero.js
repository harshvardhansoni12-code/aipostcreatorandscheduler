"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-black pt-20 pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 dark:from-blue-950/20 to-purple-50 dark:to-purple-950/20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Powered by AI
              </span>
            </span>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Create AI Avatars That{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Go Viral
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Generate stunning AI-powered avatar videos and schedule them
              across all your social media platforms. Automate your content
              strategy in minutes, not hours.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/auth/login"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:shadow-2xl transition-shadow text-center"
            >
              Start Free Trial
            </Link>
            <button className="px-8 py-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white text-lg font-semibold rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 border-t border-gray-200 dark:border-gray-800">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                10K+
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Active Users
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                1M+
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Videos Created
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                99.9%
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
