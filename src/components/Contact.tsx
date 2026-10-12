import { ArrowUpRight, Mail } from 'lucide-react';
import siteConfig from '../data/siteConfig.json';

export default function Contact() {
  const projectInquiryLink = `mailto:${siteConfig.email}?subject=Project Inquiry&body=Hi Morsalin,%0A%0AI'd like to discuss a video project with you.%0A%0AProject Type:%0ATimeline:%0ABudget Range:%0ADetails:%0A%0AThank you!`;

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-semibold tracking-widest text-[#635BFF] uppercase">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#111111] mt-3 mb-6 leading-tight">
          Have a video in mind?<br />Let's make it happen.
        </h2>
        <p className="text-lg text-[#6B6B6B] mb-10 max-w-xl mx-auto leading-relaxed">
          Tell me about your project, your goals, and the story you want to tell.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href={projectInquiryLink}
            className="inline-flex items-center gap-2 bg-[#111111] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#333333] transition-colors"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 border border-[#E8E8E8] text-[#111111] bg-white px-8 py-4 rounded-full text-sm font-medium hover:border-[#111111] transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
          </a>
        </div>

        <p className="mt-8 text-sm text-[#6B6B6B]">
          Or reach out directly at{' '}
          <a href={`mailto:${siteConfig.email}`} className="text-[#635BFF] hover:underline font-medium">
            {siteConfig.email}
          </a>
        </p>
      </div>
    </section>
  );
}
