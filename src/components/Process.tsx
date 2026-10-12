import { Search, PenTool, Sparkles, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: "Learn the client's goals, audience, and requirements.",
    icon: Search,
  },
  {
    number: '02',
    title: 'Craft',
    description: 'Build an engaging story with strong pacing and structure.',
    icon: PenTool,
  },
  {
    number: '03',
    title: 'Polish',
    description: 'Refine sound, captions, color, and motion graphics.',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Prepare the final video for the required platform.',
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="py-20 sm:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-[0.2em] text-[#635BFF] uppercase">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mt-3">
            My Editing Process
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group p-6 rounded-2xl border border-[#E8E8E8] bg-[#F7F7F5] hover:bg-white hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-[#E8E8E8] group-hover:text-[#635BFF] transition-colors">
                    {step.number}
                  </span>
                  <Icon size={20} className="text-[#6B6B6B] group-hover:text-[#635BFF] transition-colors" />
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
