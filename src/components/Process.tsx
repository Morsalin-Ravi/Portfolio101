import { Search, PenTool, Sparkles, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    { number: '01', title: 'Understand', description: "Learn the client's goals, audience, and requirements.", icon: Search },
    { number: '02', title: 'Craft', description: 'Build an engaging story with strong pacing and structure.', icon: PenTool },
    { number: '03', title: 'Polish', description: 'Refine sound, captions, color, and motion graphics.', icon: Sparkles },
    { number: '04', title: 'Deliver', description: 'Prepare the final video for the required platform.', icon: Rocket },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#635BFF] uppercase">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mt-3">
            My Editing Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="p-6 rounded-2xl border border-[#E8E8E8] bg-[#F7F7F5] hover:border-[#111111]/20 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-[#111111]/20">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#635BFF] shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#111111] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
