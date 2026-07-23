import React, { useState, useEffect } from 'react';
import { ExternalLink, Code, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, type Variants } from 'framer-motion';
import './Projects.css';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: t('projects.p1_title'),
      description: t('projects.p1_desc'),
      tech: ['React', 'TypeScript', 'Node.js', 'Stripe'],
      github: 'https://github.com/Tolmas001/shop_frontend',
      live: 'https://shop-frontend.vercel.app'
    },
    {
      title: t('projects.p2_title'),
      description: t('projects.p2_desc'),
      tech: ['Vue.js', 'Firebase', 'Chart.js'],
      github: 'https://github.com/Tolmas001/msw-mocks',
      live: 'https://msw-mocks-w8e9.vercel.app/'
    },
    {
      title: t('projects.p3_title'),
      description: t('projects.p3_desc'),
      tech: ['React', 'Socket.io', 'Express', 'MongoDB'],
      github: 'https://github.com/Tolmas001/socket-io-chat',
      live: 'https://frontend1-one-plum.vercel.app/'
    }
  ];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject !== null) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const openProject = (index: number) => setSelectedProject(index);
  const closeProject = () => setSelectedProject(null);

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
          className={`projects-content ${selectedProject !== null ? 'blurred' : ''}`}
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
              onClick={() => openProject(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') openProject(index); }}
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
                    onClick={(e) => e.stopPropagation()}
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
                    onClick={(e) => e.stopPropagation()}
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

        {selectedProject !== null && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div 
              className="modal-content glass"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeProject} aria-label="Close">
                <X size={24} />
              </button>
              <div className="modal-header">
                <h2>{projects[selectedProject].title}</h2>
                <div className="project-tech">
                  {projects[selectedProject].tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="modal-body">
                <div className="project-image-placeholder modal-image">
                  <span className="text-muted">Loyiha Rasmi</span>
                </div>
                <p className="modal-description">{projects[selectedProject].description}</p>
              </div>
              <div className="modal-footer">
                <motion.a 
                  href={projects[selectedProject].github} 
                  className="btn btn-outline"
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code size={18} /> GitHub
                </motion.a>
                <motion.a 
                  href={projects[selectedProject].live} 
                  className="btn btn-primary"
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={18} /> Live Demo
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
