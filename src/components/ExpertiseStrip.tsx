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
    <section className="py-12 border-y border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {services.map((service) => (
            <span
              key={service}
              className="text-sm sm:text-base text-[#6B6B6B] font-medium whitespace-nowrap"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
