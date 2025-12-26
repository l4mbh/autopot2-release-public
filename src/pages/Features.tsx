import { useState, useEffect } from 'react';
import {
  Zap,
  Target,
  Settings,
  Shield,
  TrendingUp,
  Users,
  Cpu,
  RefreshCw,
  Lock,
  Smartphone,
  List,
  type LucideIcon
} from 'lucide-react';

type SubFeature = {
  title: string;
  tier: 'FREE' | 'PAID';
};

type Step = {
  text: string;
  tier: 'FREE' | 'PAID';
};

type Feature = {
  icon: LucideIcon;
  title: string;
  tier: 'FREE' | 'PAID';
  description: string;
  subFeatures: SubFeature[];
  steps: Step[];
};

const features: Feature[] = [
  {
    icon: Zap,
    title: 'Auto Flask Helper',
    tier: 'FREE',
    description: 'Automatically use flasks when HP/Mana/ES drops below configured thresholds.',
    subFeatures: [
      { title: 'HP Threshold Detection', tier: 'FREE' },
      { title: 'Mana Threshold Detection', tier: 'FREE' },
      { title: 'Energy Shield Detection', tier: 'FREE' },
      { title: 'Advanced Cooldown Management', tier: 'PAID' },
      { title: 'Multi-Flask Support', tier: 'FREE' }
    ],
    steps: [
      { text: 'Configure your flask preferences in settings', tier: 'FREE' },
      { text: 'Select flask keys', tier: 'FREE' },
      { text: 'Set HP/Mana/ES thresholds', tier: 'FREE' },
      { text: 'Set cooldowns for each flask type', tier: 'PAID' },
      { text: 'Set mode: Life, ES, Life+ES', tier: 'FREE' },
      { text: 'Enable auto-flask mode', tier: 'FREE' },
    ]
  },
  {
    icon: Target,
    title: 'Smart Targeting',
    tier: 'PAID',
    description: 'Advanced AI-powered targeting system that identifies optimal targets and prioritizes based on your custom rules.',
    subFeatures: [
      { title: 'AI Target Detection', tier: 'PAID' },
      { title: 'Priority Rules Engine', tier: 'PAID' },
      { title: 'Sensitivity Adjustment', tier: 'FREE' },
      { title: 'Target Logging System', tier: 'PAID' }
    ],
    steps: [
      { text: 'Define targeting rules and priorities', tier: 'PAID' },
      { text: 'Enable smart detection mode', tier: 'PAID' },
      { text: 'Adjust sensitivity settings', tier: 'FREE' },
      { text: 'Review targeting logs for optimization', tier: 'PAID' }
    ]
  },
  {
    icon: Settings,
    title: 'Customizable Settings',
    tier: 'FREE',
    description: 'Fine-tune every aspect of the tool to match your playstyle. Import and export configurations for easy sharing.',
    subFeatures: [
      { title: 'Settings Panel Access', tier: 'FREE' },
      { title: 'Speed Configuration', tier: 'FREE' },
      { title: 'Custom Profile Creation', tier: 'PAID' },
      { title: 'Profile Management', tier: 'FREE' }
    ],
    steps: [
      { text: 'Access settings panel', tier: 'FREE' },
      { text: 'Adjust automation speed and behavior', tier: 'FREE' },
      { text: 'Create custom profiles', tier: 'PAID' },
      { text: 'Save and switch between profiles', tier: 'FREE' }
    ]
  },
  {
    icon: Shield,
    title: 'Anti-Detection System',
    tier: 'PAID',
    description: 'Built-in security features that randomize patterns and behaviors to maintain account safety.',
    subFeatures: [
      { title: 'Pattern Randomization', tier: 'PAID' },
      { title: 'Break Interval Setup', tier: 'FREE' },
      { title: 'Human Behavior Simulation', tier: 'PAID' },
      { title: 'Security Dashboard', tier: 'PAID' }
    ],
    steps: [
      { text: 'Enable randomization features', tier: 'PAID' },
      { text: 'Set up break intervals', tier: 'FREE' },
      { text: 'Configure human-like behavior patterns', tier: 'PAID' },
      { text: 'Monitor security status dashboard', tier: 'PAID' }
    ]
  },
  {
    icon: TrendingUp,
    title: 'Performance Analytics',
    tier: 'PAID',
    description: 'Track your progress with detailed statistics and analytics. Optimize your strategy based on real data.',
    subFeatures: [
      { title: 'Real-time Statistics', tier: 'FREE' },
      { title: 'Performance Graphs', tier: 'PAID' },
      { title: 'Data Export', tier: 'PAID' },
      { title: 'Session Comparison', tier: 'PAID' }
    ],
    steps: [
      { text: 'View real-time statistics', tier: 'FREE' },
      { text: 'Analyze performance graphs', tier: 'PAID' },
      { text: 'Export data for external analysis', tier: 'PAID' },
      { text: 'Compare results across sessions', tier: 'PAID' }
    ]
  },
  {
    icon: RefreshCw,
    title: 'Auto-Update System',
    tier: 'FREE',
    description: 'Stay up-to-date with automatic updates. New features and improvements delivered seamlessly.',
    subFeatures: [
      { title: 'Auto-Update Toggle', tier: 'FREE' },
      { title: 'Version Notifications', tier: 'FREE' },
      { title: 'Changelog Review', tier: 'FREE' },
      { title: 'Automatic Backup', tier: 'FREE' }
    ],
    steps: [
      { text: 'Enable auto-update in settings', tier: 'FREE' },
      { text: 'Receive notifications for new versions', tier: 'FREE' },
      { text: 'Review changelog before updating', tier: 'FREE' },
      { text: 'Automatic backup before updates', tier: 'FREE' }
    ]
  }
];

const additionalFeatures = [
  { icon: Cpu, text: 'Low resource usage' },
  { icon: Users, text: 'Active community support' },
  { icon: Lock, text: 'Secure authentication' },
  { icon: Smartphone, text: 'Easy-to-use interface' }
];

function TableOfContents({ features }: { features: Feature[] }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      const sections = features.flatMap((feature: Feature) => [
        { id: `feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`, type: 'feature' },
        ...feature.subFeatures.map((subFeature: SubFeature) => ({
          id: `subfeature-${feature.title.toLowerCase().replace(/\s+/g, '-')}-${subFeature.title.toLowerCase().replace(/\s+/g, '-')}`,
          type: 'subfeature'
        }))
      ]);

      let currentSection = '';
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop) {
            currentSection = sections[i].id;
            break;
          }
        }
      }

      if (currentSection && currentSection !== activeId) {
        setActiveId(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [features, activeId]);

  const scrollToSection = (id: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        setActiveId(id);
      }, 100);
    }
  };

  return (
    <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="flex items-center mb-4">
        <List className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Table of Contents</h2>
      </div>
      <nav className="space-y-2">
        {features.map((feature) => {
          const featureId = `feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`;
          return (
            <div key={feature.title}>
              <button
                onClick={(e) => scrollToSection(featureId, e)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  activeId === featureId
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {feature.title}
              </button>
              {feature.subFeatures && feature.subFeatures.length > 0 && (
                <div className="ml-4 mt-1 space-y-1">
                  {feature.subFeatures.map((subFeature) => {
                    const subFeatureId = `subfeature-${feature.title.toLowerCase().replace(/\s+/g, '-')}-${subFeature.title.toLowerCase().replace(/\s+/g, '-')}`;
                    return (
                      <button
                        key={subFeature.title}
                        onClick={(e) => scrollToSection(subFeatureId, e)}
                        className={`w-full text-left px-3 py-1.5 rounded text-sm transition-colors flex items-center justify-between cursor-pointer ${
                          activeId === subFeatureId
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                        }`}
                      >
                        <span>{subFeature.title}</span>
                        <span
                          className={`ml-2 px-1.5 py-0.5 rounded text-xs font-bold uppercase ${
                            subFeature.tier === 'FREE'
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                          }`}
                        >
                          {subFeature.tier}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

export function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features & Guides
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore all the features and learn how to make the most of our gaming automation tool.
          </p>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8 mb-16">
          <div className="hidden lg:block">
            <TableOfContents features={features} />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature) => {
            const featureId = `feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <div
                key={feature.title}
                id={featureId}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border border-gray-100 dark:border-gray-700 relative scroll-mt-24"
              >
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                      feature.tier === 'FREE'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}
                  >
                    {feature.tier}
                  </span>
                </div>
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {feature.subFeatures && feature.subFeatures.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                      Sub Features:
                    </h4>
                    <div className="space-y-2">
                      {feature.subFeatures.map((subFeature: SubFeature) => {
                        const subFeatureId = `subfeature-${feature.title.toLowerCase().replace(/\s+/g, '-')}-${subFeature.title.toLowerCase().replace(/\s+/g, '-')}`;
                        return (
                          <div
                            key={subFeature.title}
                            id={subFeatureId}
                            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg scroll-mt-24"
                          >
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {subFeature.title}
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide ${
                                subFeature.tier === 'FREE'
                                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                  : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                              }`}
                            >
                              {subFeature.tier}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="ml-16">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                    How to Use:
                  </h4>
                  <ol className="space-y-2">
                    {feature.steps.map((step, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                        <span className="text-blue-600 dark:text-blue-400 font-semibold mr-2 flex-shrink-0">
                          {index + 1}.
                        </span>
                        <span>{step.text}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            );
          })}
        </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Additional Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature) => (
              <div
                key={feature.text}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <feature.icon className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-white font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            Need more help? Our community is here to support you.
          </p>
          <a
            href="https://discord.gg/yourdiscord"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Join Discord for Support
          </a>
        </div>
      </div>
    </div>
  );
}
