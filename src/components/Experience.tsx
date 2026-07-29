import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: 'Junior Fullstack Developer',
      company: 'Tech Company',
      period: '0 - Present',
      location: 'Tashkent',
      description: 'Learning fullstack development with React.js, Next.js, Node.js, Express.js, PostgreSQL. Studying REST APIs, GraphQL, and real-time features with Socket.io. Exploring Docker, Nginx, and PM2 for deployment.'
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '0 - 0',
      location: 'Tashkent',
      description: 'Developing fullstack web applications with React, TypeScript, Node.js, MongoDB. Learning RESTful APIs, OpenAI API integration, and database management with Prisma ORM.'
    },
    {
      title: 'Backend Developer Trainee',
      company: 'Startup Inc',
      period: '0 - 0',
      location: 'Remote',
      description: 'Starting career in backend development with Node.js, Express.js, PostgreSQL. Learning JWT authentication, OAuth 2.0, and deployment to Vercel and Render.'
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
