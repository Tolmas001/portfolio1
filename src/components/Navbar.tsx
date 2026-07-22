import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Briefcase, Sun, Moon, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.projects'), href: '#projects' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'uz' ? 'en' : 'uz';
    i18n.changeLanguage(nextLang);
  };

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'glass scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container navbar-container">
        <motion.a 
          href="#" 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Tolmas Urinov<span className="highlight">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <a href={link.href} className="nav-link">{link.name}</a>
              </motion.li>
            ))}
          </ul>
          
          <motion.div 
            className="controls"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button 
              onClick={toggleLanguage} 
              className="control-btn" 
              title="O'zbek / English"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Globe size={18} />
              <span className="lang-text">{i18n.language.toUpperCase()}</span>
            </motion.button>
            <motion.button 
              onClick={toggleTheme} 
              className="control-btn" 
              title="Kun / Tun"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9, rotate: -15 }}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </motion.div>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="https://github.com/Tolmas001" target="_blank" rel="noreferrer"><Code size={20} /></a>
            <a href="https://www.linkedin.com/in/tolmas-o-rinov-tohir-o-g-li-b34b04350/" target="_blank" rel="noreferrer"><Briefcase size={20} /></a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-controls">
          <button onClick={toggleTheme} className="control-btn mobile-only">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={toggleLanguage} className="control-btn mobile-only">
            <span className="lang-text">{i18n.language.toUpperCase()}</span>
          </button>
          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className={`mobile-nav glass`}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={link.href} 
                    className="mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
