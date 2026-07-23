import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Users, Award, Clock } from 'lucide-react';
import './Stats.css';

const Stats: React.FC = () => {
  const { t } = useTranslation();
  const [counts, setCounts] = useState({ projects: 5, clients: 20, experience: 1, awards: 5 });

  const targetCounts = {
    projects: 5,
    clients: 20,
    experience: 1,
    awards: 5
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts(prev => {
        const newCounts = { ...prev };
        Object.keys(targetCounts).forEach(key => {
          const target = targetCounts[key as keyof typeof targetCounts];
          const increment = target / steps;
          if (newCounts[key as keyof typeof newCounts] < target) {
            newCounts[key as keyof typeof newCounts] = Math.min(
              Math.floor(newCounts[key as keyof typeof newCounts] + increment),
              target
            );
          }
        });
        return newCounts;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: <Code size={32} />, value: counts.projects, label: t('stats.projects'), suffix: '+' },
    { icon: <Users size={32} />, value: counts.clients, label: t('stats.clients'), suffix: '+' },
    { icon: <Clock size={32} />, value: counts.experience, label: t('stats.experience'), suffix: '+' },
    { icon: <Award size={32} />, value: counts.awards, label: t('stats.awards'), suffix: '+' }
  ];

  return (
    <section className="section stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <motion.div 
                className="stat-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {stat.icon}
              </motion.div>
              <div className="stat-value">
                {stat.value}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
