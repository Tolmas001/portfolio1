import { useEffect } from 'react';

const useScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 150;

      revealElements.forEach((element) => {
        const elementTop = (element as HTMLElement).getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);
};

export default useScrollReveal;
