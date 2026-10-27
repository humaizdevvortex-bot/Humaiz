import React from 'react';
import {
  Globe,
  LayoutTemplate,
  ShoppingBag,
  Sparkles,
  Users2,
  ArrowRight,
  Check,
  Zap,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useRouter } from '../router';
import {
  WordPressIcon,
  ShopifyIcon,
  WooCommerceIcon,
  ElementorIcon,
  AiStudioIcon
} from './BrandIcons';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
  showTitle?: boolean;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, showTitle = true }) => {
  const { navigate } = useRouter();

  const services = [
    {
      id: 'wordpress-development',
      title: 'WordPress Website Development',
      badge: 'Core Specialty',
      icon: WordPressIcon,
      accent: 'border-blue-500/30 text-blue-400',
      description:
        'Custom, mobile-responsive, and high-performance WordPress systems built with clean PHP, semantic hierarchy, reliable security, and SEO-friendly architectures.',
      features: [
        'Custom theme & layout engineering',
        'Speed & Core Web Vitals optimization (90+ mobile scores)',
        'Advanced lead capture funnels & conversion pathways',
        'Security hardening & automated cloud backups',
        'Cross-browser & mobile breakpoint testing',
      ],
    },
    {
      id: 'elementor-redesign',
      title: 'Elementor Development & Redesign',
      badge: 'Visual Precision',
      icon: ElementorIcon,
      accent: 'border-rose-500/30 text-rose-400',
      description:
        'Transforming Figma files, design references, or outdated websites into modern, pixel-perfect Elementor experiences with zero bloat that clients can easily manage.',
      features: [
        'Figma & reference websites to Elementor translation',
        'Clean responsive breakpoints (Mobile, Tablet, Desktop)',
        'Custom header, footer & dynamic archive templates',
        'Pruned widgets & asset cleanup for fast load times',
        'Intuitive client editing handoff & video walkthroughs',
      ],
    },
    {
      id: 'ecommerce-customization',
      title: 'WooCommerce & Shopify Customization',
      badge: 'E-Commerce Stores',
      icon: ShopifyIcon,
      accent: 'border-emerald-500/30 text-emerald-400',
      description:
        'Complete online storefronts engineered for fast checkout, seamless catalog browsing, payment gateway integration, and high conversion rates.',
      features: [
        'Shopify theme customization & Liquid styling',
        'WooCommerce store setup & custom checkout hooks',
        'High-volume catalog imports & variable product feeds',
        'Stripe, PayPal & regional payment gateway integration',
        'Cart abandonment mitigation & conversion checkout flow',
      ],
    },
    {
      id: 'ai-assisted-vibe-coding',
      title: 'AI-Assisted Web Dev & Vibe Coding',
      badge: 'Rapid Prototyping',
      icon: AiStudioIcon,
      accent: 'border-orange-500/30 text-orange-400',
      description:
        'Leveraging Google AI Studio, prompt engineering, and rapid vibe coding workflows to scaffold, iterate, and deploy modern website prototypes at 3x velocity.',
      features: [
        'Rapid turn-around from client briefs and references',
        'AI-assisted structural wireframing & component generation',
        'Rigorous human-in-the-loop review & code refactoring',
        'Instant Netlify & GitHub staging environments',
        'Smooth migration into production CMS environments',
      ],
    },
    {
      id: 'white-label-agency',
      title: 'White-Label WordPress for Agencies',
      badge: 'Agency Partner',
      icon: Users2,
      accent: 'border-amber-500/30 text-amber-400',
      description:
        'A dependable technical extension for digital marketing and SEO agencies. Confidential, disciplined, and strictly aligned with your agency standards.',
      features: [
        'Strict NDA compliance & white-label delivery',
        'SEO-first URL structures & schema markup readiness',
        'Fast turnaround on priority client tickets and sprints',
        'Consistent daily communication across US/UK timezones',
        'Flexible project-based or monthly retainer agreements',
      ],
    },
  ];

  const handleInquire = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    navigate('/contact');
  };

  return (
    <section className="py-20 md:py-28 bg-[#090d18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {showTitle && (
          <div className="flex flex-col items-center text-center space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-widest font-semibold">
              <Zap className="w-3.5 h-3.5" />
              SPECIALIZED CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Services & Commercial Solutions
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              Crafted with deep WordPress craftsmanship, WooCommerce & Shopify engineering, and AI-accelerated workflows.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
          </div>
        )}

        {/* Services Grid (3 top, 2 bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 0 || index === 2;
            return (
              <div
                key={service.id}
                className={`group relative p-7 rounded-3xl bg-[#0c1122] border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                  isFeatured
                    ? 'border-orange-500/40 shadow-[0_0_30px_rgba(249,115,22,0.12)]'
                    : 'border-white/10 hover:border-orange-500/40'
                }`}
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 flex items-center justify-center p-2.5 text-orange-400 group-hover:scale-110 transition-transform shadow-md">
                      <Icon className="w-full h-full" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:border-orange-500/30 group-hover:text-orange-300 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5 mb-8 pt-3 border-t border-white/5">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  type="button"
                  onClick={() => handleInquire(service.title)}
                  className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 group-hover:bg-orange-500/20 border border-white/10 group-hover:border-orange-500/40 text-xs font-bold text-slate-200 group-hover:text-orange-300 transition-all duration-200 cursor-pointer"
                >
                  <span>Inquire for Project or Role</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Agency Retainer Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#0d1428] via-[#111936] to-[#0d1428] border border-orange-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest block">
              Agency Dedicated Partnerships
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Looking for a Reliable White-Label WordPress Developer?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              I partner with digital marketing, branding, and SEO agencies on a flexible monthly retainer or per-project basis. Deliver on time under your brand with complete confidentiality.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="shrink-0 px-6 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs sm:text-sm font-bold shadow-lg shadow-orange-500/30 transition-all cursor-pointer"
          >
            Schedule Agency Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
