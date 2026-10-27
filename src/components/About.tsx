import React, { useState } from 'react';
import {
  GraduationCap,
  Building2,
  Users,
  Compass,
  FileText,
  Mail,
  MapPin,
  Calendar,
  Check,
  ShieldCheck,
  Download,
  X
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/socials';

export const About: React.FC = () => {
  const [showCvModal, setShowCvModal] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 bg-[#090d18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Building Digital Solutions That Make a Difference
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative & Key Strengths */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c1122] border border-white/10 shadow-xl space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-2.5 h-6 bg-orange-500 rounded-sm inline-block" />
                Proven WordPress & Web Development Track Record
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a passionate <strong className="text-white font-semibold">WordPress Developer and Team Lead</strong> with experience building custom, responsive, and performance-driven websites for businesses and international digital marketing agencies.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                My journey began with a <strong className="text-orange-400 font-semibold">BS in Computer Science</strong> from Government College University Faisalabad (Layyah Campus, 2022). In October 2023, I joined <strong className="text-white font-semibold">Rex Technologies</strong> in Lahore as an intern, progressed to Junior Developer, and subsequently stepped into <strong className="text-white font-semibold">team leadership responsibilities</strong>.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                In October 2024, I joined <strong className="text-white font-semibold">DevVortex</strong>, where I develop high-converting websites for healthcare providers, HVAC services, real estate investors, and service businesses. I collaborate closely with SEO teams to engineer technical website structures that rank and convert, while also training and mentoring junior developers.
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#11172e] border border-white/5">
                  <Building2 className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">White-Label Partner</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Reliable execution for digital marketing & SEO agencies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#11172e] border border-white/5">
                  <Users className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Team Lead & Mentor</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Guided and mentored junior devs and intern cohorts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#11172e] border border-white/5">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">SEO Architecture</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Clean semantic layouts engineered for organic visibility.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#11172e] border border-white/5">
                  <Compass className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">AI-Accelerated Speed</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Vibe coding & AI tools to deliver projects 3x faster.</p>
                  </div>
                </div>
              </div>

              {/* Resume / Profile Download Trigger */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  type="button"
                  onClick={() => setShowCvModal(true)}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 border border-orange-500/40 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-md hover:shadow-orange-500/20"
                >
                  <Download className="w-4 h-4 text-orange-400" />
                  <span>Download Career Summary / CV</span>
                </button>
                <span className="text-xs text-slate-400">PDF & Print-friendly profile</span>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Info Card & Signature */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c1122] border border-orange-500/25 shadow-xl relative overflow-hidden">
              {/* Background gradient hint */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-lg font-bold text-white mb-6 pb-3 border-b border-white/10 flex items-center justify-between">
                <span>Developer Profile</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Verified Data
                </span>
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/15 text-orange-400 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Full Name</span>
                    <span className="text-white font-semibold">Humaiz Ur Rehman</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/15 text-orange-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Direct Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-orange-400 hover:underline font-mono text-xs break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/15 text-orange-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Location</span>
                    <span className="text-slate-200">Lahore, Pakistan (Remote Worldwide)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/15 text-orange-400 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Education (2022)</span>
                    <span className="text-slate-200">
                      BS Computer Science, GCUF (Layyah Campus)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/15 text-orange-400 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Current Engagements</span>
                    <span className="text-slate-200">
                      WordPress Developer at DevVortex (Oct 2024–Present)
                    </span>
                  </div>
                </div>
              </div>

              {/* Elegant Signature */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col items-center text-center">
                <span className="font-serif italic text-3xl text-gradient-gold tracking-wider select-none">
                  Humaiz Ur Rehman
                </span>
                <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mt-1">
                  WordPress & Web Specialist
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CV / Career Overview Modal */}
      {showCvModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#0e1426] border border-orange-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setShowCvModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
                  Career Profile & Summary
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Humaiz Ur Rehman</h3>
                <p className="text-xs text-slate-300 mt-1 font-mono">
                  WordPress Developer & Team Lead | AI-Assisted Web Specialist
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-orange-400" />
                    Formal Education
                  </h4>
                  <p>BS Computer Science (2022) — Government College University, Faisalabad (Layyah Campus)</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-orange-400" />
                    Key Experience Highlights
                  </h4>
                  <ul className="list-disc list-inside space-y-1.5 text-slate-300">
                    <li><strong className="text-white">DevVortex (Oct 2024 – Present):</strong> WordPress Developer for healthcare, HVAC, and local business portfolios. Mentoring 2 interns and optimizing SEO architectures.</li>
                    <li><strong className="text-white">Rex Technologies (Oct 2023 – Oct 2024):</strong> Intern to Junior Dev to Team Lead. Developed e-commerce, corporate, and catalog websites with Elementor, WooCommerce, and Shopify.</li>
                    <li><strong className="text-white">Eliix Marketing (Dec 2025 – Apr 2026):</strong> Part-time GoHighLevel funnels and Webflow client projects.</li>
                    <li><strong className="text-white">170+ Projects:</strong> Verified record of client websites, e-commerce stores, and agency deliverables.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <Compass className="w-4 h-4 text-orange-400" />
                    Technical Specializations
                  </h4>
                  <p>WordPress Core, Elementor Pro, WPBakery, WooCommerce, Shopify theme customization, HTML5/CSS3/Bootstrap/Tailwind, GoHighLevel funnels, Google AI Studio, Vibe coding, Netlify, and Git workflows.</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Humaiz%20Ur%20Rehman%20Resume%20Inquiry`}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white text-xs font-bold shadow-lg shadow-orange-500/25 hover:from-orange-600 hover:to-amber-700 transition-all"
                >
                  Request Full PDF via Email
                </a>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold transition-colors"
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
