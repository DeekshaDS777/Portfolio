import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faGlobe, faBriefcase, faCheck, faRocket, faLightbulb, faBolt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const directContact = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'deekshadhanasekar@gmail.com',
      link: 'mailto:deekshadhanasekar@gmail.com',
    },
    {
      icon: faPhone,
      label: 'Phone',
      value: '+91 90033 34347',
      link: 'tel:+919003334347',
    },
    {
      icon: faLocationDot,
      label: 'Location',
      value: 'Erode, Tamil Nadu',
      link: '#',
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/deeksha-dhanasekar', icon: faLinkedin },
    { name: 'GitHub', url: 'https://github.com/DeekshaDS777', icon: faGithub },
    { name: 'LeetCode', url: 'https://leetcode.com/u/DeekshaDS777/', icon: faGlobe },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-beige-50 to-white border-b border-beige-200 relative overflow-hidden">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-beige-300 to-transparent"></div>
      <div className="relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Hero CTA Section */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-beige-900 mb-6 leading-tight">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-beige-700 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-lg text-beige-700 max-w-3xl mx-auto leading-relaxed font-light">
            I'm always excited to explore new opportunities, collaborate on innovative projects, or simply chat about technology and AI. 
            Whether you have an opportunity, question, or just want to connect—don't hesitate to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Direct Contact Cards */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-beige-900 mb-6">Quick Contact</h3>
            
            {directContact.map((contact, idx) => (
              <a
                key={idx}
                href={contact.link}
                className="block group bg-white border border-beige-200 rounded-xl p-5 hover:border-beige-400 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon icon={contact.icon} className="text-3xl text-beige-700 group-hover:scale-110 transition-transform duration-300" />
                  <div className="flex-grow">
                    <p className="text-sm text-beige-600 font-semibold uppercase tracking-wide">
                      {contact.label}
                    </p>
                    <p className="text-lg font-bold text-beige-900 group-hover:text-orange-600 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                  <div className="text-xl group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </div>
                </div>
              </a>
            ))}

            {/* Social Links Section */}
            <div className="pt-4 mt-8 border-t border-beige-200">
              <h3 className="text-lg font-bold text-beige-900 mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    className="group flex items-center justify-center gap-2 bg-beige-50 border border-beige-200 p-4 rounded-lg hover:border-beige-400 hover:shadow-md transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-2xl text-beige-700 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-sm font-semibold text-beige-700 group-hover:text-beige-900 hidden sm:inline">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white border border-beige-200 p-10 md:p-14 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-3xl font-bold text-beige-900 mb-2">Send Me a Message</h3>
              <p className="text-beige-600 mb-8 font-light">I'll get back to you within 24-48 hours.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-8">
                {/* Name Field */}
                <div>
                  <label className="block text-beige-900 font-bold mb-3 text-xs uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-beige-50 border-2 border-beige-200 rounded-lg focus:border-orange-500 focus:bg-white focus:outline-none transition-all duration-300 text-beige-900 placeholder-beige-400"
                    placeholder="Deeksha"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-beige-900 font-bold mb-3 text-sm uppercase tracking-wide">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-beige-50 border-2 border-beige-200 rounded-lg focus:border-orange-500 focus:bg-white focus:outline-none transition-all duration-300 text-beige-900 placeholder-beige-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label className="block text-beige-900 font-bold mb-3 text-sm uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-beige-50 border-2 border-beige-200 rounded-lg focus:border-orange-500 focus:bg-white focus:outline-none transition-all duration-300 text-beige-900 placeholder-beige-400 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              {/* Success Message */}
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg animate-pulse">
                  <p className="text-green-700 font-bold"><FontAwesomeIcon icon={faCheck} className="mr-2" />Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-beige-500 to-beige-800 hover:from-beige-600 hover:to-beige-700 text-white font-bold text-lg rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Send My Message</span>
                <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
              </button>

              <p className="text-center text-beige-600 text-sm mt-4">
                I typically respond within 24-48 hours.
              </p>
            </form>
          </div>
        </div>

        {/* CTA Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-100 p-6 rounded-xl text-center">
            <FontAwesomeIcon icon={faBolt} className="text-3xl mb-2 text-beige-700 block" />
            <p className="text-lg font-bold text-beige-900">Quick Response</p>
            <p className="text-sm text-beige-600 mt-1">24-48 hour response time</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100 p-6 rounded-xl text-center">
            <FontAwesomeIcon icon={faRocket} className="text-3xl mb-2 text-beige-700 block" />
            <p className="text-lg font-bold text-beige-900">Open to Opportunities</p>
            <p className="text-sm text-beige-600 mt-1">Projects, internships & collaborations</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-100 p-6 rounded-xl text-center">
            <FontAwesomeIcon icon={faLightbulb} className="text-3xl mb-2 text-beige-700 block" />
            <p className="text-lg font-bold text-beige-900">Let's Collaborate</p>
            <p className="text-sm text-beige-600 mt-1">Building AI & tech solutions together</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-beige-200 mt-16 pt-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <p className="text-2xl font-bold text-beige-900">Deeksha D S</p>
            <p className="text-lg text-orange-600 font-semibold">AI/ML & MERN Stack Developer</p>
          </div>
          <p className="text-beige-600 mb-6">
            Passionate about building intelligent applications and solving real-world problems with technology.
          </p>
          <p className="text-xs text-beige-500 uppercase tracking-widest">
            © 2025-2026 Deeksha D S. All rights reserved.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
