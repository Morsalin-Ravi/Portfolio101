import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import siteConfig from '../data/siteConfig.json';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? 'top-3' : 'top-4'
      }`}
    >
      <div
        className={`glass rounded-full px-6 py-3 flex items-center gap-6 transition-all duration-300 ${
          isScrolled ? 'shadow-lg shadow-black/5' : 'shadow-md shadow-black/3'
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="font-bold text-sm tracking-wider text-[#111111] whitespace-nowrap"
        >
          MORSALIN RAVI
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              className="text-sm text-[#6B6B6B] hover:text-[#111111] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          className="hidden md:inline-flex items-center gap-1 bg-[#111111] text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-[#333333] transition-colors duration-200"
        >
          Let's Work Together ↗
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-1 text-[#111111]"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 glass rounded-2xl p-6 shadow-xl animate-slide-down">
          <div className="flex flex-col gap-4">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="text-base text-[#111111] hover:text-[#635BFF] transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="mt-2 inline-flex items-center justify-center gap-1 bg-[#111111] text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-[#333333] transition-colors"
            >
              Let's Work Together ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
