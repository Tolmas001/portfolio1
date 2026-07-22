import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, type Variants } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import './Hero.css';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const visualVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      delay: 0.5
    }
  }
};

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = [t('hero.role'), 'React Developer', 'UI/UX Designer', 'Full Stack Developer'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setTypedText(isDeleting 
        ? fullText.substring(0, typedText.length - 1)
        : fullText.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && typedText === fullText) {
        setIsDeleting(true);
        setTypingSpeed(2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed, roles, t]);

  return (
    <section id="hero" className="hero">
      <ParticlesBackground />
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-greeting" variants={itemVariants}>
            {t('hero.greeting')}
          </motion.p>
          <motion.h1 className="hero-title" variants={itemVariants}>
            Tolmas Urinov <br />
            <span className="highlight">{typedText}<span className="cursor">|</span></span>
          </motion.h1>
          <motion.p className="hero-description" variants={itemVariants}>
            {t('hero.description')}
          </motion.p>
          
          <motion.div className="hero-cta" variants={itemVariants}>
            <motion.a 
              href="#projects" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.view_projects')} <ArrowRight size={18} />
            </motion.a>
            <motion.a 
              href="/resume.pdf" 
              className="btn btn-outline" 
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.download_cv')} <Download size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          variants={visualVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-blob animate-float"></div>
          <div className="hero-blob secondary delay-300"></div>
          <motion.div 
            className="hero-image-wrapper glass"
            whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src="/IMGM8093 (2).JPG" 
              alt="Tolmas Urinov" 
              className="hero-image"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
