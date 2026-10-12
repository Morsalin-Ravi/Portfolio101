import { Instagram, Facebook, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import siteConfig from '../data/siteConfig.json';

function BehanceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12.5h7c1.5 0 3-1 3-2.5s-1.5-2.5-3-2.5H1v5z" />
      <path d="M1 17.5h7c1.5 0 3-1 3-2.5s-1.5-2.5-3-2.5H1v5z" />
      <path d="M15 8.5h6c1.5 0 3 1 3 2.5s-1.5 2.5-3 2.5h-6v-5z" />
      <path d="M15 17.5h6c1.5 0 3-1 3-2.5" />
      <path d="M15 6v12" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', url: siteConfig.social.instagram, icon: Instagram },
    { name: 'Facebook', url: siteConfig.social.facebook, icon: Facebook },
    { name: 'LinkedIn', url: siteConfig.social.linkedin, icon: Linkedin },
    { name: 'YouTube', url: siteConfig.social.youtube, icon: Youtube },
    { name: 'Behance', url: siteConfig.social.behance, icon: BehanceIcon },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">{siteConfig.name}</h3>
            <p className="text-white/60 text-sm mb-4">{siteConfig.title}</p>
            <p className="text-white/40 text-sm italic">"{siteConfig.tagline}"</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
              Connect
            </h4>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-white/60 hover:text-white transition-colors block mb-4"
            >
              {siteConfig.email}
            </a>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={handleScrollToTop}
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
