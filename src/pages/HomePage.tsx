import React from 'react';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { AiExperience } from '../components/AiExperience';
import { useRouter } from '../router';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Award,
  Layers,
  Sparkles,
  Users2,
  Building2,
  CheckCircle2
} from 'lucide-react';
import {
  WordPressIcon,
  ShopifyIcon,
  ElementorIcon,
  WooCommerceIcon,
  PhpIcon
} from '../components/BrandIcons';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Client & Agency Proof Marquee */}
      <section className="py-8 bg-[#090d18] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
                TRUSTED BY GLOBAL BUSINESSES & AGENCIES:
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80">
              <div className="flex items-center gap-2 text-slate-300 font-bold text-sm">
                <WordPressIcon className="w-5 h-5 text-[#3858e9]" />
                <span>WordPress VIP & Custom</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 font-bold text-sm">
                <ShopifyIcon className="w-5 h-5" />
                <span>Shopify E-Commerce</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 font-bold text-sm">
                <ElementorIcon className="w-5 h-5" />
                <span>Elementor Pro</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 font-bold text-sm">
                <WooCommerceIcon className="w-5 h-4" />
                <span>WooCommerce</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 font-bold text-sm">
                <PhpIcon className="w-5 h-5 text-[#777BB4]" />
                <span>PHP Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Client Deliverables Spotlight */}
      <section className="py-20 md:py-24 bg-[#070a12] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-mono uppercase tracking-widest font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                FLAGSHIP CLIENT SITES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Work & Commercial Portals
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Real, high-performing websites engineered for revenue generation and patient/client bookings.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500/15 hover:bg-orange-500/25 text-orange-300 border border-orange-500/40 text-xs font-bold transition-all cursor-pointer shrink-0"
            >
              <span>Explore All 170 Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <Projects initialViewMode="featured" showTitle={false} />

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs sm:text-sm font-bold shadow-xl shadow-orange-500/25 transition-all cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              <span>Browse Full 170-Project Archive With Search & Filters</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Dual Target Audience Value Proposition: For Clients & For HR */}
      <section className="py-20 md:py-24 bg-[#090d18] relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-mono uppercase tracking-widest font-semibold">
              <Award className="w-3.5 h-3.5" />
              WHY PARTNER WITH HUMAIZ
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Tailored For Direct Clients & High-Growth Remote Teams
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Direct Clients & Digital Agencies */}
            <div className="p-8 rounded-3xl bg-[#0c1122] border border-orange-500/30 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-orange-500/15 text-orange-400 flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">For Business Owners & Agencies</h3>
                    <p className="text-xs text-slate-400">Fixed-price or retainer web deliverables</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-300 font-bold">
                  Hire For A Project
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#0f152a] border border-white/5 space-y-1">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-orange-400" />
                    Conversion-Focused Web Architecture
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Designed around lead forms, telephone call buttons, and checkout pathways that turn visitors into paying customers.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0f152a] border border-white/5 space-y-1">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    White-Label Agency Reliability
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Strict adherence to deadlines, brand guidelines, and client NDAs. A trusted silent technical partner for your agency.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0f152a] border border-white/5 space-y-1">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    Speed & Core Web Vitals Optimization
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Lightweight themes, pruned assets, and database optimization for fast mobile loading scores and top search engine rankings.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-xs shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* For HR, Technical Recruiters & Hiring Managers */}
            <div className="p-8 rounded-3xl bg-[#0c1122] border border-blue-500/30 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                    <Users2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">For HR & Technical Recruiters</h3>
                    <p className="text-xs text-slate-400">Available for remote full-time WordPress / Lead roles</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 font-bold">
                  Hire For A Remote Role
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#0f152a] border border-white/5 space-y-1">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Users2 className="w-4 h-4 text-blue-400" />
                    Team Leadership & Junior Mentorship
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Proven track record leading developer cohorts, conducting thorough code reviews, and mentoring interns into productive developers.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0f152a] border border-white/5 space-y-1">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Autonomous Remote Work Ethic
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Experienced across US, UK, and European business hours with daily asynchronous check-ins, transparent documentation, and accountability.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0f152a] border border-white/5 space-y-1">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    170+ Production Track Record
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    A deep, verifiable repository of delivered websites across healthcare, e-commerce, real estate, HVAC, and service industries.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Schedule Remote Screening Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Services Preview */}
      <Services showTitle={true} />

      {/* 6. AI Velocity & Vibe Coding */}
      <AiExperience />

      {/* 7. 5-Step Process */}
      <Process />

      {/* 8. Bottom CTA Banner */}
      <section className="py-16 bg-[#070a12] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Build Your Website or Hire a Dedicated Lead?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Let's discuss your project requirements or remote role specifications today. Guaranteed response within 24 hours.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs sm:text-sm font-bold shadow-xl shadow-orange-500/30 transition-all cursor-pointer"
            >
              Get in Touch Now
            </button>
            <button
              type="button"
              onClick={() => navigate('/about')}
              className="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Learn More About Humaiz
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
