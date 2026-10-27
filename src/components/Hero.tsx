import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Briefcase,
  Layers,
  Sparkles,
  ShoppingBag,
  Cpu,
  Globe,
  Code2,
  CheckCircle2,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, ANIMATED_ROLES, SOCIAL_LINKS } from '../data/socials';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ANIMATED_ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#070a12]"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Branding */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#11162a]/90 border border-orange-500/30 text-xs text-slate-200 shadow-lg shadow-black/40 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-medium tracking-wide">
                Available for Freelance Projects & Agency Partnerships
              </span>
            </div>

            {/* Small Greeting */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono tracking-widest text-orange-400 font-semibold uppercase">
              <span className="w-6 h-[2px] bg-orange-500 inline-block" />
              <span>HELLO, I'M</span>
            </div>

            {/* Main Name & Dynamic Role */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Humaiz Ur Rehman
              </h1>
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start overflow-hidden">
                <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-gradient-orange transition-all duration-300">
                  {ANIMATED_ROLES[roleIndex]}
                </span>
                <span className="inline-block w-[3px] h-6 bg-orange-500 ml-2 animate-pulse" />
              </div>
            </div>

            {/* Hero Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              I build professional, responsive websites for businesses and digital marketing agencies. With experience in WordPress, Elementor, WooCommerce, Shopify and AI-assisted development, I turn ideas and design references into functional digital experiences.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => scrollTo('#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>View My Work</span>
                <Layers className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-[#10162a] hover:bg-[#151c36] border border-orange-500/30 hover:border-orange-500/60 shadow-lg shadow-black/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Let's Discuss a Project</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </button>
            </div>

            {/* Social Icons row */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400 mr-1">Connect:</span>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  title={`${link.name} (${link.badge})`}
                  className="w-9 h-9 rounded-full bg-[#111628] border border-white/10 hover:border-orange-500/60 text-slate-300 hover:text-orange-400 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-md hover:shadow-orange-500/20"
                >
                  {link.name === 'GitHub' && <Github className="w-4 h-4" />}
                  {link.name === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                  {link.name === 'Instagram' && <Instagram className="w-4 h-4" />}
                  {link.name === 'Facebook' && <Facebook className="w-4 h-4" />}
                  {link.name === 'Netlify' && <Globe className="w-4 h-4" />}
                </a>
              ))}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Direct Email"
                title={`Email: ${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-full bg-[#111628] border border-white/10 hover:border-orange-500/60 text-slate-300 hover:text-orange-400 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Portrait with Floating Technology Badges and Glowing Aura */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-[300px] h-[340px] sm:w-[380px] sm:h-[430px] md:w-[420px] md:h-[470px]">
              {/* Outer circular glowing rings */}
              <div className="absolute inset-0 rounded-full border border-orange-500/20 scale-110 pointer-events-none animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border border-dashed border-amber-500/25 scale-125 pointer-events-none" />
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-orange-500/30 via-amber-500/10 to-transparent blur-2xl" />

              {/* Portrait Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-orange-500/40 bg-[#0d1222] shadow-[0_0_50px_rgba(249,115,22,0.25)] group">
                <img
                  src={PERSONAL_INFO.portraitUrl}
                  alt="Humaiz Ur Rehman - WordPress Developer & Team Lead"
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                {/* Subtle gradient vignette over portrait base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-transparent to-transparent opacity-60" />

                {/* Bottom nameplate pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0a0f1d]/90 backdrop-blur-md border border-orange-500/30 rounded-xl p-3 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-xs font-bold leading-tight">Humaiz Ur Rehman</p>
                      <p className="text-[10px] text-orange-400 font-medium">Team Lead & AI-Assisted Dev</p>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Online</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges (Design Reference Style) */}
              {/* Top Left: WordPress */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-6 px-3.5 py-2 rounded-xl bg-[#0f1424]/95 border border-orange-500/40 text-white shadow-xl shadow-black/60 flex items-center gap-2 backdrop-blur-md animate-[bounce_5s_ease-in-out_infinite]">
                <div className="w-6 h-6 rounded-lg bg-[#21759b]/20 flex items-center justify-center text-[#21759b] font-bold text-xs">
                  W
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-slate-100">WordPress</span>
                  <span className="block text-[9px] text-slate-400 font-mono">Core & Custom</span>
                </div>
              </div>

              {/* Top Right: Elementor & WooCommerce */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-[#0f1424]/95 border border-amber-500/40 text-white shadow-xl shadow-black/60 flex items-center gap-2 backdrop-blur-md animate-[bounce_6s_ease-in-out_infinite_1s]">
                <div className="w-6 h-6 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">
                  <ShoppingBag className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-slate-100">Woo & Shopify</span>
                  <span className="block text-[9px] text-orange-400 font-mono">E-Commerce</span>
                </div>
              </div>

              {/* Middle Left: AI Studio & Vibe Coding */}
              <div className="absolute top-1/2 -left-6 sm:-left-10 -translate-y-1/2 px-3 py-2 rounded-xl bg-[#0f1424]/95 border border-orange-500/40 text-white shadow-xl shadow-black/60 flex items-center gap-2 backdrop-blur-md animate-[bounce_7s_ease-in-out_infinite_2s]">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-slate-100">AI-Assisted</span>
                  <span className="block text-[9px] text-amber-400 font-mono">Vibe Coding</span>
                </div>
              </div>

              {/* Bottom Right: Vite & React */}
              <div className="absolute bottom-16 -right-5 sm:-right-8 px-3.5 py-2 rounded-xl bg-[#0f1424]/95 border border-cyan-500/40 text-white shadow-xl shadow-black/60 flex items-center gap-2 backdrop-blur-md animate-[bounce_6.5s_ease-in-out_infinite_1.5s]">
                <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Code2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-slate-100">React & Vite</span>
                  <span className="block text-[9px] text-cyan-400 font-mono">Modern Frontend</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights / Metrics Bar matching reference */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-[#0c101d] border border-white/5 hover:border-orange-500/30 transition-colors">
            <span className="text-3xl sm:text-4xl font-extrabold text-gradient-orange block font-mono">170+</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1 block">
              Projects Contributed
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c101d] border border-white/5 hover:border-orange-500/30 transition-colors">
            <span className="text-3xl sm:text-4xl font-extrabold text-gradient-gold block font-mono">3+</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1 block">
              Years Experience
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c101d] border border-white/5 hover:border-orange-500/30 transition-colors">
            <span className="text-3xl sm:text-4xl font-extrabold text-white block font-mono">10+</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1 block">
              Industries Served
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c101d] border border-white/5 hover:border-orange-500/30 transition-colors">
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 block font-mono">100%</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1 block">
              Responsive & SEO First
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
