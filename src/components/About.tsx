export default function About() {
  const tools = ['Adobe Premiere Pro', 'Adobe After Effects', 'CapCut', 'AI Video Tools'];

  return (
    <section id="about" style={{ padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
        }} className="lg:grid-cols-2">
          <div style={{ display: 'flex', justifyContent: 'center' }} className="lg:justify-start">
            <div style={{
              width: '20rem',
              height: '24rem',
              borderRadius: '2rem',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #111111, #333333)',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }} className="w-72 h-80 sm:w-80 sm:h-96">
              <span style={{ fontSize: '3.75rem', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.2)' }}>
                MR
              </span>
            </div>
          </div>

          <div>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: '500',
              letterSpacing: '0.2em',
              color: '#635BFF',
              textTransform: 'uppercase',
            }}>
              About Me
            </span>
            <h2 style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
              fontWeight: 'bold',
              color: '#111111',
              marginTop: '0.75rem',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
            }}>
              More than editing. It's about how the story feels.
            </h2>
            <p style={{
              color: '#6B6B6B',
              lineHeight: '1.625',
              marginBottom: '2rem',
            }}>
              I'm Morsalin Ravi, a video editor and motion designer passionate about turning ideas into compelling visual stories. From engaging short-form content to polished brand videos, I focus on pacing, sound, visual clarity, and storytelling that keeps audiences watching.
            </p>

            <div>
              <h3 style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#111111',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
              }}>
                Tools I Work With
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {tools.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      padding: '0.5rem 1rem',
                      borderRadius: '9999px',
                      backgroundColor: 'white',
                      color: '#111111',
                      border: '1px solid #E8E8E8',
                      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
