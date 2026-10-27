import React from 'react';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Process } from '../components/Process';
import { useRouter } from '../router';
import { ArrowRight, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="pt-20">
      {/* Page Banner Header */}
      <section className="py-12 md:py-16 bg-[#070a12] border-b border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-mono uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            ABOUT US & SENIOR PROFILE
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Crafting Scalable Web Experiences with Precision & Speed
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discover the engineering philosophy, agency track record, and leadership behind 170+ live production websites.
          </p>
        </div>
      </section>

      {/* About Component */}
      <About />

      {/* Skills Matrix */}
      <Skills />

      {/* Process & Trust */}
      <Process />

      {/* Bottom Action CTA */}
      <section className="py-16 bg-[#060913] border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Let's Discuss Your Project or Schedule a Remote Interview
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Available for white-label agency partnerships, custom WordPress/Shopify builds, or full-time remote developer roles.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-orange-500/25 transition-all cursor-pointer"
            >
              Get in Touch with Humaiz
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
