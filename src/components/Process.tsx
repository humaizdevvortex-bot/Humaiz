import React from 'react';
import {
  FileSearch,
  Compass,
  Code2,
  CheckCircle2,
  Send,
  Shield,
  Clock,
  Sparkles,
  Award
} from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Understand Requirements',
      desc: 'Carefully analyze your brief, design references, target audience, brand aesthetic, and conversion goals to ensure clarity from day one.',
      icon: FileSearch,
      highlight: 'Deep Brief Analysis',
    },
    {
      number: '02',
      title: 'Plan Structure & Architecture',
      desc: 'Define sitemaps, semantic heading hierarchies, responsive breakpoints, SEO architecture, and database/platform setup.',
      icon: Compass,
      highlight: 'SEO & Speed Blueprint',
    },
    {
      number: '03',
      title: 'Build with WordPress & AI',
      desc: 'Develop the site using Elementor, WooCommerce, Shopify, or rapid AI-assisted vibe coding depending on technical requirements.',
      icon: Code2,
      highlight: 'Clean Implementation',
    },
    {
      number: '04',
      title: 'Test Responsiveness & Functionality',
      desc: 'Rigorous multi-device testing (desktop, tablet, mobile), cross-browser audits, form verification, and speed optimization.',
      icon: CheckCircle2,
      highlight: 'Zero Compromise QA',
    },
    {
      number: '05',
      title: 'Deliver, Train & Refine',
      desc: 'Smooth deployment to your host (or Netlify/staging), client walkthrough on content edits, and ongoing refinement based on feedback.',
      icon: Send,
      highlight: 'Handoff & Ongoing Support',
    },
  ];

  const trustPillars = [
    {
      icon: Shield,
      title: 'Strict Quality Standards',
      desc: 'Every layout is verified for responsive behavior, clean markup, and zero layout shifting across viewports.',
    },
    {
      icon: Clock,
      title: 'Reliable Deadlines',
      desc: 'Disciplined project schedules and daily progress updates tailored for busy agency owners and project managers.',
    },
    {
      icon: Sparkles,
      title: 'Transparent Collaboration',
      desc: 'No vague promises or fake claims. What you see in the code and live staging is what you get.',
    },
    {
      icon: Award,
      title: 'White-Label Ready',
      desc: 'Complete confidentiality and seamless client integration under your agency brand.',
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-[#090d18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-widest">
            <span>METHODOLOGY & TRUST</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How I Work & Deliver
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            A structured 5-step development workflow designed for predictability, speed, and high-conversion results.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
        </div>

        {/* 5-Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group p-6 rounded-3xl bg-[#0c1122] border border-white/10 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-gradient-orange">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-orange-400/90 font-medium">
                  {step.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Agency Trust Pillars */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0c1122] to-[#101730] border border-orange-500/25 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Why Agencies & Businesses Partner With Me
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Clear commitments, battle-tested processes, and verified technical execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pillar, pIdx) => {
              const PIcon = pillar.icon;
              return (
                <div key={pIdx} className="p-4 rounded-2xl bg-[#080c18] border border-white/5 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/15 text-orange-400 flex items-center justify-center">
                    <PIcon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
