import { ArrowDown, Mail, Film, Sparkles, Bot } from 'lucide-react';
import siteConfig from '../data/siteConfig.json';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest text-[#6B6B6B] uppercase mb-6">
            Video Editor · Motion Designer
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#111111] mb-6">
            I turn raw footage into stories people remember.
          </h1>

          <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-xl">
            I help creators, brands, and businesses transform ideas into engaging videos through thoughtful editing, cinematic visuals, and purposeful storytelling.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-[#111111] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#333333] transition-colors"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 border border-[#E8E8E8] text-[#111111] bg-white px-6 py-3 rounded-full text-sm font-medium hover:border-[#111111] transition-colors"
            >
              <span>Let's Talk</span>
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm text-[#6B6B6B]">
              Available for selected projects
            </span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative p-4">
            <div className="w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden bg-gradient-to-br from-[#111111] to-[#333333] shadow-2xl flex items-center justify-center">
              <span className="text-6xl font-bold text-white/20 select-none">
                MR
              </span>
            </div>

            <div className="glass-card animate-float absolute left-0 top-10 rounded-xl px-3.5 py-2 shadow-md flex items-center gap-2 border border-white/60">
              <Film className="w-4 h-4 text-[#635BFF]" />
              <span className="text-xs font-semibold text-[#111111]">
                Video Editing
              </span>
            </div>

            <div className="glass-card animate-float-delayed absolute right-0 top-1/3 rounded-xl px-3.5 py-2 shadow-md flex items-center gap-2 border border-white/60">
              <Sparkles className="w-4 h-4 text-[#635BFF]" />
              <span className="text-xs font-semibold text-[#111111]">
                Motion Design
              </span>
            </div>

            <div className="glass-card animate-float-slow absolute left-2 bottom-12 rounded-xl px-3.5 py-2 shadow-md flex items-center gap-2 border border-white/60">
              <Bot className="w-4 h-4 text-[#635BFF]" />
              <span className="text-xs font-semibold text-[#111111]">
                AI Video
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
