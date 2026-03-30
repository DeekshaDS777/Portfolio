import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faTrophy, faStar, faMicrochip, faChartBar, faScroll, faMedal } from '@fortawesome/free-solid-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';

export default function Achievements() {
  const achievementsList = [
    {
      title: 'SIH-Finale Waitinglist',
      subtitle: 'Smart India Hackathon 2k25',
      icon: faRocket,
      badge: 'Finalist',
      year: '2025',
    },
    {
      title: 'Winner - Thinkathon\'26',
      subtitle: 'AI Coding Club',
      icon: faTrophy,
      badge: 'Winner',
      year: '2026',
    }
  ];

  const certificationsList = [
    {
      title: 'IBM Certified Generative AI',
      issuer: 'IBM',
      icon: faMicrochip,
      badge: 'Certification',
      year: '2025',
    },
    {
      title: 'NASSCOM Data Processing & Visualization',
      issuer: 'NASSCOM',
      icon: faChartBar,
      badge: 'Certification',
      year: '2025',
    },
    {
      title: 'Infosys JavaScript Certification',
      issuer: 'Infosys',
      icon: faJs,
      badge: 'Certification',
      year: '2024',
    },
  ];

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-beige-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-beige-900 mb-4">Achievements & Certifications</h2>
          <div className="w-24 h-1 bg-beige-700 mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-beige-700 max-w-3xl leading-relaxed font-light">
            Awards, recognition, and professional certifications that showcase my expertise and continuous learning commitment.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Achievements Column */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <FontAwesomeIcon icon={faTrophy} className="text-4xl text-beige-700" />
              <h3 className="text-3xl font-bold text-beige-900">Achievements</h3>
            </div>

            <div className="space-y-5">
              {achievementsList.map((achievement, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white border-2 border-beige-100 rounded-2xl p-7 hover:border-beige-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-beige-700 rounded-t-2xl"></div>

                  {/* Content */}
                  <div className="flex gap-5">
                    {/* Icon */}
                    <FontAwesomeIcon icon={achievement.icon} className="text-5xl text-beige-700 flex-shrink-0 group-hover:scale-110 transition-transform" />

                    {/* Text Content */}
                    <div className="flex-grow">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-lg font-bold text-beige-900 group-hover:text-orange-600 transition-colors">
                          {achievement.title}
                        </h4>
                      </div>
                      <p className="text-sm text-beige-700 font-semibold mb-3">
                        {achievement.subtitle}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-xs font-bold rounded-full shadow-sm">
                          {achievement.badge}
                        </span>
                        <span className="text-xs text-beige-600 font-medium">
                          {achievement.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect circle */}
                  <div className="absolute -right-2 -top-2 w-8 h-8 bg-orange-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <FontAwesomeIcon icon={faStar} className="text-4xl text-beige-700" />
              <h3 className="text-3xl font-bold text-beige-900">Certifications</h3>
            </div>

            <div className="space-y-5">
              {certificationsList.map((cert, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white border-2 border-beige-100 rounded-2xl p-7 hover:border-beige-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-beige-700 rounded-t-2xl"></div>

                  {/* Content */}
                  <div className="flex gap-5">
                    {/* Icon */}
                    <FontAwesomeIcon icon={cert.icon} className="text-5xl text-beige-700 flex-shrink-0 group-hover:scale-110 transition-transform" />

                    {/* Text Content */}
                    <div className="flex-grow">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-lg font-bold text-beige-900 group-hover:text-blue-600 transition-colors">
                          {cert.title}
                        </h4>
                      </div>
                      <p className="text-sm text-beige-700 font-semibold mb-3">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-bold rounded-full shadow-sm">
                          {cert.badge}
                        </span>
                        <span className="text-xs text-beige-600 font-medium">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect circle */}
                  <div className="absolute -right-2 -top-2 w-10 h-10 bg-beige-200 rounded-full opacity-0 group-hover:opacity-30 transition-opacity blur-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t-2 border-beige-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 border-2 border-beige-100 hover:border-orange-300 transition-all duration-300 cursor-default">
              <FontAwesomeIcon icon={faTrophy} className="text-5xl mb-3 text-beige-700" />
              <p className="text-xs font-bold text-beige-600 uppercase tracking-widest mb-1">
                Awards
              </p>
              <p className="text-4xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">{achievementsList.length}</p>
              <p className="text-xs text-beige-600 mt-1">Hackathons & Competitions</p>
            </div>
            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 border-2 border-beige-100 hover:border-orange-300 transition-all duration-300 cursor-default">
              <FontAwesomeIcon icon={faScroll} className="text-5xl mb-3 text-beige-700" />
              <p className="text-xs font-bold text-beige-600 uppercase tracking-widest mb-1">
                Certifications
              </p>
              <p className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">{certificationsList.length}</p>
              <p className="text-xs text-beige-600 mt-1">Professional Certificates</p>
            </div>
            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 border-2 border-beige-100 hover:border-orange-300 transition-all duration-300 cursor-default">
              <FontAwesomeIcon icon={faMedal} className="text-5xl mb-3 text-beige-700" />
              <p className="text-xs font-bold text-beige-600 uppercase tracking-widest mb-1">
                Recognition
              </p>
              <p className="text-4xl font-black bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">{achievementsList.length}</p>
              <p className="text-xs text-beige-600 mt-1">Winners & Finalists</p>
            </div>
            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 border-2 border-beige-100 hover:border-orange-300 transition-all duration-300 cursor-default">
              <FontAwesomeIcon icon={faStar} className="text-5xl mb-3 text-beige-700" />
              <p className="text-xs font-bold text-beige-600 uppercase tracking-widest mb-1">
                Excellence
              </p>
              <p className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">{certificationsList.length + achievementsList.length}</p>
              <p className="text-xs text-beige-600 mt-1">Total Recognitions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
