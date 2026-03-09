import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found - Magic Brawl APK',
  description: 'The page you are looking for does not exist. Return to Magic Brawl APK homepage.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-accent">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Page Not Found</h2>
      <p className="text-lg mb-8 text-gray-300 max-w-lg mx-auto">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        href="/"
        className="bg-accent hover:bg-accent-hover text-[#06091F] font-bold py-3 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl"
      >
        Return to Homepage
      </Link>
    </div>
  );
} 