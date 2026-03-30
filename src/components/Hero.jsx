import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMicrochip, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-beige-50 via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Portfolio Label */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-beige-100 text-beige-700 rounded-full text-xs font-bold tracking-widest uppercase border border-beige-200">
                <span className="inline-block mr-2">—</span>
                Portfolio
              </span>
            </div>

            {/* Name Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-beige-900 mb-6 leading-tight">
              Deeksha
              <br />
              <span className="text-beige-900">DhanaSekar</span>
            </h1>

            {/* Role with styled box */}
            <div className="mb-8 inline-flex">
              <div className="px-6 py-3 border-2 border-beige-700 rounded-lg bg-white">
                <p className="text-lg md:text-xl font-bold text-beige-800">
                  Data Engineer
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-beige-700 mb-12 leading-relaxed max-w-lg font-light">
              Welcome to 'Designing where innovation knows no bounds'. With a passion for pushing the boundaries of UI/UX design.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
              <a
                href="/Deeksha_Resume.pdf"
                download="Deeksha_Resume.pdf"
                className="inline-flex items-center px-8 py-3 bg-beige-900 text-white rounded-full font-semibold text-base hover:bg-beige-800 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Download CV
                <FontAwesomeIcon icon={faArrowRight} className="ml-3 w-4 h-4" />
              </a>
              
              {/* Quick stat */}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-beige-700">Connect:</span>
              <a
                href="https://github.com/DeekshaDS777"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-beige-100 text-beige-900 rounded-full hover:bg-beige-900 hover:text-white transition-all duration-300 hover:shadow-lg"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/deeksha-dhanasekar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-beige-100 text-beige-900 rounded-full hover:bg-beige-900 hover:text-white transition-all duration-300 hover:shadow-lg"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/DeekshaDS777/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-beige-100 text-beige-900 rounded-full hover:bg-beige-900 hover:text-white transition-all duration-300 hover:shadow-lg"
                title="LeetCode"
              >
                <FontAwesomeIcon icon={faBriefcase} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right - Profile Image Section */}
          <div className="flex justify-center relative">
            {/* Let's Connect Badge */}
            <div className="absolute top-0 right-12 z-20 px-4 py-2.5 bg-beige-900 text-white rounded-full text-sm font-semibold shadow-lg">
              Let's Connect →
            </div>

            {/* Profile Image Container */}
            <div className="relative w-80 h-96 md:w-96 md:h-96">
              {/* Outer decorative circle */}
              <div className="absolute -top-6 -right-6 w-full h-full border-4 border-beige-300 rounded-full opacity-50"></div>
              
              {/* Main Image Box */}
              <div className="relative h-full w-full">
                {/* Image Container with rounded corners */}
                <div className="absolute inset-0 bg-gradient-to-br from-beige-100 to-beige-50 rounded-3xl overflow-hidden shadow-xl border border-beige-200">
                  <img 
                    src="/image.png" 
                    alt="Deeksha DhanaSekar" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Small decorative element */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-beige-200 rounded-full opacity-60"></div>
                
                {/* Quote/Note bubble near image */}
                <div className="absolute -bottom-8 left-8 bg-white px-4 py-2.5 rounded-lg shadow-lg border border-beige-200 max-w-xs">
                  <p className="text-xs text-beige-700 font-medium">
                    "Working with Deeksha for Data Engineering is incredible, awesome experience for any project."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
