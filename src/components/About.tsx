import React from 'react';
import { Code, Database, Layout, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, type Variants } from 'framer-motion';
import './About.css';

const About: React.FC = () => {
  const { t } = useTranslation();

  const skills = [
    { name: 'Frontend', icon: <Layout size={24} />, desc: t('about.skills.frontend_desc'), level: 95 },
    { name: 'Backend', icon: <Database size={24} />, desc: t('about.skills.backend_desc'), level: 85 },
    { name: 'Mobile', icon: <Smartphone size={24} />, desc: t('about.skills.mobile_desc'), level: 75 },
    { name: 'Tools', icon: <Code size={24} />, desc: t('about.skills.tools_desc'), level: 90 }
  ];

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {t('about.title')}
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text glass"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
          >
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
          </motion.div>
          
          <motion.div 
            className="skills-grid"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {skills.map((skill) => (
              <motion.div 
                key={skill.name} 
                className="skill-card glass"
                variants={fadeUpVariant}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 15px 30px rgba(56, 189, 248, 0.15)",
                  borderColor: "var(--accent-primary)" 
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="skill-icon"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {skill.icon}
                </motion.div>
                <h3>{skill.name}</h3>
                <p className="text-muted">{skill.desc}</p>
                <div className="skill-progress">
                  <motion.div 
                    className="skill-progress-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <span className="skill-level">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
