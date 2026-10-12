import { Instagram, Facebook, Linkedin, Youtube, Palette, ArrowUp } from 'lucide-react';
import siteConfig from '../data/siteConfig.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', url: siteConfig.social.instagram, icon: Instagram },
    { name: 'Facebook', url: siteConfig.social.facebook, icon: Facebook },
    { name: 'LinkedIn', url: siteConfig.social.linkedin, icon: Linkedin },
    { name: 'YouTube', url: siteConfig.social.youtube, icon: Youtube },
    { name: 'Behance', url: siteConfig.social.behance, icon: Palette },
  ];

  return (
    <footer className="bg-[#111111] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-2">
              {siteConfig.name}
            </h3>
            <p className="text-white/60 text-sm mb-4">
              {siteConfig.title}
            </p>
            <p className="text-white/40 text-sm italic">
              "{siteConfig.tagline}"
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-4">
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

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-4">
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
                    aria-label={social.name}
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
