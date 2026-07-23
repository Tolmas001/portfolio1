import React from 'react';
import { Code, Briefcase, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import './FloatingSocial.css';

const FloatingSocial: React.FC = () => {
  const socials = [
    { icon: <Code size={20} />, href: 'https://github.com/Tolmas001', label: 'GitHub' },
    { icon: <Briefcase size={20} />, href: 'https://www.linkedin.com/in/tolmas-o-rinov-tohir-o-g-li-b34b04350/', label: 'LinkedIn' },
    { icon: <Send size={20} />, href: 'https://t.me/tolmas_urinov', label: 'Telegram' },
    { icon: <Mail size={20} />, href: 'mailto:tolmas.urinov@gmail.com', label: 'Email' }
  ];

  return (
    <div className="floating-social">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className="floating-social-item"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.15, x: -5 }}
          whileTap={{ scale: 0.95 }}
          title={social.label}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default FloatingSocial;
