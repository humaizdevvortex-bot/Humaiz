import React from 'react';
import {
  Sparkles,
  Bot,
  Zap,
  Code2,
  Workflow,
  CheckCircle2,
  GitBranch,
  Globe,
  Layers,
  ArrowRight
} from 'lucide-react';

export const AiExperience: React.FC = () => {
  const workflowSteps = [
    {
      step: '01',
      title: 'Planning & Layout Generation',
      desc: 'Formulate wireframes, information architecture, and UI component structures from client briefs and design references.',
      icon: Workflow,
    },
    {
      step: '02',
      title: 'Design-to-Prototype Conversion',
      desc: 'Rapidly translate visual screenshots, brand guidelines, and client briefs into interactive, pixel-accurate web prototypes.',
      icon: Layers,
    },
    {
      step: '03',
      title: 'Google AI Studio & Vibe Coding',
      desc: 'Leverage Google AI Studio, prompt architecture, and rapid iterative vibe coding to scaffold modern React & Vite applications.',
      icon: Bot,
    },
    {
      step: '04',
      title: 'Refinement, Debugging & QA',
      desc: 'Apply practical developer review: cross-browser bug fixing, speed audit, responsive polishing, and accessibility hardening.',
      icon: Code2,
    },
    {
      step: '05',
      title: 'CI/CD with GitHub & Netlify',
      desc: 'Push production code to GitHub repositories and configure automatic, serverless continuous deployments on Netlify.',
      icon: Globe,
    },
  ];

  return (
    <section id="ai-workflows" className="py-20 md:py-28 bg-[#070a13] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            MODERN ACCELERATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            AI-Assisted Development & Vibe Coding
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Accelerating delivery without cutting corners. I combine modern AI-assisted engineering with deep, hands-on WordPress and web fundamentals.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
        </div>

        {/* Core Philosophy Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0d1326] via-[#121933] to-[#0d1326] border border-orange-500/30 shadow-2xl mb-14 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-wider font-semibold">
                <Zap className="w-4 h-4 text-amber-400" />
                The Core Advantage
              </div>
              <blockquote className="text-lg sm:text-xl font-medium text-slate-100 italic leading-relaxed">
                “I combine AI-assisted workflows with practical website development skills to accelerate implementation, then review and refine the output for responsive behavior and functionality.”
              </blockquote>
              <p className="text-xs text-slate-400 font-mono">
                — Practical engineering with rapid speed: 0% hallucinations, 100% human-verified quality.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-300 text-xs font-bold font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>3x Faster Prototyping</span>
            </div>
          </div>
        </div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {workflowSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="group p-5 rounded-2xl bg-[#0b0f1d] border border-white/10 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-extrabold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                      STEP {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-orange-500/20 text-slate-300 group-hover:text-orange-400 flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Practical AI Toolchain Matrix */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0c1122] border border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="text-xs text-slate-400 block font-mono uppercase">AI Studio Workflows</span>
            <span className="text-base font-bold text-white">Google AI Studio</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-slate-400 block font-mono uppercase">Frontend Stack</span>
            <span className="text-base font-bold text-orange-400">React 19 + Vite</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-slate-400 block font-mono uppercase">Version Control</span>
            <span className="text-base font-bold text-white">Git & GitHub</span>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-slate-400 block font-mono uppercase">Deployment</span>
            <span className="text-base font-bold text-cyan-400">Netlify CI/CD</span>
          </div>
        </div>
      </div>
    </section>
  );
};
