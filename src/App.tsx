import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExpertiseStrip from './components/ExpertiseStrip';
import FeaturedWork from './components/FeaturedWork';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Process from './components/Process';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const sections = mainRef.current?.querySelectorAll('section:not(#home)');
    sections?.forEach((section) => {
      section.classList.add('section-reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F7F5]">
      <Navbar />
      <main ref={mainRef}>
        <Hero />
        <ExpertiseStrip />
        <FeaturedWork />
        <Portfolio />
        <About />
        <Process />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
