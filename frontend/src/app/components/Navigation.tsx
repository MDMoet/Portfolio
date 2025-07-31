import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-transparent border-b border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-300">
              M.D. Moet
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-400 hover:text-gray-100 transition-colors ">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-gray-100 transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-gray-400 hover:text-gray-100 transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-gray-100 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
