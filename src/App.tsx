import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import FloatingSocial from './components/FloatingSocial';
import Preloader from './components/Preloader';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <>
      <Preloader />
      <Navbar />
      <FloatingSocial />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <TechStack />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
