"use client";

import {
  SparklesIcon,
  CalendarIcon,
  GlobeAltIcon,
  ChartBarIcon,
  DocumentTextIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

export default function Features() {
  const features = [
    {
      title: "AI Avatar Generation",
      description:
        "Create lifelike AI avatars with realistic voice and gestures. Choose from multiple avatar styles and customize appearance.",
      icon: SparklesIcon,
    },
    {
      title: "Smart Scheduling",
      description:
        "Schedule posts to go live at optimal times. Let our AI analyze your audience to find the best posting times.",
      icon: CalendarIcon,
    },
    {
      title: "Multi-Platform Support",
      description:
        "Post to Instagram, TikTok, YouTube, LinkedIn, and Twitter simultaneously from one dashboard.",
      icon: GlobeAltIcon,
    },
    {
      title: "Content Analytics",
      description:
        "Track performance metrics in real-time. Get insights on engagement, reach, and audience demographics.",
      icon: ChartBarIcon,
    },
    {
      title: "Script Generation",
      description:
        "AI-powered script writing for your videos. Generate trending content ideas based on your niche.",
      icon: DocumentTextIcon,
    },
    {
      title: "Collaboration Tools",
      description:
        "Work with your team seamlessly. Assign roles, approve content, and manage workflows efficiently.",
      icon: UsersIcon,
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Powerful Features Made Simple
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to create, manage, and grow your social media
            presence with AI-powered content.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg"
              >
                <IconComponent className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
