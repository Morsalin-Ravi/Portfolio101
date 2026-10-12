export default function Process() {
  const steps = [
    { number: '01', title: 'Understand', description: "Learn the client's goals, audience, and requirements.", icon: '🔍' },
    { number: '02', title: 'Craft', description: 'Build an engaging story with strong pacing and structure.', icon: '✏️' },
    { number: '03', title: 'Polish', description: 'Refine sound, captions, color, and motion graphics.', icon: '✨' },
    { number: '04', title: 'Deliver', description: 'Prepare the final video for the required platform.', icon: '🚀' },
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
            Process
          </span>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
            fontWeight: 'bold',
            color: '#111111',
            marginTop: '0.75rem',
          }}>
            My Editing Process
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}>
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                padding: '1.5rem',
                borderRadius: '1rem',
                border: '1px solid #E8E8E8',
                backgroundColor: '#F7F7F5',
                transition: 'all 0.3s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#E8E8E8' }}>
                  {step.number}
                </span>
                <span style={{ fontSize: '1.25rem' }}>{step.icon}</span>
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111111', marginBottom: '0.5rem' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#6B6B6B', lineHeight: '1.625' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
