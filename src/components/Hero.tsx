import { ArrowDown, Mail } from 'lucide-react';
import siteConfig from '../data/siteConfig.json';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="animate-fade-up">
          <span className="inline-block text-xs font-medium tracking-[0.2em] text-[#6B6B6B] uppercase mb-6">
            Video Editor · Motion Designer
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-[#111111] mb-6">
            I turn raw footage into stories people remember.
          </h1>

          <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-lg">
            I help creators, brands, and businesses transform ideas into engaging videos through thoughtful editing, cinematic visuals, and purposeful storytelling.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-[#111111] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#333333] transition-colors duration-200"
            >
              Explore My Work <ArrowDown size={16} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 border border-[#E8E8E8] text-[#111111] px-6 py-3 rounded-full text-sm font-medium hover:border-[#111111] transition-colors duration-200"
            >
              Let's Talk <Mail size={16} />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-[#6B6B6B]">Available for selected projects</span>
          </div>
        </div>

        {/* Right Content - Portrait */}
        <div className="relative flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            {/* Main Portrait */}
            <div className="w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#E8E8E8] to-[#F7F7F5] shadow-xl">
              <img
                src="https://image.qwenlm.ai/generated-images/f73abc33-531e-4275-9fb1-831695a2fe68/_result.png"
                alt="Morsalin Ravi - Video Editor & Motion Designer"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Floating Labels */}
            <div className="absolute -left-4 top-12 glass-card rounded-xl px-3 py-2 animate-float shadow-sm">
              <span className="text-xs font-medium text-[#111111]">🎬 Video Editing</span>
            </div>
            <div className="absolute -right-4 top-1/3 glass-card rounded-xl px-3 py-2 animate-float-delayed shadow-sm">
              <span className="text-xs font-medium text-[#111111]">✨ Motion Design</span>
            </div>
            <div className="absolute -left-2 bottom-16 glass-card rounded-xl px-3 py-2 animate-float-slow shadow-sm">
              <span className="text-xs font-medium text-[#111111]">🤖 AI Video</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
