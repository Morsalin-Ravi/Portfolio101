import { useState } from 'react';
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

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  client?: string;
  tools: string[];
  featured: boolean;
}

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111111] antialiased">
      <Navbar />
      <main>
        <Hero />
        <ExpertiseStrip />
        <FeaturedWork onSelectProject={(p) => setSelectedProject(p as Project)} />
        <Portfolio selectedProject={selectedProject} onSelectProject={setSelectedProject} />
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

export default App;
