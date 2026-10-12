import { useState, useMemo, useEffect } from 'react';
import { Play, X, Filter } from 'lucide-react';
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

interface PortfolioProps {
  selectedProject?: Project | null;
  onSelectProject?: (project: Project | null) => void;
}

function getEmbedUrl(url: string): string | null {
  const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
  const vimeoMatch = url.match(/(?:vimeo\.com\/)(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
  return null;
}

export default function Portfolio({ selectedProject: externalSelectedProject, onSelectProject: externalOnSelectProject }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [internalSelectedProject, setInternalSelectedProject] = useState<Project | null>(null);

  const selectedProject = externalSelectedProject !== undefined ? externalSelectedProject : internalSelectedProject;

  const setSelectedProject = (proj: Project | null) => {
    if (externalOnSelectProject) {
      externalOnSelectProject(proj);
    } else {
      setInternalSelectedProject(proj);
    }
  };

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ['All Projects', ...Array.from(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All Projects') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  // Lock body scroll and handle Escape key when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedProject(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedProject]);

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#111111] leading-tight">
            A selection of work built to make an impact.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#111111] text-white shadow-sm'
                  : 'bg-white text-[#6B6B6B] border border-[#E8E8E8] hover:border-[#111111] hover:text-[#111111]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project as Project)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#E8E8E8] p-3 hover:border-[#111111]/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative rounded-xl overflow-hidden bg-[#E8E8E8] aspect-video mb-3">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#111111] flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-90 transition-all duration-300">
                    <Play className="w-5 h-5 fill-current translate-x-0.5" />
                  </div>
                </div>
              </div>

              <div className="px-1 pb-1">
                <span className="text-xs font-semibold text-[#635BFF] uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-base font-semibold text-[#111111] mt-1 group-hover:text-[#635BFF] transition-colors">
                  {project.title}
                </h3>
                {project.client && (
                  <p className="text-xs text-[#6B6B6B] mt-1">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl relative"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 p-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="rounded-2xl overflow-hidden bg-black aspect-video shadow-2xl">
              {getEmbedUrl(selectedProject.videoUrl) ? (
                <iframe
                  src={getEmbedUrl(selectedProject.videoUrl)!}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={selectedProject.title}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/60">
                  <a
                    href={selectedProject.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#635BFF] underline font-medium"
                  >
                    Watch on original platform →
                  </a>
                </div>
              )}
            </div>
            <div className="mt-4 text-white">
              <h3 className="text-xl font-semibold">{selectedProject.title}</h3>
              <p className="text-white/70 text-sm mt-1">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
