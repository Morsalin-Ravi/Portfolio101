export default function Services() {
  const services = [
    { title: 'Short-Form Video Editing', description: 'Scroll-stopping reels and shorts optimized for Instagram, TikTok, and YouTube Shorts.', icon: '🎬' },
    { title: 'YouTube Video Editing', description: 'Full-length YouTube edits with engaging pacing, B-roll, captions, and retention-focused structure.', icon: '▶️' },
    { title: 'Video Ads & Commercials', description: 'High-converting ad videos that communicate your message clearly and drive action.', icon: '📢' },
    { title: 'Talking-Head Videos', description: 'Clean, professional edits for courses, podcasts, and educational content with dynamic cuts.', icon: '👤' },
    { title: 'Motion Graphics', description: 'Animated logos, lower thirds, transitions, and visual elements that elevate your content.', icon: '🎨' },
    { title: 'AI Video Production', description: 'Cutting-edge AI-assisted video creation combining generative tools with professional editing.', icon: '🤖' },
  ];

  return (
    <section style={{ padding: '5rem 1.5rem', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: '500',
            letterSpacing: '0.2em',
            color: '#635BFF',
            textTransform: 'uppercase',
          }}>
            Services
          </span>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
            fontWeight: 'bold',
            color: '#111111',
            marginTop: '0.75rem',
          }}>
            What I Can Do For You
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                padding: '1.5rem',
                borderRadius: '1rem',
                border: '1px solid #E8E8E8',
                transition: 'all 0.3s',
              }}
            >
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '0.75rem',
                backgroundColor: '#F7F7F5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                fontSize: '1.25rem',
              }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111111', marginBottom: '0.5rem' }}>
                {service.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#6B6B6B', lineHeight: '1.625' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
