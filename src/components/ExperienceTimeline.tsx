import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Building,
  CheckCircle2,
  Users,
  Code,
  Sparkles
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const experiences = [
    {
      period: 'October 2024 – Present',
      role: 'WordPress Developer & SEO Technical Contributor',
      company: 'DevVortex',
      type: 'Agency Role',
      highlight: 'Healthcare, HVAC, Real Estate & Mentorship',
      description:
        'Building high-conversion websites for local businesses, healthcare clinics, HVAC services, and real estate professionals. Collaborating directly with SEO strategists on technical website structures, schema markup, and lead-generation architectures.',
      bullets: [
        'Engineered responsive WordPress & Elementor sites for healthcare and multi-city HVAC networks.',
        'Structured local SEO silos and lead-generation pages with clean semantic headings.',
        'Trained and guided two interns in WordPress development standards and responsive workflows.',
        'Ensured cross-browser fidelity, high Core Web Vitals, and responsive mobile rendering.',
      ],
      tags: ['WordPress', 'Elementor', 'Local SEO Architecture', 'Team Mentorship', 'Lead Gen'],
    },
    {
      period: 'December 2025 – April 2026',
      role: 'Part-Time GHL & Webflow Developer',
      company: 'Eliix Marketing',
      type: 'Contract Role',
      highlight: 'Marketing Funnels & CMS Integration',
      description:
        'Contributed part-time to client marketing funnels and web presences, focusing on fast turnaround and automated capture workflows.',
      bullets: [
        'Built and maintained conversion-optimized GoHighLevel (GHL) funnel pages and forms.',
        'Contributed to a responsive Webflow client website with customized layout components.',
        'Collaborated with marketing stakeholders to test and verify lead capture integrations.',
      ],
      tags: ['GoHighLevel (GHL)', 'Webflow', 'Funnels', 'Lead Automation'],
    },
    {
      period: 'October 2023 – October 2024',
      role: 'Intern → Junior WordPress Developer → Team Lead Responsibilities',
      company: 'Rex Technologies, Lahore',
      type: 'Full-Time Growth Journey',
      highlight: 'From Intern to Team Leadership',
      description:
        'Launched my professional WordPress career at Rex Technologies. Quickly advanced from intern to Junior WordPress Developer, taking on team leadership responsibilities across high-volume e-commerce and corporate deliverables.',
      bullets: [
        'Developed dozens of client websites and stores using Elementor, WPBakery, WooCommerce, and Shopify.',
        'Executed theme customization, catalog imports, product listings, and custom styling with HTML, CSS, and Bootstrap.',
        'Delivered client solutions across healthcare, construction, real estate, retail, solar, travel, and cleaning.',
        'Assumed team leadership responsibilities: coordinating project tasks, overseeing junior deliverables, and meeting client deadlines.',
      ],
      tags: ['WordPress', 'Elementor', 'WPBakery', 'WooCommerce', 'Shopify', 'Bootstrap', 'Team Leadership'],
    },
    {
      period: '2023 – Present',
      role: 'Freelance & Collaborative Web Developer',
      company: 'Independent & Partner Engagements',
      type: 'Client Engagements',
      highlight: 'Stores & Corporate Deliverables',
      description:
        'Partnered on freelance e-commerce stores and corporate websites (including Duologiq client projects), handling end-to-end site setup, custom shop pages, and client training.',
      bullets: [
        'Developed custom WooCommerce and Shopify stores for niche brands (watches, bags, neon lights).',
        'Contributed to multi-doctor clinical websites and case study showcases for Duologiq.',
        'Delivered reliable white-label web assets for partner agencies.',
      ],
      tags: ['Shopify', 'WooCommerce', 'Freelance Collaboration', 'Duologiq'],
    },
    {
      period: 'Graduated 2022',
      role: 'BS in Computer Science',
      company: 'Government College University, Faisalabad (Layyah Campus)',
      type: 'Academic Foundation',
      highlight: 'Core CS Foundations',
      description:
        'Earned a four-year Bachelor of Science degree in Computer Science, establishing strong theoretical and practical foundations in programming, database structures, web engineering, and software development lifecycles.',
      bullets: [
        'Studied data structures, algorithms, object-oriented programming, and relational databases.',
        'Participated in web programming and practical software development coursework.',
      ],
      tags: ['Computer Science', 'Software Engineering', 'Database Systems', 'Web Fundamentals'],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            CAREER JOURNEY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Professional Experience & Milestones
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            A transparent and verified timeline of my career progression, leadership responsibilities, and client deliverables.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
        </div>

        {/* Timeline Flow */}
        <div className="relative border-l-2 border-orange-500/30 ml-4 md:ml-32 lg:ml-40 space-y-12">
          {experiences.map((exp, index) => {
            const isEducation = exp.role.includes('BS in Computer Science');
            return (
              <div key={index} className="relative pl-6 md:pl-10 group">
                {/* Timeline node */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0c1122] border-2 border-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30 group-hover:scale-125 transition-transform duration-300">
                  {isEducation ? (
                    <GraduationCap className="w-4 h-4 text-amber-300" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-orange-400" />
                  )}
                </div>

                {/* Period Pill on the left on wider screens */}
                <div className="md:absolute md:-left-36 lg:-left-44 md:top-2 md:text-right md:w-32 lg:w-40">
                  <span className="inline-block text-xs font-mono font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/20">
                    {exp.period}
                  </span>
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-7 rounded-3xl bg-[#0c1122] border border-white/10 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-orange-400/90 mb-4">
                    <Building className="w-4 h-4" />
                    <span>{exp.company}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-xs text-slate-400 font-normal">{exp.highlight}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/5">
                    {exp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
