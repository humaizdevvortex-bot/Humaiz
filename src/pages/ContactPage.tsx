import React from 'react';
import { Contact } from '../components/Contact';
import { MessageSquare, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12 md:py-16 bg-[#070a12] border-b border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-mono uppercase tracking-widest font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            LET'S CONNECT
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Start a Project or Schedule an Interview
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Whether you need a custom website built for your business, an agency white-label partner, or are looking to hire a remote WordPress Developer & Lead, submit your details below.
          </p>
        </div>
      </section>

      {/* Contact Component with Dual Client/HR Options */}
      <Contact showTitle={false} />
    </div>
  );
};
