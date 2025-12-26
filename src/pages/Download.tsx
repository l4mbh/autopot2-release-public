import { useState, useEffect } from 'react';
import { Download as DownloadIcon, AlertCircle, Loader2 } from 'lucide-react';

interface GitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  assets: Array<{
    name: string;
    browser_download_url: string;
    size: number;
  }>;
}

const GITHUB_OWNER = 'l4mbh';
const GITHUB_REPO = 'autopot2-release-public';

export function Download() {
  const [release, setRelease] = useState<GitHubRelease | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLatestRelease();
  }, []);

  const fetchLatestRelease = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch release information');
      }

      const data = await response.json();
      setRelease(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Download Latest Version
          </h1>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-spin" />
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-8">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-200 mb-2">
                  Error Loading Release
                </h3>
                <p className="text-red-700 dark:text-red-300 mb-4">{error}</p>
                <p className="text-sm text-red-600 dark:text-red-400 mb-4">
                  Please update the GitHub repository information in the code:
                </p>
                <code className="block bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200 p-3 rounded text-sm">
                  GITHUB_OWNER = "your-username"<br />
                  GITHUB_REPO = "your-repo"
                </code>
              </div>
            </div>
          </div>
        )}

        {release && !loading && (
          <div className="flex flex-col items-center">
            {release.assets.length > 0 && (
              <a
                href={release.assets[0].browser_download_url}
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
              >
                <DownloadIcon className="w-6 h-6 mr-3" />
                Download
              </a>
            )}
            <p className="mt-3 text-sm text-gray-400 dark:text-gray-500">
              {release.tag_name}
            </p>
          </div>
        )}

        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-3">
            Installation Instructions
          </h3>
          <ol className="space-y-2 text-blue-800 dark:text-blue-300">
            <li>1. Download the latest release file above</li>
            <li>2. Extract the files to your desired location</li>
            <li>3. Run the installer or executable file</li>
            <li>4. Follow the setup wizard to complete installation</li>
            <li>5. Launch the application and enjoy!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
