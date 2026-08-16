"use client";

import { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for content creators just starting out",
      price: isAnnual ? 99 : 12,
      period: isAnnual ? "year" : "month",
      popular: false,
      features: [
        "Up to 10 AI avatars",
        "50 scheduled posts/month",
        "Basic analytics",
        "2 social media accounts",
        "Community support",
        "720p video quality",
      ],
    },
    {
      name: "Professional",
      description: "For growing creators and small businesses",
      price: isAnnual ? 299 : 35,
      period: isAnnual ? "year" : "month",
      popular: true,
      features: [
        "Unlimited AI avatars",
        "500 scheduled posts/month",
        "Advanced analytics",
        "Unlimited social media accounts",
        "Priority support",
        "4K video quality",
        "Custom avatar training",
        "Team collaboration (up to 5)",
      ],
    },
    {
      name: "Enterprise",
      description: "For large teams and agencies",
      price: "Custom",
      period: "contact us",
      popular: false,
      features: [
        "Everything in Professional",
        "Unlimited scheduled posts",
        "White-label platform",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "Team collaboration (unlimited)",
        "Custom training & onboarding",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Scale as you grow.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span
              className={`font-medium ${!isAnnual ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                isAnnual ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-700"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`font-medium ${isAnnual ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400"}`}
            >
              Annual <span className="text-green-600 font-bold">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all ${
                plan.popular
                  ? "border-blue-600 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 ring-2 ring-blue-600 shadow-2xl scale-105"
                  : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                {typeof plan.price === "number" ? (
                  <>
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">
                      /{plan.period}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                )}
              </div>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700"
                }`}
              >
                Get Started
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-lg flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            View frequently asked questions →
          </a>
        </div>
      </div>
    </section>
  );
}
