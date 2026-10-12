import siteConfig from '../data/siteConfig.json';

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '6rem',
      paddingBottom: '4rem',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
    }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '3rem',
        alignItems: 'center',
      }} className="lg:grid-cols-2">
        <div>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: '500',
            letterSpacing: '0.2em',
            color: '#6B6B6B',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            Video Editor · Motion Designer
          </span>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.75rem)',
            fontWeight: 'bold',
            lineHeight: '1.1',
            color: '#111111',
            marginBottom: '1.5rem',
          }}>
            I turn raw footage into stories people remember.
          </h1>

          <p style={{
            fontSize: '1.125rem',
            color: '#6B6B6B',
            lineHeight: '1.625',
            marginBottom: '2rem',
            maxWidth: '32rem',
          }}>
            I help creators, brands, and businesses transform ideas into engaging videos through thoughtful editing, cinematic visuals, and purposeful storytelling.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#111111',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '500',
                textDecoration: 'none',
              }}
            >
              Explore My Work ↓
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '1px solid #E8E8E8',
                color: '#111111',
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '500',
                textDecoration: 'none',
              }}
            >
              Let's Talk ✉
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              width: '0.5rem',
              height: '0.5rem',
              backgroundColor: '#22c55e',
              borderRadius: '50%',
            }}></span>
            <span style={{ fontSize: '0.875rem', color: '#6B6B6B' }}>
              Available for selected projects
            </span>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }} className="lg:justify-end">
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '24rem',
              height: '28rem',
              borderRadius: '2rem',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #111111, #333333)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }} className="w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem]">
              <span style={{ fontSize: '3.75rem', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.2)' }}>
                MR
              </span>
            </div>

            <div className="glass-card animate-float" style={{
              position: 'absolute',
              left: '-1rem',
              top: '3rem',
              borderRadius: '0.75rem',
              padding: '0.5rem 0.75rem',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '500', color: '#111111' }}>
                🎬 Video Editing
              </span>
            </div>
            <div className="glass-card animate-float-delayed" style={{
              position: 'absolute',
              right: '-1rem',
              top: '33%',
              borderRadius: '0.75rem',
              padding: '0.5rem 0.75rem',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '500', color: '#111111' }}>
                ✨ Motion Design
              </span>
            </div>
            <div className="glass-card animate-float-slow" style={{
              position: 'absolute',
              left: '-0.5rem',
              bottom: '4rem',
              borderRadius: '0.75rem',
              padding: '0.5rem 0.75rem',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '500', color: '#111111' }}>
                🤖 AI Video
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
