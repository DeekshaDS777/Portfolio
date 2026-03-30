import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool, faChartBar, faLocationDot, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const infoCards = [
    {
      icon: faGraduationCap,
      label: 'Degree',
      value: 'B.Tech AI & Data Science',
    },
    {
      icon: faSchool,
      label: 'College',
      value: 'Kongu Engineering College',
    },
    {
      icon: faChartBar,
      label: 'CGPA',
      value: '8.00 / 10',
    },
    {
      icon: faLocationDot,
      label: 'Location',
      value: 'Erode, Tamil Nadu',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-beige-50 to-white border-b border-beige-200 relative overflow-hidden">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-beige-300 to-transparent"></div>
      <div className="relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-beige-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-beige-700 mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-beige-700 max-w-3xl leading-relaxed font-light">
            Get to know me better through my academic background, professional interests, and the journey that shaped me as a developer.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left Side - Descriptive Text */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-beige-50 to-white p-8 rounded-2xl border-2 border-beige-100 hover:border-beige-300 transition-all duration-300">
              <p className="text-lg text-beige-800 leading-relaxed font-light">
                I am a <span className="font-semibold text-beige-900">B.Tech Artificial Intelligence and Data Science</span> student at <span className="font-semibold text-beige-900">Kongu Engineering College</span> with a strong passion for AI-powered products, NLP, and mern stack development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-beige-200 hover:border-beige-400 transition-all duration-300">
              <p className="text-lg text-beige-800 leading-relaxed font-light">
                I enjoy building <span className="font-semibold text-orange-600">scalable, intelligent applications</span> that combine clean user experiences with practical problem-solving. My passion lies in creating solutions that make a real impact in the world.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-beige-100 hover:border-beige-300 transition-all duration-300">
              <h3 className="text-xl font-bold text-beige-900 mb-6">Core Interests:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 group cursor-default">
                  <FontAwesomeIcon icon={faCheck} className="text-xl font-bold text-orange-600 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-base text-beige-700 font-medium">Artificial Intelligence & Machine Learning</span>
                </li>
                <li className="flex items-start gap-4 group cursor-default">
                  <FontAwesomeIcon icon={faCheck} className="text-xl font-bold text-orange-600 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-base text-beige-700 font-medium">Natural Language Processing (NLP)</span>
                </li>
                <li className="flex items-start gap-4 group cursor-default">
                  <FontAwesomeIcon icon={faCheck} className="text-xl font-bold text-orange-600 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-base text-beige-700 font-medium">Full Stack Web Development</span>
                </li>
                <li className="flex items-start gap-4 group cursor-default">
                  <FontAwesomeIcon icon={faCheck} className="text-xl font-bold text-orange-600 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-base text-beige-700 font-medium">Problem-Solving & Optimization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Info Cards */}
          <div className="grid grid-cols-2 gap-6">
            {infoCards.map((card, idx) => (
              <div
                key={idx}
                className="group relative bg-beige-50 p-7 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-beige-200 hover:border-beige-400 overflow-hidden"
              >
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-beige-100 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"></div>

                {/* Relative content */}
                <div className="relative z-10">
                  {/* Card Icon */}
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-top-left">
                    <FontAwesomeIcon icon={card.icon} className="text-beige-700" />
                  </div>

                  {/* Card Content */}
                  <div>
                    <p className="text-xs font-bold text-beige-600 uppercase tracking-widest mb-2">
                      {card.label}
                    </p>
                    <p className="text-lg md:text-xl font-bold text-beige-900 leading-snug group-hover:text-orange-600 transition-colors">
                      {card.value}
                    </p>
                  </div>
                </div>

                {/* Top accent bar */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-0 group-hover:opacity-30 transition-opacity blur-xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t-2 border-beige-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center group cursor-default">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">AI & DS</div>
              <p className="text-beige-600 font-semibold uppercase tracking-wider text-sm">Primary Specialization</p>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">5+</div>
              <p className="text-beige-600 font-semibold uppercase tracking-wider text-sm">Projects Completed</p>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">Year 2</div>
              <p className="text-beige-600 font-semibold uppercase tracking-wider text-sm">Currently Pursuing</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
