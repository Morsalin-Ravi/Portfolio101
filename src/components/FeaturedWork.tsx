import projects from '../data/projects.json';

export default function FeaturedWork() {
  const featuredProjects = projects.filter((p) => p.featured);
  if (featuredProjects.length === 0) return null;

  const project = featuredProjects[0];

  return (
    <section style={{ padding: '5rem 1.5rem', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: '500',
            letterSpacing: '0.2em',
            color: '#635BFF',
            textTransform: 'uppercase',
          }}>
            Featured Work
          </span>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
            fontWeight: 'bold',
            color: '#111111',
            marginTop: '0.75rem',
          }}>
            Spotlight Project
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          alignItems: 'center',
        }} className="lg:grid-cols-2">
          <div style={{
            borderRadius: '1rem',
            overflow: 'hidden',
            backgroundColor: '#E8E8E8',
            aspectRatio: '16 / 9',
          }}>
            <img
              src={project.thumbnail}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>

          <div>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: '500',
              color: '#635BFF',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              {project.category}
            </span>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
              fontWeight: 'bold',
              color: '#111111',
              marginTop: '0.5rem',
              marginBottom: '1rem',
            }}>
              {project.title}
            </h3>
            <p style={{
              color: '#6B6B6B',
              lineHeight: '1.625',
              marginBottom: '1.5rem',
            }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    backgroundColor: '#F7F7F5',
                    color: '#6B6B6B',
                    border: '1px solid #E8E8E8',
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>

            {project.client && (
              <p style={{ fontSize: '0.875rem', color: '#6B6B6B', marginBottom: '1.5rem' }}>
                <span style={{ fontWeight: '500', color: '#111111' }}>Client:</span> {project.client}
              </p>
            )}

            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
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
              Watch Project ▶
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
