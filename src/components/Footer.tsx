import React from 'react';
import { Code, Briefcase, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-logo">
            Tolmas Urinov<span className="highlight">.</span>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} Tolmas. {t('footer.rights')}
          </p>
          <div className="footer-links">
            <motion.a href="#about" whileHover={{ y: -3 }}>{t('navbar.about')}</motion.a>
            <motion.a href="#projects" whileHover={{ y: -3 }}>{t('navbar.projects')}</motion.a>
            <motion.a href="#contact" whileHover={{ y: -3 }}>{t('navbar.contact')}</motion.a>
          </div>
          <div className="footer-social">
            <motion.a 
              href="https://github.com/Tolmas001" 
              target="_blank" 
              rel="noreferrer"
              className="social-icon"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Code size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/tolmas-o-rinov-tohir-o-g-li-b34b04350/" 
              target="_blank" 
              rel="noreferrer"
              className="social-icon"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Briefcase size={20} />
            </motion.a>
            <motion.a 
              href="https://t.me/tolmas_urinov"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
