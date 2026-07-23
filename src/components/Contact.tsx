import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, type Variants } from 'framer-motion';
import './Contact.css';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const formspreeEndpoint = "https://formspree.io/f/placeholder";
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        alert(t('contact.form.success_alert'));
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        alert("Xatolik yuz berdi. (Formspree manzilini to'g'rilang)");
      }
    } catch (error) {
      setStatus('error');
      alert("Xatolik yuz berdi.");
    }
  };

  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const formVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {t('contact.title')}
        </motion.h2>
        
        <motion.div 
          className="contact-container glass"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div 
            className="contact-info"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3 variants={itemVariant}>{t('contact.subtitle')}</motion.h3>
            <motion.p className="text-secondary mb-4" variants={itemVariant}>
              {t('contact.desc')}
            </motion.p>
            
            <div className="info-items">
              <motion.div className="info-item" variants={itemVariant}>
                <motion.div 
                  className="info-icon"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail size={20} />
                </motion.div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:urinovtolmas20@gmail.com" className="text-muted">urinovtolmas20@gmail.com</a>
                </div>
              </motion.div>
              
              <motion.div className="info-item" variants={itemVariant}>
                <motion.div 
                  className="info-icon"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone size={20} />
                </motion.div>
                <div>
                  <h4>Telefon</h4>
                  <a href="tel:+998889377997" className="text-muted">+998 88 937 79 97</a>
                </div>
              </motion.div>
              
              <motion.div className="info-item" variants={itemVariant}>
                <motion.div 
                  className="info-icon"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin size={20} />
                </motion.div>
                <div>
                  <h4>{t('contact.address_title')}</h4>
                  <span className="text-muted">{t('contact.address_val')}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.form 
            className="contact-form" 
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={formVariant}
          >
            <motion.div 
              className="form-group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <label htmlFor="name">{t('contact.form.name')}</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required 
                placeholder={t('contact.form.placeholder_name')}
              />
            </motion.div>
            
            <motion.div 
              className="form-group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <label htmlFor="email">{t('contact.form.email')}</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                required 
                placeholder={t('contact.form.placeholder_email')}
              />
            </motion.div>
            
            <motion.div 
              className="form-group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <label htmlFor="message">{t('contact.form.message')}</label>
              <textarea 
                id="message" 
                rows={4}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                required 
                placeholder={t('contact.form.placeholder_message')}
              ></textarea>
            </motion.div>
            
            <motion.button 
              type="submit" 
              className="btn btn-primary submit-btn" 
              disabled={status === 'loading'}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 25px var(--accent-glow)" }}
              whileTap={{ scale: 0.98 }}
            >
              {t('contact.form.submit')} <Send size={18} />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
