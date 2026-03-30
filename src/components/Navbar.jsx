import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-2xl shadow-xl z-50 border border-white/20 rounded-full px-6 py-3 whitespace-nowrap">
      <div className="flex justify-between items-center gap-8">
          {/* Logo with Portfolio Label */}
          <div className="flex-shrink-0 flex flex-col gap-0">
            <span className="text-xs font-bold text-beige-600 uppercase tracking-widest leading-none"></span>
            <a href="#home" className="text-xl font-black text-beige-900 hover:opacity-80 transition-opacity leading-none">
              DS
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-beige-700 hover:text-beige-900 transition-colors text-xs font-semibold uppercase tracking-tight relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Desktop CTA Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-5 py-2 bg-beige-900 text-white rounded-full font-semibold text-xs hover:bg-beige-800 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Let's Connect
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 hover:bg-white/20 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-5 h-5 text-beige-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

      {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-white/20 bg-white/10 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-beige-700 hover:text-beige-900 hover:bg-white/20 transition-all text-sm font-semibold uppercase tracking-wide rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block mx-4 mt-4 px-6 py-3 bg-beige-900 text-white rounded-full font-semibold text-sm text-center hover:bg-beige-800 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Connect
            </a>
          </div>
        )}
    </nav>
  );
}
