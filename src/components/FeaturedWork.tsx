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

interface FeaturedWorkProps {
  onSelectProject?: (project: Project) => void;
}

export default function FeaturedWork({ onSelectProject }: FeaturedWorkProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const featuredProjects = projects.filter((p) => p.featured);
  if (featuredProjects.length === 0) return null;

  const project = featuredProjects[0] as Project;

  const handleWatch = () => {
    if (onSelectProject) {
      onSelectProject(project);
    } else {
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#635BFF] uppercase">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mt-3">
            Spotlight Project
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div
            onClick={handleWatch}
            className="group relative rounded-2xl overflow-hidden bg-[#E8E8E8] aspect-video cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white text-[#111111] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                <Play className="w-6 h-6 fill-current translate-x-0.5" />
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold text-[#635BFF] uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-2 mb-4">
              {project.title}
            </h3>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              {project.description}
            </p>

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
                <span className="font-semibold text-[#111111]">Client:</span> {project.client}
              </p>
            )}

            <button
              onClick={handleWatch}
              className="inline-flex items-center gap-2 bg-[#111111] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#333333] transition-colors cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Watch Project</span>
            </button>
          </div>
        </div>
      </div>

      {isPlaying && (
        <div
          onClick={() => setIsPlaying(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl relative"
          >
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 p-1"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="rounded-2xl overflow-hidden bg-black aspect-video shadow-2xl">
              {getEmbedUrl(project.videoUrl) ? (
                <iframe
                  src={getEmbedUrl(project.videoUrl)!}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={project.title}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/60">
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#635BFF] underline font-medium"
                  >
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
