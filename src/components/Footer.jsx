import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faGlobe, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-beige-900 to-beige-800 text-beige-100 py-16 px-4 sm:px-6 lg:px-8 border-t border-beige-700">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Deeksha</h3>
            <p className="text-beige-300 leading-relaxed text-sm">
              Building intelligent applications with AI, ML, and modern web technologies. Always learning, always creating.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white uppercase tracking-wide text-sm">Navigation</h4>
            <nav className="space-y-2">
              <a href="#home" className="text-beige-300 hover:text-orange-400 transition-colors block text-sm">Home</a>
              <a href="#about" className="text-beige-300 hover:text-orange-400 transition-colors block text-sm">About</a>
              <a href="#skills" className="text-beige-300 hover:text-orange-400 transition-colors block text-sm">Skills</a>
              <a href="#projects" className="text-beige-300 hover:text-orange-400 transition-colors block text-sm">Projects</a>
              <a href="#contact" className="text-beige-300 hover:text-orange-400 transition-colors block text-sm">Contact</a>
            </nav>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white uppercase tracking-wide text-sm">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:deekshadhanasekar@gmail.com" 
                className="text-beige-300 hover:text-orange-400 transition-colors block text-sm flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="truncate">deekshadhanasekar@gmail.com</span>
              </a>
              <a 
                href="tel:+919003334347" 
                className="text-beige-300 hover:text-orange-400 transition-colors block text-sm flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faPhone} />
                <span>+91 90033 34347</span>
              </a>
              <p className="text-beige-300 text-sm flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Erode, Tamil Nadu</span>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white uppercase tracking-wide text-sm">Connect</h4>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/in/deeksha-dhana-sekar-777/" 
                className="w-10 h-10 bg-beige-700 hover:bg-blue-500 rounded-lg flex items-center justify-center text-lg transition-colors shadow-md"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-white" />
              </a>
              <a 
                href="https://github.com/deekshadhanasekar" 
                className="w-10 h-10 bg-beige-700 hover:bg-gray-700 rounded-lg flex items-center justify-center text-lg transition-colors shadow-md"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="text-white" />
              </a>
              <a 
                href="https://leetcode.com/deekshadhanasekar/" 
                className="w-10 h-10 bg-beige-700 hover:bg-yellow-600 rounded-lg flex items-center justify-center text-lg transition-colors shadow-md"
                title="LeetCode"
              >
                <FontAwesomeIcon icon={faGlobe} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-beige-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-beige-400 text-sm">
              © {currentYear} Deeksha D S. All rights reserved.
            </p>
            <p className="text-beige-400 text-sm">
              Designed & Built with <FontAwesomeIcon icon={faHeart} className="text-orange-400 mx-1" style={{display: 'inline'}} /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
