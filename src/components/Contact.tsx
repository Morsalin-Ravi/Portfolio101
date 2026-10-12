import siteConfig from '../data/siteConfig.json';

export default function Contact() {
  const projectInquiryLink = `mailto:${siteConfig.email}?subject=Project Inquiry&body=Hi Morsalin,%0A%0AI'd like to discuss a video project with you.%0A%0AProject Type:%0ATimeline:%0ABudget Range:%0ADetails:%0A%0AThank you!`;

  return (
    <section id="contact" style={{ padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: '500',
          letterSpacing: '0.2em',
          color: '#635BFF',
          textTransform: 'uppercase',
        }}>
          Get In Touch
        </span>
        <h2 style={{
          fontSize: 'clamp(1.875rem, 5vw, 3rem)',
          fontWeight: 'bold',
          color: '#111111',
          marginTop: '0.75rem',
          marginBottom: '1.5rem',
          lineHeight: '1.1',
        }}>
          Have a video in mind?<br />Let's make it happen.
        </h2>
        <p style={{
          fontSize: '1.125rem',
          color: '#6B6B6B',
          marginBottom: '2.5rem',
          maxWidth: '32rem',
          margin: '0 auto 2.5rem',
        }}>
          Tell me about your project, your goals, and the story you want to tell.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          <a
            href={projectInquiryLink}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#111111',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: '500',
              textDecoration: 'none',
            }}
          >
            Start a Project ↗
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: '1px solid #E8E8E8',
              color: '#111111',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: '500',
              textDecoration: 'none',
            }}
          >
            ✉ Email Me
          </a>
        </div>

        <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#6B6B6B' }}>
          Or reach out directly at{' '}
          <a href={`mailto:${siteConfig.email}`} style={{ color: '#635BFF', textDecoration: 'underline' }}>
            {siteConfig.email}
          </a>
        </p>
      </div>
    </section>
  );
}
