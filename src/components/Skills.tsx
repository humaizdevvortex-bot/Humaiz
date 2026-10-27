import React, { useState } from 'react';
import {
  Layout,
  ShoppingBag,
  Sparkles,
  Layers,
  Users,
  CheckCircle2,
  Terminal,
  Database,
  Cpu,
  Search,
  Check
} from 'lucide-react';
import {
  WordPressIcon,
  ShopifyIcon,
  ElementorIcon,
  WooCommerceIcon,
  PhpIcon,
  Html5Icon,
  Css3Icon,
  AiStudioIcon
} from './BrandIcons';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const skillCategories = [
    {
      id: 'wordpress',
      category: 'WordPress Ecosystem',
      icon: WordPressIcon,
      color: 'from-blue-500/20 to-indigo-500/10',
      description: 'Senior-level production mastery across core WordPress, themes, templates, and visual builders.',
      skills: [
        { name: 'WordPress Core Architecture', level: 'Senior Stack', details: 'Hooks, Filters, Actions, Child Themes & Multisite' },
        { name: 'Elementor & Elementor Pro', level: 'Mastery', details: 'Theme Builder, Dynamic Loop Grids, Custom Breakpoints' },
        { name: 'Gutenberg Block Editor', level: 'Advanced', details: 'Full Site Editing (FSE), Custom Block Patterns' },
        { name: 'WPBakery Page Builder', level: 'Proficient', details: 'Legacy agency themes, custom visual shortcodes' },
        { name: 'Classic Editor & Custom Fields', level: 'Experienced', details: 'ACF, meta fields, custom post types (CPT)' },
      ],
    },
    {
      id: 'ecommerce',
      category: 'Shopify & WooCommerce',
      icon: ShopifyIcon,
      color: 'from-emerald-500/20 to-teal-500/10',
      description: 'End-to-end e-commerce store architecture, high-conversion checkouts, and custom catalogs.',
      skills: [
        { name: 'Shopify Theme Customization', level: 'Specialist', details: 'Liquid template logic, custom sections, app embeds' },
        { name: 'WooCommerce Architecture', level: 'Specialist', details: 'Custom shop templates, checkout hooks, variable attributes' },
        { name: 'High-Volume Product Cataloging', level: 'Production', details: 'CSV bulk imports, product taxonomy, structured data' },
        { name: 'Payment & Shipping Gateways', level: 'Production', details: 'Stripe, PayPal, local merchant APIs, tax & shipping rules' },
      ],
    },
    {
      id: 'backend',
      category: 'PHP, MySQL & Backend',
      icon: PhpIcon,
      color: 'from-purple-500/20 to-indigo-500/10',
      description: 'Server-side scripting and database querying to build custom functionalities without bloated plugins.',
      skills: [
        { name: 'PHP (7.4 / 8.x)', level: 'Production', details: 'Object-oriented programming, custom functions, REST API endpoints' },
        { name: 'MySQL Relational Database', level: 'Intermediate', details: 'Database schema queries, wp_options optimization, table cleanup' },
        { name: 'Speed & Caching Optimization', level: 'Specialist', details: 'Redis/Memcached, WP Rocket, Cloudflare CDN, minification' },
        { name: 'Security Hardening', level: 'Production', details: 'Malware mitigation, SSL enforcement, two-factor auth, secure headers' },
      ],
    },
    {
      id: 'frontend',
      category: 'Frontend & UI Standards',
      icon: Html5Icon,
      color: 'from-orange-500/20 to-amber-500/10',
      description: 'Clean semantic markup, mobile-first CSS architecture, and interactive client-side logic.',
      skills: [
        { name: 'HTML5 Semantic Markup', level: 'Essential', details: 'Accessible ARIA labels, clean SEO hierarchy' },
        { name: 'CSS3, Flexbox & Grid', level: 'Advanced', details: 'Modern responsive layouts, CSS variables, transitions' },
        { name: 'Bootstrap 5 & Tailwind CSS', level: 'Proficient', details: 'Rapid grid construction, utility classes, dark theme palettes' },
        { name: 'JavaScript (Vanilla / ES6+)', level: 'Production', details: 'DOM manipulation, AJAX forms, interactive sliders & modals' },
        { name: 'Responsive Breakpoint Testing', level: '100% Fidelity', details: 'Rigorous 320px to 4K viewport verification' },
      ],
    },
    {
      id: 'ai-vibe',
      category: 'AI-Assisted Vibe Coding',
      icon: AiStudioIcon,
      color: 'from-amber-500/20 to-orange-500/10',
      description: 'Cutting-edge development velocity using prompt architecture and AI Studio to build 3x faster.',
      skills: [
        { name: 'Google AI Studio Workflows', level: 'Daily Driver', details: 'Rapid scaffolding, algorithmic logic & component templates' },
        { name: 'Vibe Coding Methodology', level: 'Specialist', details: 'Iterative prototyping, prompt debugging, agile delivery cycles' },
        { name: 'Human-in-the-Loop QA', level: 'Senior Review', details: 'Manual code verification, syntax audit & cross-device review' },
        { name: 'Git & Netlify Continuous Staging', level: 'CI/CD Ready', details: 'Automated staging builds, version control & branch reviews' },
      ],
    },
    {
      id: 'leadership',
      category: 'Agency Leadership & SEO',
      icon: Users,
      color: 'from-blue-500/20 to-cyan-500/10',
      description: 'Proven team leadership and communication tested in high-volume agency environments.',
      skills: [
        { name: 'Team Coordination & Leadership', level: 'Team Lead', details: 'Task breakdown, code reviews, deadline management' },
        { name: 'Junior Developer Mentorship', level: 'Mentor', details: 'Successfully trained and guided 2 developers & interns' },
        { name: 'Technical SEO Site Architecture', level: 'Production', details: 'Schema JSON-LD, URL silos, Core Web Vitals compliance' },
        { name: 'White-Label Agency Delivery', level: 'Trusted Partner', details: 'Strict client confidentiality, NDAs & brand standards' },
      ],
    },
  ];

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section className="py-20 md:py-28 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-widest font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            TECHNICAL PROFICIENCY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills & Enterprise Capabilities
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Honest, verified technical skills tested through 170+ live client websites across Rex Technologies, DevVortex, Eliix Marketing, and global collaborations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
        </div>

        {/* Tab Filters */}
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
            All Competencies
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

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group p-6 rounded-3xl bg-[#0c1122] border border-white/10 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform p-1.5">
                      <Icon className="w-full h-full" />
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
                  <span>{category.skills.length} proficiencies</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
