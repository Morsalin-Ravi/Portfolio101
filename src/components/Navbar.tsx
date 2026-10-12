import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import siteConfig from '../data/siteConfig.json';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-lg border border-white/50">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="font-bold text-sm tracking-wider text-[#111111] hover:opacity-80 transition-opacity"
        >
          MORSALIN RAVI
        </a>

        <div className="hidden md:flex items-center gap-6">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              className="text-sm text-[#6B6B6B] hover:text-[#111111] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="inline-flex items-center gap-1.5 bg-[#111111] text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-[#333333] transition-colors"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-1 text-[#111111] hover:opacity-75 transition-opacity"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mt-2 glass rounded-2xl p-6 shadow-xl border border-white/50 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="text-base font-medium text-[#111111] py-1 hover:text-[#635BFF] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="mt-2 inline-flex items-center justify-center gap-1.5 bg-[#111111] text-white text-sm font-medium py-3 px-5 rounded-full hover:bg-[#333333] transition-colors text-center"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
