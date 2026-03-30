import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBook, faBookOpen, faSchool, faChartLine, faBullseye } from '@fortawesome/free-solid-svg-icons';

export default function Education() {
  const education = [
    {
      level: 'Undergraduate',
      degree: 'B.Tech in Artificial Intelligence and Data Science',
      institution: 'Kongu Engineering College',
      location: 'Erode',
      duration: 'Aug 2024 – May 2028',
      score: '8.00',
      scoreLabel: 'CGPA',
      icon: faGraduationCap,
      color: 'from-blue-100 to-blue-50',
      status: 'Currently Pursued',
    },
    {
      level: 'Secondary Education',
      degree: 'Higher Secondary (12th Grade)',
      institution: 'Agastya Academy',
      location: 'Erode',
      duration: 'Jun 2023 – Apr 2024',
      score: '79.6',
      scoreLabel: 'Percentage',
      icon: faBook,
      color: 'from-green-100 to-green-50',
      status: 'Completed',
    },
    {
      level: 'Secondary Education',
      degree: 'SSLC (10th Grade)',
      institution: 'Agastya Academy',
      location: 'Erode',
      duration: 'Jun 2021 – Apr 2022',
      score: '89.8',
      scoreLabel: 'Percentage',
      icon: faBookOpen,
      color: 'from-purple-100 to-purple-50',
      status: 'Completed',
    },
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-beige-50 to-white border-b border-beige-200 relative overflow-hidden">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-beige-300 to-transparent"></div>
      <div className="relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-beige-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-beige-700 mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-beige-700 max-w-3xl leading-relaxed font-light">
            My academic journey and educational achievements at leading institutions.
          </p>
        </div>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-beige-400 via-beige-400 to-beige-300"></div>

          {/* Education Cards */}
          <div className="space-y-12 md:space-y-16">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className={`group relative flex flex-col ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-0 z-10">
                  <div className="w-6 h-6 bg-white border-4 border-beige-700 rounded-full shadow-lg"></div>
                </div>

                {/* Content - Left/Right based on index */}
                <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div
                    className={`bg-white p-10 md:p-12 rounded-2xl border border-beige-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-beige-400`}
                  >
                    {/* Status Badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                        edu.status === 'Currently Pursued'
                          ? 'bg-green-200 text-green-800'
                          : 'bg-beige-200 text-beige-800'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <FontAwesomeIcon icon={edu.icon} className="text-4xl text-beige-700" />
                      <div className="flex-grow">
                        {/* Degree */}
                        <h3 className="text-2xl font-bold text-beige-900 leading-tight mb-1">
                          {edu.degree}
                        </h3>
                        {/* Level */}
                        <p className="text-sm font-semibold text-beige-700 uppercase tracking-wide">
                          {edu.level}
                        </p>
                      </div>
                    </div>

                    {/* Institution & Location */}
                    <div className="mb-5 pb-5 border-b border-beige-200">
                      <p className="text-lg font-bold text-beige-900 mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-beige-600 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {edu.location}
                      </p>
                    </div>

                    {/* Duration and Score */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold text-beige-700 uppercase tracking-wide mb-1">
                          Duration
                        </p>
                        <p className="text-lg font-bold text-beige-900 flex items-center gap-2">
                          <svg className="w-4 h-4 text-beige-700" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2h16V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h12a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {edu.duration}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-beige-700 uppercase tracking-wide mb-1">
                          {edu.scoreLabel}
                        </p>
                        <div className="inline-block px-4 py-2 bg-white rounded-lg border-2 border-beige-300">
                          <p className="text-xl font-bold text-beige-700">
                            {edu.score}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t-2 border-beige-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 border-2 border-beige-100 hover:border-orange-300 transition-all duration-300 cursor-default">
              <FontAwesomeIcon icon={faSchool} className="text-5xl mb-3 text-beige-700 block" />
              <p className="text-xs font-bold text-beige-600 uppercase tracking-widest mb-1">
                Institutions
              </p>
              <p className="text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">2</p>
              <p className="text-sm text-beige-600">Top-tier educational</p>
            </div>
            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 border-2 border-beige-100 hover:border-orange-300 transition-all duration-300 cursor-default">
              <FontAwesomeIcon icon={faChartLine} className="text-5xl mb-3 text-beige-700 block" />
              <p className="text-xs font-bold text-beige-600 uppercase tracking-widest mb-1">
                Excellence
              </p>
              <p className="text-5xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">8.0+</p>
              <p className="text-sm text-beige-600">Consistent performance</p>
            </div>
            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 border-2 border-beige-100 hover:border-orange-300 transition-all duration-300 cursor-default">
              <FontAwesomeIcon icon={faBullseye} className="text-5xl mb-3 text-beige-700 block" />
              <p className="text-xs font-bold text-beige-600 uppercase tracking-widest mb-1">
                Current Focus
              </p>
              <p className="text-5xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">AI/DS</p>
              <p className="text-sm text-beige-600">Specialized field</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
