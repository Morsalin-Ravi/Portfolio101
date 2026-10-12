export default function ExpertiseStrip() {
  const services = [
    'Short-Form Content',
    'YouTube Editing',
    'Video Ads',
    'Talking-Head Videos',
    'Motion Graphics',
    'AI Video',
  ];

  return (
    <section style={{
      paddingTop: '3rem',
      paddingBottom: '3rem',
      borderTop: '1px solid #E8E8E8',
      borderBottom: '1px solid #E8E8E8',
    }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
        }}>
          {services.map((service) => (
            <span
              key={service}
              style={{
                fontSize: '1rem',
                color: '#6B6B6B',
                fontWeight: '500',
                whiteSpace: 'nowrap',
              }}
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
