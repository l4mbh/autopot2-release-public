import { Link } from 'react-router-dom';
import { Zap, Rocket, Download, Gamepad2 } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Level Up Your Gaming
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              With Automation
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            The ultimate gaming automation tool designed to enhance your gameplay experience.
            Safe, reliable, and packed with powerful features. Especially we aim to support <b>GAMEPAD</b> players.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/download"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
            >
              View Pricing
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 dark:border-gray-700">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Auto Flask Helper</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Automatically use flasks when HP/Mana/ES drops below configured thresholds. 
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 dark:border-gray-700">
            <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-6">
              <Gamepad2 className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Gamepad Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Support for Xbox/PlayStation controllers. Passthrough mode to forward input from physical controller through virtual controller.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 dark:border-gray-700">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Smoother and advanced features</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Smoother and advanced features. Customizable settings to match your playstyle. Support for patch game's GGPK file to improve graphics.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Connect with thousands of gamers, get support, and stay updated with the latest features.
          </p>
          <a
            href="https://discord.gg/yourdiscord"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Join Discord Server
          </a>
        </div>
      </div>
    </div>
  );
}
