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

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F7F7F5' }}>
      <Navbar />
      <main>
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

export default App;
