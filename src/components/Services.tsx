import { Film, Youtube, Megaphone, UserCheck, Palette, Bot } from 'lucide-react';

export default function Services() {
  const services = [
    { title: 'Short-Form Video Editing', description: 'Scroll-stopping reels and shorts optimized for Instagram, TikTok, and YouTube Shorts.', icon: Film },
    { title: 'YouTube Video Editing', description: 'Full-length YouTube edits with engaging pacing, B-roll, captions, and retention-focused structure.', icon: Youtube },
    { title: 'Video Ads & Commercials', description: 'High-converting ad videos that communicate your message clearly and drive action.', icon: Megaphone },
    { title: 'Talking-Head Videos', description: 'Clean, professional edits for courses, podcasts, and educational content with dynamic cuts.', icon: UserCheck },
    { title: 'Motion Graphics', description: 'Animated logos, lower thirds, transitions, and visual elements that elevate your content.', icon: Palette },
    { title: 'AI Video Production', description: 'Cutting-edge AI-assisted video creation combining generative tools with professional editing.', icon: Bot },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#635BFF] uppercase">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mt-3">
            What I Can Do For You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="p-6 rounded-2xl border border-[#E8E8E8] hover:border-[#111111]/20 hover:shadow-lg transition-all duration-300 bg-white group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F7F7F5] group-hover:bg-[#635BFF]/10 text-[#111111] group-hover:text-[#635BFF] flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-[#111111] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
