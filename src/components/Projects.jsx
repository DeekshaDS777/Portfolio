import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faGamepad, faHardHat, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  const projects = [
    {
      title: 'Smart AI Notes Summarizer',
      duration: 'Jan 2025 – Mar 2025',
      description: [
        'Built an offline NLP-based notes summarization system using lightweight models for fast, secure, and efficient text processing without cloud dependency.',
        'Added automated quiz generation and multimedia features (image and audio support) to enhance interactive learning.',
      ],
      tech: ['Python', 'React', 'LLM', 'MongoDB'],
      icon: faFileAlt,
      github: 'https://github.com/Dharunkumar0/AI-Notes-Generator-Hackelite',
    },
    {
      title: 'Gamified Learning Platform',
      duration: 'Oct 2024 – Dec 2024',
      description: [
        'Developed a STEM learning platform with interactive games, videos, and quizzes to improve engagement and concept understanding.',
        'Improved accessibility for rural users with offline functionality and optimized performance, reducing load time by 40%.',
      ],
      tech: ['React.js', 'FastAPI', 'NLP', 'Python', 'JavaScript'],
      icon: faGamepad,
      github: 'https://github.com/Dharunkumar0/funfinity',
    },
    {
      title: 'Concrete Compressive Strength Predictor',
      duration: 'Aug 2024 – Sep 2024',
      description: [
        'Built a machine learning pipeline to predict concrete compressive strength using Random Forest and XGBoost with R² = 96%.',
        'Designed a modular system with preprocessing, training, evaluation, and visualization, plus an interactive CLI.',
      ],
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'Matplotlib'],
      icon: faHardHat,
      github: 'https://github.com/AshwathNagarajan/Concrete-Compressive-Strength',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-beige-200 relative overflow-hidden">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-beige-300 to-transparent"></div>
      <div className="relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-beige-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-beige-700 mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-beige-700 max-w-3xl leading-relaxed font-light">
            Premium projects showcasing AI/ML, full-stack development, and real-world problem-solving capabilities.
          </p>
        </div>

        {/* Projects Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl border border-beige-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-beige-400 overflow-hidden flex flex-col"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-beige-700"></div>

              {/* Project Image/Icon Section */}
              <div className="relative h-48 bg-gradient-to-br from-beige-100 to-beige-50 flex items-center justify-center overflow-hidden border-b border-beige-200">
                <div className="text-7xl text-beige-700 opacity-80 group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={project.icon} />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-bold text-beige-900 mb-2 group-hover:text-beige-700 transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-beige-700 leading-relaxed mb-4 flex-grow">
                  {project.description[0]?.split('.')[0] + '.' || project.description}
                </p>

                {/* View Project Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-beige-900 text-white rounded-full font-semibold text-sm hover:bg-beige-800 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-fit"
                >
                  View project
                  <span>→</span>
                </a>
              </div>

              {/* Bottom gradient on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-1 bg-gradient-to-r from-beige-700 to-transparent transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-beige-600 text-lg mb-6">
            Interested in seeing more projects? Visit my GitHub!
          </p>
          <a
            href="https://github.com/DeekshaDS777"
            className="inline-flex items-center gap-2 px-8 py-4 bg-beige-900 hover:bg-beige-800 text-white rounded-lg font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
