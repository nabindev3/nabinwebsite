import { useReveal } from './hooks/useReveal.js';
import Cursor from './components/Cursor.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Workflow from './components/Workflow.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Research from './components/Research.jsx';
import Education from './components/Education.jsx';
import Photos from './components/Photos.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';

export default function App() {
  useReveal();
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <hr className="section-rule" />
      <Skills />
      <hr className="section-rule" />
      <Workflow />
      <hr className="section-rule" />
      <Experience />
      <hr className="section-rule" />
      <Projects />
      <hr className="section-rule" />
      <Research />
      <hr className="section-rule" />
      <Education />
      <hr className="section-rule" />
      <Photos />
      <hr className="section-rule" />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
