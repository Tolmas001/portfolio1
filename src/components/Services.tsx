import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Database, Palette, Code, Zap } from 'lucide-react';
import './Services.css';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    { icon: <Layout size={32} />, title: 'Web Development', desc: 'Modern, responsive web applications' },
    { icon: <Smartphone size={32} />, title: 'Mobile Apps', desc: 'Cross-platform mobile applications' },
    { icon: <Database size={32} />, title: 'Backend Development', desc: 'Scalable server-side solutions' },
    { icon: <Palette size={32} />, title: 'UI/UX Design', desc: 'Beautiful and intuitive interfaces' },
    { icon: <Code size={32} />, title: 'API Development', desc: 'RESTful and GraphQL APIs' },
    { icon: <Zap size={32} />, title: 'Performance Optimization', desc: 'Fast and efficient applications' }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {t('services.title')}
        </motion.h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="service-icon"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
