import React, { useState, useMemo } from 'react';
import {
  ExternalLink,
  Search,
  Layers,
  Sparkles,
  ArrowRight,
  Globe,
  CheckCircle,
  Eye,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  ShieldCheck,
  Check
} from 'lucide-react';
import { ALL_PROJECTS, ProjectRecord } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import { getProjectScreenshot } from '../data/projectImages';
import { useRouter } from '../router';
import {
  WordPressIcon,
  ShopifyIcon,
  WooCommerceIcon,
  ElementorIcon
} from './BrandIcons';

interface ProjectsProps {
  initialViewMode?: 'featured' | 'all';
  showTitle?: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({
  initialViewMode = 'all',
  showTitle = true,
}) => {
  const { navigate } = useRouter();
  const [viewMode, setViewMode] = useState<'featured' | 'all'>(initialViewMode);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [selectedCompany, setSelectedCompany] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [includeDuplicates, setIncludeDuplicates] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectRecord | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Platform filters
  const platformOptions = ['All', 'WordPress', 'Shopify', 'WooCommerce', 'GoHighLevel', 'Webflow'];

  // Company filters
  const companyOptions = [
    'All',
    'DevVortex',
    'Rex Technologies',
    'Eliix Marketing',
    'Freelance (with partner)',
    'Duologiq',
  ];

  // Category filters
  const categoryOptions = [
    'All',
    'Healthcare & Medical',
    'Home Services & HVAC',
    'Real Estate & Construction',
    'E-Commerce & Retail',
    'Solar & Energy',
    'Tech, AI & Agency',
    'Logistics & Transport',
    'Hospitality & Lifestyle',
    'Corporate & Non-Profit',
  ];

  // Filtering logic
  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((proj) => {
      if (!includeDuplicates && proj.isDuplicate) {
        return false;
      }

      if (viewMode === 'featured' && !proj.isFeatured) {
        return false;
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = proj.name.toLowerCase().includes(query);
        const matchesUrl = proj.url.toLowerCase().includes(query);
        const matchesDesc = proj.description.toLowerCase().includes(query);
        const matchesCategory = proj.category.toLowerCase().includes(query);
        if (!matchesName && !matchesUrl && !matchesDesc && !matchesCategory) {
          return false;
        }
      }

      if (selectedPlatform !== 'All') {
        const pLower = proj.platform.toLowerCase();
        if (selectedPlatform === 'WooCommerce') {
          if (!pLower.includes('woocommerce')) return false;
        } else if (selectedPlatform === 'Shopify') {
          if (!pLower.includes('shopify')) return false;
        } else if (selectedPlatform === 'WordPress') {
          if (!pLower.includes('wordpress')) return false;
        } else if (selectedPlatform === 'GoHighLevel') {
          if (!pLower.includes('gohighlevel') && !pLower.includes('ghl')) return false;
        } else if (selectedPlatform === 'Webflow') {
          if (!pLower.includes('webflow')) return false;
        }
      }

      if (selectedCompany !== 'All') {
        if (!proj.company.toLowerCase().includes(selectedCompany.toLowerCase())) {
          return false;
        }
      }

      if (selectedCategory !== 'All') {
        if (proj.category !== selectedCategory) {
          return false;
        }
      }

      return true;
    });
  }, [
    viewMode,
    searchQuery,
    selectedPlatform,
    selectedCompany,
    selectedCategory,
    includeDuplicates,
  ]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(start, start + itemsPerPage);
  }, [filteredProjects, currentPage]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedPlatform('All');
    setSelectedCompany('All');
    setSelectedCategory('All');
    setCurrentPage(1);
  };

  const getPlatformIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes('shopify')) return <ShopifyIcon className="w-3.5 h-3.5" />;
    if (p.includes('woocommerce')) return <WooCommerceIcon className="w-4 h-3" />;
    if (p.includes('elementor')) return <ElementorIcon className="w-3.5 h-3.5" />;
    return <WordPressIcon className="w-3.5 h-3.5 text-[#3858e9]" />;
  };

  return (
    <section className="py-16 md:py-24 bg-[#080c18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {showTitle && (
          <div className="flex flex-col items-center text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-mono uppercase tracking-widest font-semibold">
              <Layers className="w-3.5 h-3.5" />
              PORTFOLIO ARCHIVE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              170+ Production Client Deliverables
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              Explore live verified websites engineered across WordPress, Elementor, WooCommerce, and Shopify for global businesses and digital marketing agencies.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
          </div>
        )}

        {/* View Mode Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0c1122] border border-white/10 mb-8 shadow-xl">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setViewMode('featured');
                setCurrentPage(1);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                viewMode === 'featured'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Featured Showcase</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/30 font-mono">
                {ALL_PROJECTS.filter((p) => p.isFeatured).length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setViewMode('all');
                setCurrentPage(1);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                viewMode === 'all'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Layers className="w-4 h-4 text-orange-400" />
              <span>Full Archive (170)</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/30 font-mono">
                {ALL_PROJECTS.length}
              </span>
            </button>
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-2 font-mono">
            <span>Displaying:</span>
            <strong className="text-orange-400 font-bold">{filteredProjects.length} websites</strong>
            <span>({includeDuplicates ? '170 raw entries' : '166 unique deployments'})</span>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="space-y-4 p-5 rounded-2xl bg-[#0c1122] border border-white/10 mb-10 shadow-lg">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by client name, industry, domain (e.g. Vein & Knee, Clean Roofing, Watches, HVAC)..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0f152a] border border-white/10 focus:border-orange-500/60 focus:outline-none text-sm text-white placeholder-slate-400 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">Platform / CMS</label>
              <select
                value={selectedPlatform}
                onChange={(e) => {
                  setSelectedPlatform(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 rounded-xl bg-[#0f152a] border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-orange-500/60 cursor-pointer"
              >
                {platformOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#0f152a] text-white">
                    {opt === 'All' ? 'All Platforms' : opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">Company / Source</label>
              <select
                value={selectedCompany}
                onChange={(e) => {
                  setSelectedCompany(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 rounded-xl bg-[#0f152a] border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-orange-500/60 cursor-pointer"
              >
                {companyOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#0f152a] text-white">
                    {opt === 'All' ? 'All Companies & Sources' : opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">Industry Sector</label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 rounded-xl bg-[#0f152a] border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-orange-500/60 cursor-pointer"
              >
                {categoryOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#0f152a] text-white">
                    {opt === 'All' ? 'All Industries' : opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5 text-xs">
            <label className="inline-flex items-center gap-2 text-slate-400 cursor-pointer">
              <input
                type="checkbox"
                checked={includeDuplicates}
                onChange={(e) => {
                  setIncludeDuplicates(e.target.checked);
                  setCurrentPage(1);
                }}
                className="rounded border-white/20 bg-[#0f152a] text-orange-500 focus:ring-orange-500"
              />
              <span className="text-[11px] font-mono">Include raw duplicates from 170 records (audit mode)</span>
            </label>

            {(searchQuery || selectedPlatform !== 'All' || selectedCompany !== 'All' || selectedCategory !== 'All') && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 font-medium cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Project Grid */}
        {paginatedProjects.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-[#0c1122] border border-white/10 space-y-4">
            <Layers className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No projects found matching current criteria</h3>
            <p className="text-xs text-slate-400">
              Try adjusting your search terms or clearing the selected filters.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-xl bg-orange-500/20 text-orange-300 border border-orange-500/40 text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProjects.map((project) => {
              const customScreenshot = getProjectScreenshot(project.id);
              return (
                <div
                  key={project.id}
                  className="group rounded-3xl bg-[#0c1122] border border-white/10 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Visual Card Showcase */}
                    {customScreenshot ? (
                      <div className="relative aspect-video overflow-hidden bg-black/40 border-b border-white/10 group-hover:brightness-105 transition-all">
                        <img
                          src={customScreenshot}
                          alt={`${project.name} website desktop preview`}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-3 right-3 flex items-center gap-1.5">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-amber-300 border border-amber-500/40 font-bold">
                            ★ Live Showcase
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Realistic browser frame for items without custom screenshot */
                      <div className="p-4 bg-gradient-to-br from-[#101732] via-[#0d1326] to-[#090d18] border-b border-white/10 relative">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-slate-300 border border-white/5">
                              #{project.id}
                            </span>
                          </div>
                        </div>

                        <div className="py-2.5 px-3 rounded-xl bg-[#060913]/90 border border-white/10 flex items-center justify-between">
                          <div className="truncate pr-2">
                            <p className="text-white font-bold text-xs truncate">
                              {project.name}
                            </p>
                            <p className="text-[9px] font-mono text-slate-400 truncate mt-0.5">
                              {project.hasLiveUrl ? project.url.replace(/^https?:\/\//, '') : 'Client Staging Portal'}
                            </p>
                          </div>
                          <div className="shrink-0">
                            {getPlatformIcon(project.platform)}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Content Body */}
                    <div className="p-5 space-y-3">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-orange-500/15 text-orange-300 border border-orange-500/25">
                          {getPlatformIcon(project.platform)}
                          <span>{project.platform}</span>
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                          {project.company}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                        {project.name}
                      </h3>

                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-slate-400" />
                        <span>Inspect Specs</span>
                      </button>

                      {project.hasLiveUrl ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 hover:from-orange-500/30 hover:to-amber-500/30 text-orange-300 border border-orange-500/40 text-xs font-bold transition-all shadow-sm cursor-pointer"
                        >
                          <span>Visit Website</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-[11px] font-mono text-slate-500 italic px-2 py-1">
                          Internal Client System
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0c1122] border border-white/10">
            <span className="text-xs text-slate-400 font-mono">
              Page {currentPage} of {totalPages} ({filteredProjects.length} matching websites)
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-white text-xs font-semibold transition-colors cursor-pointer"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  let pageNum = i + 1;
                  if (totalPages > 5 && currentPage > 3) {
                    pageNum = currentPage - 2 + i;
                    if (pageNum > totalPages) pageNum = totalPages - (4 - i);
                  }
                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                        currentPage === pageNum
                          ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/25'
                          : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-white text-xs font-semibold transition-colors cursor-pointer"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Project Specs Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
