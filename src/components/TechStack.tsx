import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Layout, Database, Server, Cpu } from 'lucide-react';
import './TechStack.css';

const TechStack: React.FC = () => {
  const { t } = useTranslation();

  const techStack = {
    frontend: [
      'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 
      'Tailwind CSS', 'Bootstrap', 'Responsive Web Design', 'Axios', 'JSON'
    ],
    backend: [
      'Node.js', 'Express.js', 'NestJS', 'Fastify', 'REST API', 'GraphQL', 
      'Socket.io', 'JWT', 'OAuth 2.0', 'Bcrypt', 'MVC Architecture'
    ],
    database: [
      'PostgreSQL', 'MongoDB', 'Prisma ORM', 'Mongoose', 'Redis', 
      'CRUD Operations', 'Environment Variables (.env)'
    ],
    devops: [
      'Git', 'GitHub', 'Docker', 'Docker Compose', 'Nginx', 'PM2', 
      'Vercel', 'Render', 'Fly.io', 'Netlify', 'Postman', 'Linux (asosiy)'
    ],
    ai: [
      'OpenAI API', 'Gemini API'
    ],
    tools: [
      'Figma'
    ]
  };

  const categories = [
    { key: 'frontend', icon: <Layout size={28} />, title: 'Frontend' },
    { key: 'backend', icon: <Server size={28} />, title: 'Backend' },
    { key: 'database', icon: <Database size={28} />, title: 'Database' },
    { key: 'devops', icon: <Cpu size={28} />, title: 'DevOps' },
    { key: 'ai', icon: <Cpu size={28} />, title: 'AI Integration' },
    { key: 'tools', icon: <Layout size={28} />, title: 'Tools' }
  ];

  return (
    <section id="techstack" className="section techstack">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {t('techstack.title')}
        </motion.h2>
        
        <div className="techstack-grid">
          {categories.map((category, index) => (
            <motion.div
              key={category.key}
              className="tech-category glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="category-header">
                <motion.div 
                  className="category-icon"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="tech-list">
                {techStack[category.key as keyof typeof techStack].map((tech, i) => (
                  <motion.span
                    key={i}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-primary)' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
