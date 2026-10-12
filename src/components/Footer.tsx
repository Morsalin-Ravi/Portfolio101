import siteConfig from '../data/siteConfig.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', url: siteConfig.social.instagram, icon: '📷' },
    { name: 'Facebook', url: siteConfig.social.facebook, icon: '👤' },
    { name: 'LinkedIn', url: siteConfig.social.linkedin, icon: '💼' },
    { name: 'YouTube', url: siteConfig.social.youtube, icon: '▶️' },
    { name: 'Behance', url: siteConfig.social.behance, icon: '🎨' },
  ];

  return (
    <footer style={{ backgroundColor: '#111111', color: 'white', padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {siteConfig.name}
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', marginBottom: '1rem' }}>
              {siteConfig.title}
            </p>
            <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.875rem', fontStyle: 'italic' }}>
              "{siteConfig.tagline}"
            </p>
          </div>

          <div>
            <h4 style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '1rem',
            }}>
              Quick Links
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '1rem',
            }}>
              Connect
            </h4>
            <a
              href={`mailto:${siteConfig.email}`}
              style={{
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              {siteConfig.email}
            </a>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '50%',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    fontSize: '1rem',
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.4)' }}>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '0.875rem',
              color: 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
