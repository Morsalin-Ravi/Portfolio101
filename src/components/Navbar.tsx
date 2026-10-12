import { useState } from 'react';
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
    <nav style={{
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 50,
      width: '100%',
      maxWidth: '1200px',
      padding: '0 1rem',
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '9999px',
        padding: '0.75rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
      }}>
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          style={{
            fontWeight: 'bold',
            fontSize: '0.875rem',
            letterSpacing: '0.1em',
            color: '#111111',
            textDecoration: 'none',
          }}
        >
          MORSALIN RAVI
        </a>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
        }} className="hidden md:flex">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              style={{
                fontSize: '0.875rem',
                color: '#6B6B6B',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#111111'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#6B6B6B'}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            style={{
              backgroundColor: '#111111',
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: '500',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333333'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111111'}
          >
            Let's Work Together ↗
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#111111',
          }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div style={{
          marginTop: '0.5rem',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '1rem',
          padding: '1.5rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                style={{
                  fontSize: '1rem',
                  color: '#111111',
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              style={{
                marginTop: '0.5rem',
                backgroundColor: '#111111',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: '500',
                padding: '0.75rem 1.25rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              Let's Work Together ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
