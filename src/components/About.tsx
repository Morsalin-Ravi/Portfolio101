import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const tools = ['Adobe Premiere Pro', 'Adobe After Effects', 'CapCut', 'AI Video Tools'];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-[#111111] to-[#333333] shadow-xl flex items-center justify-center">
              <span className="text-6xl font-bold text-white/20 select-none">
                MR
              </span>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold tracking-widest text-[#635BFF] uppercase">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mt-3 mb-6 leading-tight">
              More than editing. It's about how the story feels.
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              I'm Morsalin Ravi, a video editor and motion designer passionate about turning ideas into compelling visual stories. From engaging short-form content to polished brand videos, I focus on pacing, sound, visual clarity, and storytelling that keeps audiences watching.
            </p>

            <div>
              <h3 className="text-xs font-semibold text-[#111111] uppercase tracking-wider mb-4">
                Tools I Work With
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-white text-[#111111] border border-[#E8E8E8] shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#635BFF]" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
