import React from 'react';
import {
  ArrowUp,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Globe,
  Mail,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/socials';
import { useRouter, PageRoute } from '../router';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; path: PageRoute }[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects (170+)', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact', path: '/contact' },
  ];

  const services = [
    'WordPress Website Development',
    'Elementor & Redesign Services',
    'WooCommerce & Shopify Stores',
    'AI-Assisted Vibe Coding',
    'White-Label Agency Partnerships',
  ];

  return (
    <footer className="bg-[#050810] text-slate-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="text-left focus:outline-none cursor-pointer"
            >
              <Logo size="md" />
            </button>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Engineering high-converting, responsive websites for business owners and digital marketing agencies across WordPress, WooCommerce, and Shopify.
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
                  {link.name === 'LinkedIn' && <Linkedin className="w-3.5 h-3.5 text-blue-400" />}
                  {link.name === 'Instagram' && <Instagram className="w-3.5 h-3.5 text-pink-400" />}
                  {link.name === 'Facebook' && <Facebook className="w-3.5 h-3.5 text-blue-500" />}
                  {link.name === 'Netlify' && <span className="font-mono text-xs font-bold text-cyan-400">N</span>}
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

          {/* Navigation Pages (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Pages
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <button
                    type="button"
                    onClick={() => navigate(link.path)}
                    className="hover:text-orange-400 transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Services (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Core Deliverables
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {services.map((svc) => (
                <li key={svc} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <button
                    type="button"
                    onClick={() => navigate('/services')}
                    className="hover:text-orange-400 transition-colors text-left cursor-pointer"
                  >
                    {svc}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <div className="p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-[11px] text-orange-300">
                💼 Available for remote hiring by digital agencies and international teams.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} Humaiz Ur Rehman. All rights reserved. WordPress Developer & Team Lead.
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
