export default function ExpertiseStrip() {
  const services = [
    'Short-Form Content',
    'YouTube Editing',
    'Video Ads',
    'Talking-Head Videos',
    'Motion Graphics',
    'AI Video',
  ];

  return (
    <section className="py-10 border-y border-[#E8E8E8] bg-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {services.map((service, idx) => (
            <div key={service} className="flex items-center gap-6 md:gap-12">
              <span className="text-sm md:text-base font-medium text-[#6B6B6B] whitespace-nowrap">
                {service}
              </span>
              {idx < services.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8E8E8] hidden sm:inline-block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
