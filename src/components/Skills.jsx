import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faTools, faGlobe, faMicrochip, faCode, faCog, faCogs } from '@fortawesome/free-solid-svg-icons';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming',
      icon: faCode,
      skills: ['Python', 'C', 'Java'],
      color: 'from-blue-100 to-blue-50',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      category: 'Web Technologies',
      icon: faGlobe,
      skills: ['HTML', 'CSS', 'JavaScript'],
      color: 'from-orange-100 to-orange-50',
      gradient: 'from-orange-600 to-orange-700',
    },
    {
      category: 'Frameworks',
      icon: faCogs,
      skills: ['React.js', 'Node.js', 'Express.js', 'FastAPI'],
      color: 'from-green-100 to-green-50',
      gradient: 'from-green-600 to-green-700',
    },
    {
      category: 'ML & Libraries',
      icon: faMicrochip,
      skills: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
      color: 'from-purple-100 to-purple-50',
      gradient: 'from-purple-600 to-purple-700',
    },
    {
      category: 'Databases',
      icon: faDatabase,
      skills: ['MySQL', 'MongoDB'],
      color: 'from-red-100 to-red-50',
      gradient: 'from-red-600 to-red-700',
    },
    {
      category: 'Tools & DevOps',
      icon: faTools,
      skills: ['Git', 'Figma'],
      color: 'from-teal-100 to-teal-50',
      gradient: 'from-teal-600 to-teal-700',
    },
  ];

  const proficiencyData = [
    { skill: 'Python & Data Science', level: 90 },
    { skill: 'AI/ML & Deep Learning', level: 80 },
    { skill: 'React & Frontend', level: 75 },
    { skill: 'Backend Development', level: 85 },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-beige-50 to-white border-b border-beige-200 relative overflow-hidden">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-beige-300 to-transparent"></div>
      <div className="relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-beige-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-beige-700 mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-beige-700 max-w-3xl leading-relaxed font-light">
            A comprehensive overview of technologies and tools I work with for AI, ML, and mern-stack development.
          </p>
        </div>

        {/* Skills Grid - 6 Cards (3x2 on desktop, 2x3 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`group relative bg-white p-8 rounded-2xl border border-beige-200 hover:border-beige-400 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-default`}
            >
              {/* Background blur effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

              {/* Accent light */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-white opacity-0 group-hover:opacity-10 rounded-full blur-2xl group-hover:transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Category Icon & Title */}
                <div className="flex items-center gap-4 mb-8">
                  <FontAwesomeIcon icon={cat.icon} className="text-5xl text-beige-700 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-beige-900 group-hover:text-beige-700 transition-all duration-300">{cat.category}</h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className={`px-4 py-2.5 bg-beige-50 text-beige-700 rounded-full font-semibold text-sm border border-beige-200 hover:border-beige-400 hover:text-beige-900 transition-all duration-300 hover:scale-105 hover:shadow-md`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Accent bar at bottom */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-beige-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Proficiency Section */}
        <div className="bg-beige-50 border border-beige-200 p-10 md:p-14 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
          <div className="mb-2">
            <h3 className="text-3xl md:text-4xl font-bold text-beige-900 mb-2">Proficiency Levels</h3>
            <p className="text-beige-600 font-light">My depth of expertise in key technical areas.</p>
          </div>

          <div className="space-y-10 mt-12">
            {proficiencyData.map((item, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg text-beige-900 group-hover:text-beige-700 transition-colors">{item.skill}</span>
                  <span className="text-sm font-bold text-white bg-gradient-to-r from-beige-500 to-beige-600 px-4 py-1.5 rounded-full shadow-md group-hover:shadow-lg transition-shadow">
                    {item.level}%
                  </span>
                </div>
                <div className="w-full bg-beige-100 rounded-full h-3 overflow-hidden shadow-sm">
                  <div
                    className="bg-gradient-to-r from-beige-500 via-beige-600 to-beige-700 h-3 rounded-full transition-all duration-700 ease-out group-hover:shadow-lg shadow-md"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 border-2 border-beige-100 hover:border-orange-300 transition-all duration-300 cursor-default">
            <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">6</div>
            <p className="text-beige-600 font-semibold uppercase tracking-wider text-sm">Categories</p>
          </div>
          <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 border-2 border-beige-100 hover:border-orange-300 transition-all duration-300 cursor-default">
            <div className="text-5xl font-black bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">20+</div>
            <p className="text-beige-600 font-semibold uppercase tracking-wider text-sm">Technologies</p>
          </div>
          <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 border-2 border-beige-100 hover:border-orange-300 transition-all duration-300 cursor-default">
            <div className="text-5xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">AI/DS</div>
            <p className="text-beige-600 font-semibold uppercase tracking-wider text-sm">Specialty</p>
          </div>
          <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 border-2 border-beige-100 hover:border-orange-300 transition-all duration-300 cursor-default">
            <div className="text-5xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">MERN</div>
            <p className="text-beige-600 font-semibold uppercase tracking-wider text-sm">Stack</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
