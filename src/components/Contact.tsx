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
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const formVariant: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
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
        
        <div className="contact-container glass">
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
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:tolmas.urinov@gmail.com" className="text-muted">tolmas.urinov@gmail.com</a>
                </div>
              </motion.div>
              
              <motion.div className="info-item" variants={itemVariant}>
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Telefon</h4>
                  <a href="tel:+998889377997" className="text-muted">+998 88 937 79 97</a>
                </div>
              </motion.div>
              
              <motion.div className="info-item" variants={itemVariant}>
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
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
            <div className="form-group">
              <label htmlFor="name">{t('contact.form.name')}</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required 
                placeholder={t('contact.form.placeholder_name')}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">{t('contact.form.email')}</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                required 
                placeholder={t('contact.form.placeholder_email')}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">{t('contact.form.message')}</label>
              <textarea 
                id="message" 
                rows={4}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                required 
                placeholder={t('contact.form.placeholder_message')}
              ></textarea>
            </div>
            
            <motion.button 
              type="submit" 
              className="btn btn-primary submit-btn" 
              disabled={status === 'loading'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('contact.form.submit')} <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
