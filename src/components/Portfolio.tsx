import { useState, useMemo } from 'react';
import projects from '../data/projects.json';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  client?: string;
  tools: string[];
  featured: boolean;
}

function getEmbedUrl(url: string): string | null {
  const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
  const vimeoMatch = url.match(/(?:vimeo\.com\/)(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
  return null;
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ['All Projects', ...Array.from(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All Projects') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" style={{ padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 4vw, 3rem)',
            fontWeight: 'bold',
            color: '#111111',
            lineHeight: '1.2',
          }}>
            A selection of work built to make an impact.
          </h2>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '3rem',
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '500',
                border: activeFilter === cat ? 'none' : '1px solid #E8E8E8',
                backgroundColor: activeFilter === cat ? '#111111' : 'white',
                color: activeFilter === cat ? 'white' : '#6B6B6B',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project as Project)}
              style={{ cursor: 'pointer' }}
            >
              <div className="thumbnail-wrapper" style={{
                position: 'relative',
                borderRadius: '1rem',
                overflow: 'hidden',
                backgroundColor: '#E8E8E8',
                aspectRatio: '16 / 9',
                marginBottom: '1rem',
              }}>
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  transition: 'background-color 0.3s',
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}>
                    ▶
                  </div>
                </div>
              </div>

              <div>
                <span style={{
                  fontSize: '0.75rem',
                  color: '#635BFF',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  {project.category}
                </span>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#111111',
                  marginTop: '0.25rem',
                }}>
                  {project.title}
                </h3>
                {project.client && (
                  <p style={{ fontSize: '0.875rem', color: '#6B6B6B', marginTop: '0.25rem' }}>
                    {project.client}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: '100%', maxWidth: '64rem' }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
            <div style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              backgroundColor: 'black',
              aspectRatio: '16 / 9',
            }}>
              {getEmbedUrl(selectedProject.videoUrl) ? (
                <iframe
                  src={getEmbedUrl(selectedProject.videoUrl)!}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={selectedProject.title}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255, 255, 255, 0.6)',
                }}>
                  <a
                    href={selectedProject.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#635BFF', textDecoration: 'underline' }}
                  >
                    Watch on original platform →
                  </a>
                </div>
              )}
            </div>
            <div style={{ marginTop: '1rem', color: 'white' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{selectedProject.title}</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
