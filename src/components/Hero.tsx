import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Layers,
  Sparkles,
  CheckCircle2,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  ExternalLink,
  ShieldCheck,
  Zap,
  Code
} from 'lucide-react';
import { PERSONAL_INFO, ANIMATED_ROLES, SOCIAL_LINKS } from '../data/socials';
import { useRouter } from '../router';
import {
  WordPressIcon,
  ShopifyIcon,
  ElementorIcon,
  WooCommerceIcon,
  PhpIcon,
  AiStudioIcon
} from './BrandIcons';

export const Hero: React.FC = () => {
  const { navigate } = useRouter();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ANIMATED_ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#070a12]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-orange-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Dual Audience Positioning */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#10162a]/95 border border-orange-500/30 text-xs text-slate-200 shadow-xl shadow-black/40 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold tracking-wide">
                Available for Freelance Projects & Remote Hiring
              </span>
            </div>

            {/* Greeting */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono tracking-widest text-orange-400 font-bold uppercase">
              <span className="w-8 h-[2px] bg-gradient-to-r from-orange-500 to-amber-500 inline-block" />
              <span>SENIOR WEB DEVELOPER & TEAM LEAD</span>
            </div>

            {/* Main Name & Animated Role */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                Humaiz Ur Rehman
              </h1>
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start overflow-hidden">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient-orange transition-all duration-300">
                  {ANIMATED_ROLES[roleIndex]}
                </span>
                <span className="inline-block w-[3px] h-6 bg-orange-500 ml-2 animate-pulse" />
              </div>
            </div>

            {/* Value Proposition tailored for both Clients and HR */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I build high-converting, responsive websites and e-commerce stores for business owners and digital marketing agencies. With deep mastery in WordPress, Elementor, WooCommerce, Shopify, and AI-accelerated workflows, I transform design references into rock-solid production platforms.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => navigate('/projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore 170+ Projects</span>
                <Layers className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-[#10162a] hover:bg-[#151c36] border border-orange-500/30 hover:border-orange-500/60 shadow-lg shadow-black/40 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Hire Me / Let's Discuss</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </button>
            </div>

            {/* Social & Verification Strip */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400 mr-1">Verified:</span>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  title={`${link.name} — ${link.badge}`}
                  className="w-9 h-9 rounded-xl bg-[#10162a] border border-white/10 hover:border-orange-500/60 text-slate-300 hover:text-orange-400 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-md hover:shadow-orange-500/20"
                >
                  {link.name === 'GitHub' && <Github className="w-4 h-4" />}
                  {link.name === 'LinkedIn' && <Linkedin className="w-4 h-4 text-blue-400" />}
                  {link.name === 'Instagram' && <Instagram className="w-4 h-4 text-pink-400" />}
                  {link.name === 'Facebook' && <Facebook className="w-4 h-4 text-blue-500" />}
                  {link.name === 'Netlify' && <span className="font-mono text-xs font-bold text-cyan-400">N</span>}
                </a>
              ))}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Direct Email"
                title={`Email: ${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-[#10162a] border border-white/10 hover:border-orange-500/60 text-slate-300 hover:text-orange-400 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Portrait with Official Authentic SVG Logos */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-[300px] h-[340px] sm:w-[380px] sm:h-[430px] md:w-[420px] md:h-[470px]">
              {/* Outer circular glowing rings */}
              <div className="absolute inset-0 rounded-full border border-orange-500/20 scale-110 pointer-events-none animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border border-dashed border-amber-500/25 scale-125 pointer-events-none" />
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-orange-500/25 via-amber-500/10 to-transparent blur-2xl" />

              {/* Portrait Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-orange-500/40 bg-[#0d1222] shadow-[0_0_50px_rgba(249,115,22,0.25)] group">
                <img
                  src={PERSONAL_INFO.portraitUrl}
                  alt="Humaiz Ur Rehman - WordPress Developer & Team Lead"
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-transparent to-transparent opacity-60" />

                {/* Bottom nameplate pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0a0f1d]/95 backdrop-blur-md border border-orange-500/30 rounded-2xl p-3 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-xs font-bold leading-tight">Humaiz Ur Rehman</p>
                      <p className="text-[10px] text-orange-400 font-mono font-medium">
                        WordPress & E-Commerce Lead
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                      <span>Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* REAL AUTHENTIC SVG BADGES (No React.js) */}
              {/* 1. Official WordPress Badge */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-6 px-3.5 py-2 rounded-2xl bg-[#0f1424]/95 border border-orange-500/40 text-white shadow-2xl shadow-black/80 flex items-center gap-2.5 backdrop-blur-md animate-[bounce_5s_ease-in-out_infinite]">
                <div className="w-7 h-7 rounded-xl bg-[#21759b]/25 flex items-center justify-center text-[#21759b] p-1 shadow-inner">
                  <WordPressIcon className="w-full h-full text-[#3858e9]" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-slate-100">WordPress</span>
                  <span className="block text-[9px] text-slate-400 font-mono">Core & Custom</span>
                </div>
              </div>

              {/* 2. Official Shopify & WooCommerce Badge */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-6 px-3.5 py-2 rounded-2xl bg-[#0f1424]/95 border border-amber-500/40 text-white shadow-2xl shadow-black/80 flex items-center gap-2.5 backdrop-blur-md animate-[bounce_6s_ease-in-out_infinite_1s]">
                <div className="w-7 h-7 rounded-xl bg-emerald-500/20 flex items-center justify-center p-1 shadow-inner">
                  <ShopifyIcon className="w-full h-full" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-slate-100">Shopify & Woo</span>
                  <span className="block text-[9px] text-amber-400 font-mono">Store Architecture</span>
                </div>
              </div>

              {/* 3. Official Elementor Pro Badge */}
              <div className="absolute top-1/2 -left-6 sm:-left-10 -translate-y-1/2 px-3.5 py-2 rounded-2xl bg-[#0f1424]/95 border border-rose-500/40 text-white shadow-2xl shadow-black/80 flex items-center gap-2.5 backdrop-blur-md animate-[bounce_7s_ease-in-out_infinite_2s]">
                <div className="w-7 h-7 rounded-xl bg-rose-500/20 flex items-center justify-center p-0.5 shadow-inner">
                  <ElementorIcon className="w-full h-full" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-slate-100">Elementor Pro</span>
                  <span className="block text-[9px] text-rose-400 font-mono">Pixel-Perfect UI</span>
                </div>
              </div>

              {/* 4. AI-Assisted Vibe Coding (Replacing React) */}
              <div className="absolute bottom-16 -right-5 sm:-right-8 px-3.5 py-2 rounded-2xl bg-[#0f1424]/95 border border-orange-500/40 text-white shadow-2xl shadow-black/80 flex items-center gap-2.5 backdrop-blur-md animate-[bounce_6.5s_ease-in-out_infinite_1.5s]">
                <div className="w-7 h-7 rounded-xl bg-orange-500/20 flex items-center justify-center p-1 text-orange-400 shadow-inner">
                  <AiStudioIcon className="w-full h-full" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-slate-100">AI-Assisted</span>
                  <span className="block text-[9px] text-orange-400 font-mono">Vibe Coding & Speed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High-Impact Proof & Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="p-5 rounded-2xl bg-[#0c101d] border border-white/5 hover:border-orange-500/30 transition-colors">
            <span className="text-3xl sm:text-4xl font-black text-gradient-orange block font-mono">170+</span>
            <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1 block">
              Production Websites
            </span>
            <span className="text-[10px] text-slate-400 font-mono block mt-0.5">Verified Client Archive</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0c101d] border border-white/5 hover:border-orange-500/30 transition-colors">
            <span className="text-3xl sm:text-4xl font-black text-gradient-gold block font-mono">3+</span>
            <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1 block">
              Years Agency Track Record
            </span>
            <span className="text-[10px] text-slate-400 font-mono block mt-0.5">Team Lead Experience</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0c101d] border border-white/5 hover:border-orange-500/30 transition-colors">
            <span className="text-3xl sm:text-4xl font-black text-white block font-mono">10+</span>
            <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1 block">
              Global Industries
            </span>
            <span className="text-[10px] text-slate-400 font-mono block mt-0.5">Healthcare, HVAC, Solar, E-Com</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#0c101d] border border-white/5 hover:border-orange-500/30 transition-colors">
            <span className="text-3xl sm:text-4xl font-black text-emerald-400 block font-mono">100%</span>
            <span className="text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1 block">
              On-Time Delivery
            </span>
            <span className="text-[10px] text-slate-400 font-mono block mt-0.5">Agency White-Label Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
};
