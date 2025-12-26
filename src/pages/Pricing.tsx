import { Check } from 'lucide-react';

const plans = [
  {
    name: '30 Days',
    price: 7,
    duration: '30 days',
    features: [
      'Full access to all features',
      'Automatic updates',
      'Discord support',
      'Regular feature updates',
      'Safe and secure',
    ],
    popular: false,
  },
  {
    name: '60 Days',
    price: 10,
    duration: '60 days',
    features: [
      'Full access to all features',
      'Automatic updates',
      'Priority Discord support',
      'Regular feature updates',
      'Safe and secure',
      'Best value for money',
    ],
    popular: true,
  },
  {
    name: '90 Days',
    price: 20,
    duration: '90 days',
    features: [
      'Full access to all features',
      'Automatic updates',
      'VIP Discord support',
      'Regular feature updates',
      'Safe and secure',
      'Extended access',
      'Early access to new features',
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include full access to features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 ${
                plan.popular
                  ? 'border-blue-600 dark:border-blue-400 scale-105'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">/ {plan.duration}</span>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all mb-8 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}
                >
                  Get Started
                </button>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Need help choosing? Join our Discord community for assistance.
          </p>
          <a
            href="https://discord.gg/yourdiscord"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
