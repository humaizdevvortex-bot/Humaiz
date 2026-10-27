import React from 'react';
import {
  Globe,
  LayoutTemplate,
  ShoppingBag,
  Sparkles,
  Users2,
  ArrowRight,
  Check
} from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'wordpress-development',
      title: 'WordPress Website Development',
      badge: 'Core Expertise',
      icon: Globe,
      description:
        'Custom, mobile-responsive, and high-performance WordPress sites built with clean structure, reliable security, and SEO-friendly architectures.',
      features: [
        'Custom theme & layout development',
        'Speed & Core Web Vitals optimization',
        'Advanced contact & lead capture forms',
        'Security hardening & backup setup',
        'Cross-browser & mobile testing',
      ],
    },
    {
      id: 'elementor-redesign',
      title: 'Elementor Development & Redesign',
      badge: 'Visual Precision',
      icon: LayoutTemplate,
      description:
        'Transforming outdated websites or design references into modern, high-converting, pixel-perfect Elementor experiences that clients can easily manage.',
      features: [
        'Figma / reference site into Elementor',
        'Clean responsive breakpoints (Desktop, Tablet, Mobile)',
        'Custom header, footer & dynamic archive templates',
        'Zero bloat & widget pruning for fast load times',
        'User-friendly client editing handoff',
      ],
    },
    {
      id: 'ecommerce-customization',
      title: 'WooCommerce & Shopify Customization',
      badge: 'E-Commerce Stores',
      icon: ShoppingBag,
      description:
        'Complete online storefronts engineered for smooth checkout, organized product catalogs, secure payment processing, and high conversion rates.',
      features: [
        'WooCommerce setup & store architecture',
        'Shopify theme customization & styling',
        'Product variations, inventory & bulk uploads',
        'Stripe, PayPal & regional gateway integration',
        'Cart abandonment & checkout optimization',
      ],
    },
    {
      id: 'ai-assisted-vibe-coding',
      title: 'AI-Assisted Web Dev & Vibe Coding',
      badge: 'Rapid Prototyping',
      icon: Sparkles,
      description:
        'Leveraging Google AI Studio, prompt engineering, and modern React/Vite tooling to rapidly prototype, iterate, and deploy websites with unprecedented speed.',
      features: [
        'Rapid turn-around from design references',
        'AI-assisted layout generation & refactoring',
        'Modern React, Vite & Tailwind prototyping',
        'Human-in-the-loop QA & code review',
        'Instant Netlify & GitHub staging',
      ],
    },
    {
      id: 'white-label-agency',
      title: 'White-Label WordPress for Agencies',
      badge: 'Agency Partner',
      icon: Users2,
      description:
        'A dependable technical extension for digital marketing and SEO agencies. Confidential, disciplined, and strictly aligned with your agency standards.',
      features: [
        'Strict NDA & white-label delivery',
        'SEO-first URL structures & schema readiness',
        'Fast turnaround on client requests',
        'Consistent communication & team lead oversight',
        'Flexible project-based or monthly retainer',
      ],
    },
  ];

  const handleInquire = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#090d18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-widest">
            <span>WHAT I DO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Specialized Development Services
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Crafted with deep WordPress craftsmanship, modern frontend discipline, and AI-accelerated workflows.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
        </div>

        {/* Services Grid (3 columns top, 2 columns bottom for a balanced 5-card layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 0 || index === 3;
            return (
              <div
                key={service.id}
                className={`group relative p-7 rounded-3xl bg-[#0c1122] border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                  isFeatured
                    ? 'border-orange-500/40 shadow-[0_0_30px_rgba(249,115,22,0.12)]'
                    : 'border-white/10 hover:border-orange-500/40'
                }`}
              >
                {/* Glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 group-hover:bg-orange-500/15 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:text-amber-300 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
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
                  <div className="space-y-2 mb-8 pt-2 border-t border-white/5">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  type="button"
                  onClick={() => handleInquire(service.title)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 group-hover:bg-orange-500/20 border border-white/10 group-hover:border-orange-500/40 text-xs font-semibold text-slate-200 group-hover:text-orange-300 transition-all duration-200 cursor-pointer"
                >
                  <span>Inquire for Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
