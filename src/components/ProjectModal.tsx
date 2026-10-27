import React from 'react';
import { X, ExternalLink, Globe, Building2, Tag, Layers, CheckCircle2, AlertCircle } from 'lucide-react';
import { ProjectRecord } from '../data/projects';

interface ProjectModalProps {
  project: ProjectRecord | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0c1122] border border-orange-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pb-6 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/30">
              ID #{project.id}
            </span>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">
              {project.platform}
            </span>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              {project.category}
            </span>
            {project.isFeatured && (
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">
                ★ Featured
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.name}
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Meta Grid */}
        <div className="py-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#11172e] border border-white/5 space-y-1">
              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <Building2 className="w-3.5 h-3.5 text-orange-400" />
                Company / Source
              </span>
              <p className="text-sm font-bold text-white">{project.company}</p>
              <p className="text-[11px] text-slate-400">Contributed under agency/client engagement</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#11172e] border border-white/5 space-y-1">
              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <Layers className="w-3.5 h-3.5 text-orange-400" />
                CMS / Platform Stack
              </span>
              <p className="text-sm font-bold text-white">{project.platform}</p>
              <p className="text-[11px] text-slate-400">Responsive layout & speed optimized</p>
            </div>
          </div>

          {/* Website Link Section */}
          <div className="p-4 rounded-2xl bg-[#11172e] border border-white/5 space-y-2">
            <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
              <Globe className="w-3.5 h-3.5 text-orange-400" />
              Verified Website Address
            </span>

            {project.hasLiveUrl ? (
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs sm:text-sm text-orange-400 hover:text-orange-300 hover:underline break-all"
                >
                  {project.url}
                </a>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs font-bold shadow-lg shadow-orange-500/25 transition-all shrink-0"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ) : (
              <div className="flex items-center gap-2 pt-1 text-slate-400 text-xs font-mono">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Link unavailable (Internal client development or protected staging environment)</span>
              </div>
            )}
          </div>
        </div>

        {/* Audit Notice */}
        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-400 flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <span>
            Project record verified from Humaiz's verified client portfolio archive (Sr# {project.id}).
            Contribution reflects collaborative implementation, theme customization, or lead generation architecture through {project.company}.
          </span>
        </div>

        {/* Modal Footer */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
