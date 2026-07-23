import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, Tech Company',
      content: 'Tolmas is an exceptional developer. He delivered our project on time and exceeded our expectations with the quality of work.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      content: 'Working with Tolmas was a great experience. His attention to detail and problem-solving skills are outstanding.',
      rating: 5
    },
    {
      name: 'Michael Brown',
      role: 'Startup Founder',
      content: 'Highly recommend Tolmas for any web development project. He brings creativity and technical expertise to every task.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {t('testimonials.title')}
        </motion.h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="testimonial-quote">
                <Quote size={24} />
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonial.name}</h4>
                <span className="author-role">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
