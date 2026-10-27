import React, { useState } from 'react';
import {
  Code,
  Layout,
  ShoppingBag,
  Sparkles,
  Layers,
  Users,
  CheckCircle2,
  Terminal,
  Cpu
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const skillCategories = [
    {
      id: 'wordpress',
      category: 'WordPress Development',
      icon: Layout,
      color: 'from-blue-500/20 to-indigo-500/10',
      borderColor: 'border-blue-500/30',
      description: 'Extensive production experience spanning custom sites, dynamic templates, and builders.',
      skills: [
        { name: 'WordPress Core', level: 'Core Stack', details: 'Hooks, Filters, Child Themes, Multisite' },
        { name: 'Elementor & Elementor Pro', level: 'Expert', details: 'Dynamic tags, theme builder, responsive CSS' },
        { name: 'WPBakery Page Builder', level: 'Proficient', details: 'Legacy & agency theme maintenance' },
        { name: 'Gutenberg Block Editor', level: 'Advanced', details: 'Full Site Editing (FSE), block patterns' },
        { name: 'Classic Editor', level: 'Experienced', details: 'Shortcodes, meta fields, custom templates' },
      ],
    },
    {
      id: 'ecommerce',
      category: 'E-Commerce & Storefronts',
      icon: ShoppingBag,
      color: 'from-orange-500/20 to-amber-500/10',
      borderColor: 'border-orange-500/30',
      description: 'End-to-end commerce architecture, catalogs, and payment flow integrations.',
      skills: [
        { name: 'WooCommerce', level: 'Specialist', details: 'Store setup, checkout hooks, variable inventory' },
        { name: 'Shopify Theme Customization', level: 'Specialist', details: 'Liquid styling, section layouts, app embeds' },
        { name: 'Product Cataloging & Listings', level: 'High Volume', details: 'Bulk CSV imports, SEO tags, specs' },
        { name: 'Payment Gateways', level: 'Production', details: 'Stripe, PayPal, local merchant configurations' },
      ],
    },
    {
      id: 'frontend',
      category: 'Frontend Engineering',
      icon: Code,
      color: 'from-emerald-500/20 to-teal-500/10',
      borderColor: 'border-emerald-500/30',
      description: 'Solid foundational frontend standards for responsive, mobile-first performance.',
      skills: [
        { name: 'HTML5 Semantic Markup', level: 'Foundation', details: 'Accessible, clean hierarchy & SEO tags' },
        { name: 'CSS3 & Flexbox/Grid', level: 'Advanced', details: 'Modern responsive layouts, animations' },
        { name: 'Bootstrap 5', level: 'Proficient', details: 'Grid system, UI components, custom styles' },
        { name: 'Tailwind CSS', level: 'Production', details: 'Utility-first modern styling & dark modes' },
        { name: 'Responsive Web Design', level: 'Essential', details: '100% Mobile, Tablet & Desktop fidelity' },
        { name: 'JavaScript & React / Vite', level: 'Modern Stack', details: 'Interactive UI, state handling, tooling' },
      ],
    },
    {
      id: 'ai-vibe',
      category: 'AI-Assisted & Vibe Coding',
      icon: Sparkles,
      color: 'from-purple-500/20 to-pink-500/10',
      borderColor: 'border-purple-500/30',
      description: 'Cutting-edge development velocity using prompt architecture and AI Studio.',
      skills: [
        { name: 'Google AI Studio', level: 'Daily Driver', details: 'Application scaffolding, logic generation' },
        { name: 'Vibe Coding Methodology', level: 'Specialist', details: 'Rapid iteration, prompt debugging, agile cycles' },
        { name: 'AI Code Refinement & QA', level: 'Human Review', details: 'Syntax validation, responsiveness check' },
        { name: 'Rapid Prototyping', level: 'High Speed', details: 'From napkin wireframe to live demo in hours' },
        { name: 'Netlify & GitHub Workflows', level: 'CI/CD Ready', details: 'Automated builds, branch deploys, DNS' },
      ],
    },
    {
      id: 'other-platforms',
      category: 'Secondary Platforms & Funnels',
      icon: Layers,
      color: 'from-cyan-500/20 to-blue-500/10',
      borderColor: 'border-cyan-500/30',
      description: 'Cross-platform versatility for marketing agencies and client funnels.',
      skills: [
        { name: 'GoHighLevel (GHL)', level: 'Applied', details: 'Funnels, lead workflows, landing pages' },
        { name: 'Webflow', level: 'Applied', details: 'Visual CMS, responsive styling, client edits' },
      ],
    },
    {
      id: 'professional',
      category: 'Leadership & Agency Delivery',
      icon: Users,
      color: 'from-rose-500/20 to-orange-500/10',
      borderColor: 'border-rose-500/30',
      description: 'Real-world soft skills and collaboration tested in agency environments.',
      skills: [
        { name: 'Team Coordination & Leadership', level: 'Verified', details: 'Task delegation, code reviews, deadlines' },
        { name: 'Intern Mentorship', level: 'Verified', details: 'Trained & guided 2 junior developers' },
        { name: 'SEO-Focused Architecture', level: 'Production', details: 'Sitemaps, schemas, heading hierarchies' },
        { name: 'White-Label Agency Delivery', level: 'Trusted Partner', details: 'Strict client confidentiality & quality' },
      ],
    },
  ];

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            MY EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills & Technical Capabilities
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Honest, verified skills shaped through 170+ production projects across Rex Technologies, DevVortex, Eliix Marketing, and freelance collaborations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
        </div>

        {/* Tab Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/25'
                : 'bg-[#0f1424] text-slate-300 hover:text-white border border-white/10 hover:border-orange-500/30'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-[#0f1424] text-slate-300 hover:text-white border border-white/10 hover:border-orange-500/30'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group p-6 rounded-3xl bg-[#0c1122] border border-white/10 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                        {category.category}
                      </h3>
                      <p className="text-[11px] text-slate-400">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-[#0f152a] border border-white/5 hover:border-orange-500/30 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-orange-500/10 text-orange-300 border border-orange-500/20">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 pl-3 font-mono">
                          {skill.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Production Verified
                  </span>
                  <span>{category.skills.length} competencies</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
