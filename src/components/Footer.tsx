import React from 'react';
import {
  ArrowUp,
  Heart,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Globe,
  Mail,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/socials';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'AI & Vibe', href: '#ai-workflows' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'WordPress Development',
    'Elementor & Redesign',
    'WooCommerce & Shopify',
    'AI-Assisted Vibe Coding',
    'Agency White-Label Partner',
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050810] text-slate-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/25">
                <span className="font-mono text-sm font-extrabold">HU</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-lg font-bold tracking-tight">
                  HUMAIZ<span className="text-orange-500">.</span>DEV
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-orange-400">
                  WordPress & AI Specialist
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Building professional, responsive, and SEO-engineered websites for businesses and digital marketing agencies across WordPress, Shopify, and AI-assisted workflows.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  title={link.name}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/40 text-slate-400 hover:text-orange-400 flex items-center justify-center transition-colors"
                >
                  {link.name === 'GitHub' && <Github className="w-3.5 h-3.5" />}
                  {link.name === 'LinkedIn' && <Linkedin className="w-3.5 h-3.5" />}
                  {link.name === 'Instagram' && <Instagram className="w-3.5 h-3.5" />}
                  {link.name === 'Facebook' && <Facebook className="w-3.5 h-3.5" />}
                  {link.name === 'Netlify' && <Globe className="w-3.5 h-3.5" />}
                </a>
              ))}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Direct Email"
                title={`Email: ${PERSONAL_INFO.email}`}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/40 text-slate-400 hover:text-orange-400 flex items-center justify-center transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Services (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {services.map((svc) => (
                <li key={svc} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#services');
                    }}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {svc}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[11px] text-orange-300">
                🚀 Ready to build? Available for agency white-label partnerships & freelance contracts.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} Humaiz Ur Rehman. All rights reserved. Built with React & Vite, deploy-ready for Netlify.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/40 text-slate-300 hover:text-orange-400 transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
