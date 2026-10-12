import { useState } from 'react';
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
  const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
  const vimeoMatch = url.match(/(?:vimeo\.com\/)(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
  return null;
}

export default function FeaturedWork() {
  const featuredProjects = projects.filter((p) => p.featured) as Project[];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (featuredProjects.length === 0) return null;

  const project = featuredProjects[0]; // Show first featured project
  const embedUrl = getEmbedUrl(project.videoUrl);

  return (
    <section className="py-20 sm:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-medium tracking-[0.2em] text-[#635BFF] uppercase">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mt-3">
            Spotlight Project
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Media Preview */}
          <div
            className="thumbnail-wrapper relative rounded-2xl overflow-hidden bg-[#E8E8E8] aspect-video cursor-pointer group"
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setSelectedProject(project); }}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                <Play size={24} className="text-[#111111] ml-1" fill="#111111" />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <span className="text-xs font-medium text-[#635BFF] uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-2 mb-4">
              {project.title}
            </h3>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-[#F7F7F5] text-[#6B6B6B] border border-[#E8E8E8]"
                >
                  {tool}
                </span>
              ))}
            </div>

            {project.client && (
              <p className="text-sm text-[#6B6B6B] mb-6">
                <span className="font-medium text-[#111111]">Client:</span> {project.client}
              </p>
            )}

            <button
              onClick={() => setSelectedProject(project)}
              className="inline-flex items-center gap-2 bg-[#111111] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#333333] transition-colors duration-200"
            >
              Watch Project <Play size={14} fill="white" />
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="relative w-full max-w-4xl modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors p-2"
              aria-label="Close video"
            >
              <X size={24} />
            </button>
            <div className="rounded-2xl overflow-hidden bg-black aspect-video shadow-2xl">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={selectedProject.title}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/60">
                  <a href={selectedProject.videoUrl} target="_blank" rel="noopener noreferrer" className="text-[#635BFF] underline">
                    Watch on original platform →
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
