import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, type Variants } from 'framer-motion';
import './Projects.css';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.p1_title'),
      description: t('projects.p1_desc'),
      tech: ['React', 'TypeScript', 'Node.js', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      title: t('projects.p2_title'),
      description: t('projects.p2_desc'),
      tech: ['Vue.js', 'Firebase', 'Chart.js'],
      github: '#',
      live: '#'
    },
    {
      title: t('projects.p3_title'),
      description: t('projects.p3_desc'),
      tech: ['React', 'Socket.io', 'Express', 'MongoDB'],
      github: '#',
      live: '#'
    }
  ];

  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 15 
      } 
    }
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {t('projects.title')}
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card glass"
              variants={cardVariant}
              whileHover={{ 
                y: -15, 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                borderColor: "rgba(255,255,255,0.2)"
              }}
            >
              <motion.div 
                className="project-image-placeholder"
                whileHover={{ backgroundColor: "rgba(56, 189, 248, 0.2)" }}
              >
                <span className="text-muted">Loyiha Rasmi</span>
              </motion.div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description text-secondary">
                  {project.description}
                </p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <motion.a 
                    href={project.github} 
                    className="btn-icon" 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label="GitHub"
                    whileHover={{ scale: 1.1, backgroundColor: "var(--accent-primary)", color: "#fff" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Code size={20} />
                  </motion.a>
                  <motion.a 
                    href={project.live} 
                    className="btn-icon" 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label="Live Demo"
                    whileHover={{ scale: 1.1, backgroundColor: "var(--accent-primary)", color: "#fff" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
