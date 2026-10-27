import React from 'react';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { useRouter } from '../router';
import { Briefcase, ArrowRight, Sparkles } from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12 md:py-16 bg-[#070a12] border-b border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-mono uppercase tracking-widest font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            CAREER & AGENCY CHRONOLOGY
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & Proven Leadership
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A verified timeline of agency roles, team leadership, freelance partnerships, and production web implementations.
          </p>
        </div>
      </section>

      {/* Timeline Component (shuffled: DevVortex -> Freelance -> Eliix -> Rex -> GCUF) */}
      <ExperienceTimeline />

      {/* Bottom CTA */}
      <section className="py-16 bg-[#060913] border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Looking for a Proven Team Lead or Developer for Your Team?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            I bring real-world production experience, team coordination, and deep WordPress/Shopify technical mastery.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-orange-500/25 transition-all cursor-pointer"
            >
              Contact Humaiz Directly
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
