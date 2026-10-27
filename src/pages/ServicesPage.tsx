import React from 'react';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { useRouter } from '../router';
import { Zap, Sparkles, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12 md:py-16 bg-[#070a12] border-b border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-mono uppercase tracking-widest font-semibold">
            <Zap className="w-3.5 h-3.5" />
            SOLUTIONS & RETROFITS
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Specialized Web Development Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From single-brand redesigns to multi-client white-label agency partnerships, explore tailored development solutions built for speed and ROI.
          </p>
        </div>
      </section>

      {/* Services Component */}
      <Services showTitle={false} />

      {/* Engagement Models Grid */}
      <section className="py-16 bg-[#070a12] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
              FLEXIBLE ENGAGEMENT TIERS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              How We Can Work Together
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Clear deliverables, fixed pricing, or dedicated developer retainers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-[#0c1122] border border-white/10 space-y-4">
              <span className="text-xs font-mono text-orange-400 font-bold block">MODEL 01</span>
              <h4 className="text-lg font-bold text-white">Fixed-Price Project Build</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ideal for business owners who need a complete custom WordPress website, Elementor redesign, or Shopify store delivered within a set timeline.
              </p>
              <ul className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-orange-400" />
                  <span>Transparent milestone payments</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-orange-400" />
                  <span>Full staging walkthrough & testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-orange-400" />
                  <span>30 days post-launch warranty</span>
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-3xl bg-[#0c1122] border border-orange-500/40 shadow-xl space-y-4 relative">
              <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white text-[10px] font-mono font-bold">
                POPULAR WITH AGENCIES
              </span>
              <span className="text-xs font-mono text-orange-400 font-bold block">MODEL 02</span>
              <h4 className="text-lg font-bold text-white">Agency White-Label Retainer</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated development hours every month for digital marketing & SEO agencies needing consistent client site production and maintenance.
              </p>
              <ul className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-orange-400" />
                  <span>Strict NDA & 100% white-label</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-orange-400" />
                  <span>Priority sprint scheduling</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-orange-400" />
                  <span>Direct team Slack/Asana sync</span>
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-3xl bg-[#0c1122] border border-white/10 space-y-4">
              <span className="text-xs font-mono text-blue-400 font-bold block">MODEL 03</span>
              <h4 className="text-lg font-bold text-white">Full-Time Remote Hire</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                For international companies looking to hire a senior-level WordPress Developer & Team Lead on a full-time remote basis.
              </p>
              <ul className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>Dedicated 40 hours/week availability</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>US/UK/EU business hours overlap</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>Mentorship & code reviews</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <Process />
    </div>
  );
};
