import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      period: '2026 - Present',
      location: 'Tashkent',
      description: 'Leading frontend development team, building scalable applications with React and TypeScript.'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2024 - 2025',
      location: 'Tashkent',
      description: 'Developed responsive web applications, collaborated with design team, implemented modern UI/UX.'
    },
    {
      title: 'Junior Developer',
      company: 'Startup Inc',
      period: '2024 - 2025',
      location: 'Remote',
      description: 'Started career in web development, learned React, JavaScript, and modern development practices.'
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {t('experience.title')}
        </motion.h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-content glass">
                <div className="timeline-icon">
                  <Briefcase size={24} />
                </div>
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <div className="timeline-meta">
                    <span className="timeline-company">{exp.company}</span>
                    <div className="timeline-details">
                      <span className="timeline-detail">
                        <Calendar size={16} />
                        {exp.period}
                      </span>
                      <span className="timeline-detail">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
