'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(path);
  };

  const getLinkClasses = (path: string, isMobile = false) => {
    const baseClasses = isMobile 
      ? "block text-lg px-4 py-3 rounded-lg transition-colors relative"
      : "relative transition-colors";
    
    const activeClasses = isActive(path)
      ? "text-gray-100"
      : "text-gray-400 hover:text-gray-100";
    
    const mobileHover = isMobile ? "hover:bg-gray-800" : "";
    
    return `${baseClasses} ${activeClasses} ${mobileHover}`;
  };

  return (
    <nav className="bg-gradient-to-br from-black to-gray-900 fixed top-0 right-0 w-full z-40 border-b border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold opacity-100 text-gray-300">
              M.D. Moet
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={getLinkClasses('/')}>
              Home
              {isActive('/') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"></div>
              )}
            </Link>
            <Link href="/about" className={getLinkClasses('/about')}>
              About
              {isActive('/about') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"></div>
              )}
            </Link>
            <Link href="/projects" className={getLinkClasses('/projects')}>
              Projects
              {isActive('/projects') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"></div>
              )}
            </Link>
            <Link href="/contact" className={getLinkClasses('/contact')}>
              Contact
              {isActive('/contact') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"></div>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden z-100 flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-gray-100 focus:outline-none focus:text-gray-100 transition-colors z-50 relative"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 right-0 h-full w-5/9 bg-gradient-to-br from-gray-900 to-black shadow-lg z-50 md:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full pt-20 px-6">
              <div className="space-y-6">
                <Link href="/" onClick={closeMenu} className={getLinkClasses('/', true)}>
                  Home
                  {isActive('/') && (
                    <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-purple-600"></div>
                  )}
                </Link>
                <Link href="/about" onClick={closeMenu} className={getLinkClasses('/about', true)}>
                  About
                  {isActive('/about') && (
                    <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-purple-600"></div>
                  )}
                </Link>
                <Link href="/projects" onClick={closeMenu} className={getLinkClasses('/projects', true)}>
                  Projects
                  {isActive('/projects') && (
                    <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-purple-600"></div>
                  )}
                </Link>
                <Link href="/contact" onClick={closeMenu} className={getLinkClasses('/contact', true)}>
                  Contact
                  {isActive('/contact') && (
                    <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-purple-600"></div>
                  )}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}