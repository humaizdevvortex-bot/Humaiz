import React, { useState } from 'react';
import {
  ShieldCheck,
  Zap,
  Users2,
  CheckCircle2,
  Download,
  Building2,
  Briefcase,
  Layers,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/socials';
import { useRouter } from '../router';
import {
  WordPressIcon,
  ShopifyIcon,
  WooCommerceIcon,
  ElementorIcon,
  PhpIcon
} from './BrandIcons';

export const About: React.FC = () => {
  const { navigate } = useRouter();
  const [showCvModal, setShowCvModal] = useState(false);

  const clientBenefits = [
    {
      title: 'High-Converting Business Websites',
      desc: 'Engineered for real lead generation, sales, and consultation bookings. Not just pretty visuals, but functional conversion funnels.',
      icon: TrendingUp,
    },
    {
      title: 'Pixel-Perfect Design Translation',
      desc: 'Whether you supply a Figma file, design reference, or competitor benchmark, I translate it with 100% responsive fidelity across mobile, tablet, and desktop.',
      icon: Layers,
    },
    {
      title: 'Speed & Core Web Vitals Optimization',
      desc: 'Pruned assets, clean code hierarchy, lightweight caching, and database tuning to ensure fast loading speeds and optimal Google search rankings.',
      icon: Zap,
    },
    {
      title: 'Confidential White-Label Agency Partner',
      desc: 'Trusted by digital marketing and SEO agencies to deliver client websites under strict NDA, meeting hard deadlines without micromanagement.',
      icon: ShieldCheck,
    },
  ];

  const hrValueProps = [
    {
      title: 'Battle-Tested Remote Work Discipline',
      desc: 'Experienced working with international teams across US, UK, and European timezones with proactive updates, clear documentation, and accountability.',
      icon: Clock,
    },
    {
      title: 'Team Leadership & Developer Mentorship',
      desc: 'Proven track record leading development tasks, conducting code reviews, and successfully training junior developers and interns.',
      icon: Users2,
    },
    {
      title: '170+ Production Projects Delivered',
      desc: 'A verified portfolio spanning healthcare clinics, multi-location HVAC networks, solar contractors, luxury e-commerce brands, and B2B enterprises.',
      icon: Award,
    },
    {
      title: 'Technical SEO & Full-Stack CMS Fluency',
      desc: 'Deep knowledge of WordPress Core, PHP hooks, WooCommerce architecture, Shopify Liquid, schema markup, and semantic accessibility.',
      icon: Briefcase,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#080c18] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-mono uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            ABOUT HUMAIZ UR REHMAN
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl">
            Engineering High-Impact Websites for Growing Businesses & Agencies
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Delivering senior-caliber WordPress, WooCommerce, and Shopify engineering with uncompromising focus on performance, client conversions, and team reliability.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
        </div>

        {/* Narrative Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0d1428] via-[#101732] to-[#0c1122] border border-orange-500/30 shadow-2xl mb-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider block">
                Executive Overview
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Senior WordPress Developer & Technical Lead Delivering Real Commercial Results
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a web developer and team leader specializing in high-performance WordPress systems, custom Elementor experiences, WooCommerce stores, and Shopify themes. Over the past several years, I have architected and contributed to <strong className="text-white font-semibold">over 170 live client websites</strong> across North America, Europe, Australia, and Asia.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether partnering directly with business owners to launch revenue-generating storefronts or collaborating with digital marketing agencies as a confidential white-label development lead, my focus is singular: <strong className="text-orange-400 font-semibold">clean architecture, lightning-fast loading speeds, robust technical SEO, and reliable delivery.</strong>
              </p>

              {/* Verified Stacks Strip */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono text-slate-400 font-medium">Core Production Tech:</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white">
                  <WordPressIcon className="w-4 h-4 text-[#3858e9]" />
                  WordPress Core
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white">
                  <ElementorIcon className="w-4 h-4" />
                  Elementor Pro
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white">
                  <ShopifyIcon className="w-4 h-4" />
                  Shopify
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white">
                  <WooCommerceIcon className="w-4 h-4" />
                  WooCommerce
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white">
                  <PhpIcon className="w-4 h-4 text-[#777BB4]" />
                  PHP / MySQL
                </span>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#090d19] border border-orange-500/25 space-y-4 text-center">
              <span className="text-xs font-mono text-emerald-400 font-bold block uppercase tracking-wider">
                ● Current Availability
              </span>
              <p className="text-white text-base font-bold">
                Open for Agency Contracts & Remote Roles
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full-time remote positions (US/UK timezones) or high-priority client project contracts.
              </p>
              <div className="pt-2 space-y-2.5">
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-xs shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Discuss Project or Role</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setShowCvModal(true)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-orange-400" />
                  <span>Download Career Overview / CV</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Audience Value Propositions: Clients vs HR */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* For Business Owners & Agencies (Clients) */}
          <div className="p-8 rounded-3xl bg-[#0c1122] border border-orange-500/30 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Why Clients & Agencies Hire Me</h3>
                  <p className="text-xs text-slate-400">High-converting web assets & dependable white-label execution</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 font-bold">
                For Clients
              </span>
            </div>

            <div className="space-y-4">
              {clientBenefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#0f152a] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{b.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* For HR, Technical Recruiters & Hiring Managers */}
          <div className="p-8 rounded-3xl bg-[#0c1122] border border-blue-500/30 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Why Technical Recruiters & HR Hire Me</h3>
                  <p className="text-xs text-slate-400">Proven remote reliability, leadership, and code discipline</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">
                For HR / Hiring
              </span>
            </div>

            <div className="space-y-4">
              {hrValueProps.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#0f152a] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{p.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quality Standards & Zero-Slop Commitment */}
        <div className="p-8 rounded-3xl bg-[#0a0f1d] border border-white/10 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block">
            Quality Commitment
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            100% Tested Production Quality — Zero Shortcuts
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Every website delivered adheres to modern standards: semantic HTML5 markup, responsive layouts verified across real device viewports, fast database queries, optimized asset compression, and clean handoff documentation.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Cross-Browser Tested
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Mobile Breakpoint Verified
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Strict NDA Compliance
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Clean Client Handoff
            </span>
          </div>
        </div>
      </div>

      {/* CV / Career Overview Modal */}
      {showCvModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#0c1122] border border-orange-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-2xl font-bold text-white">Humaiz Ur Rehman</h3>
                  <p className="text-xs text-orange-400 font-mono font-medium mt-0.5">
                    WordPress Developer & Team Lead | E-Commerce Specialist
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCvModal(false)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-semibold cursor-pointer"
                >
                  Close
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div className="p-4 rounded-2xl bg-[#0f152a] border border-white/5 space-y-1.5">
                  <h4 className="font-bold text-white">Professional Summary</h4>
                  <p>
                    WordPress Developer & Team Lead with over 170 live client projects delivered. Proven expertise in custom Elementor development, WooCommerce storefronts, Shopify customization, speed optimization, and agency white-label execution. Mentored junior developers and collaborated with SEO architects to build revenue-driving platforms.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0f152a] border border-white/5 space-y-2">
                  <h4 className="font-bold text-white">Key Engagements</h4>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                    <li><strong className="text-white">DevVortex (Oct 2024 – Present):</strong> WordPress Developer & SEO Structure Specialist. Multi-location service sites, mentor to 2 junior developers.</li>
                    <li><strong className="text-white">Freelance & Partner Engagements (2023 – Present):</strong> Custom e-commerce stores, client platforms, Duologiq clinical websites.</li>
                    <li><strong className="text-white">Eliix Marketing (Dec 2025 – Apr 2026):</strong> GoHighLevel marketing funnels & Webflow client websites.</li>
                    <li><strong className="text-white">Rex Technologies (Oct 2023 – Oct 2024):</strong> Rapid progression from intern to Junior WordPress Developer to Team Lead overseeing e-commerce and corporate deliverables.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-[#0f152a] border border-white/5 space-y-1.5">
                  <h4 className="font-bold text-white">Core Toolchain</h4>
                  <p>WordPress, Elementor Pro, WooCommerce, Shopify, PHP, MySQL, HTML5/CSS3, Bootstrap, Tailwind, GoHighLevel, Google AI Studio, Git/GitHub, Netlify.</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Humaiz%20Ur%20Rehman%20Resume%20Inquiry`}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white text-xs font-bold shadow-lg shadow-orange-500/25 transition-all"
                >
                  Request Official PDF via Email
                </a>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold cursor-pointer"
                >
                  Print Summary
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
