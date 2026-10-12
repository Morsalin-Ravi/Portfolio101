import { useState, useEffect, useMemo } from 'react';
import { Play, X } from 'lucide-react';
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
  // YouTube
  const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (ytMatch) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
  }
  // Vimeo
  const vimeoMatch = url.match(/(?:vimeo\.com\/)(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
  }
  return null;
}

function VideoModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const embedUrl = getEmbedUrl(project.videoUrl);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Video: ${project.title}`}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-4xl modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors p-2"
          aria-label="Close video modal"
        >
          <X size={24} />
        </button>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden bg-black aspect-video shadow-2xl">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={project.title}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/60">
              <p className="text-center px-4">
                Video URL not supported for embedding.<br />
                <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="text-[#635BFF] underline">
                  Watch on original platform →
                </a>
              </p>
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="mt-4 text-white">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-white/60 text-sm mt-1">{project.description}</p>
          {project.client && (
            <p className="text-white/40 text-xs mt-2">Client: {project.client}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Dynamically generate categories from projects
  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ['All Projects', ...Array.from(cats)];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All Projects') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="py-20 sm:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight">
            A selection of work<br className="hidden sm:block" /> built to make an impact.
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-[#111111] text-white'
                  : 'bg-white text-[#6B6B6B] border border-[#E8E8E8] hover:border-[#111111] hover:text-[#111111]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project as Project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedProject(project as Project); }}
              aria-label={`View project: ${project.title}`}
            >
              {/* Thumbnail */}
              <div className="thumbnail-wrapper relative rounded-2xl overflow-hidden bg-[#E8E8E8] aspect-video mb-4">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" fill="%23E8E8E8"><rect width="800" height="450"/><text x="400" y="225" text-anchor="middle" fill="%236B6B6B" font-size="18">Thumbnail unavailable</text></svg>';
                  }}
                />
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                    <Play size={18} className="text-[#111111] ml-0.5" fill="#111111" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <span className="text-xs text-[#635BFF] font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-[#111111] mt-1 group-hover:text-[#635BFF] transition-colors">
                  {project.title}
                </h3>
                {project.client && (
                  <p className="text-sm text-[#6B6B6B] mt-1">{project.client}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-[#6B6B6B]">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {selectedProject && (
        <VideoModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
