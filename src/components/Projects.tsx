import React, { useState, useMemo } from 'react';
import {
  ExternalLink,
  Search,
  Filter,
  Layers,
  Sparkles,
  ArrowRight,
  Globe,
  CheckCircle,
  Eye,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { ALL_PROJECTS, ProjectRecord } from '../data/projects';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [viewMode, setViewMode] = useState<'featured' | 'all'>('featured');
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
      // Duplication filter
      if (!includeDuplicates && proj.isDuplicate) {
        return false;
      }

      // View mode (featured vs all)
      if (viewMode === 'featured' && !proj.isFeatured) {
        return false;
      }

      // Search query
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

      // Platform filter
      if (selectedPlatform !== 'All') {
        const pLower = proj.platform.toLowerCase();
        const sLower = selectedPlatform.toLowerCase();
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

      // Company filter
      if (selectedCompany !== 'All') {
        if (!proj.company.toLowerCase().includes(selectedCompany.toLowerCase())) {
          return false;
        }
      }

      // Category filter
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

  // Reset pagination on filter change
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

  // Helper for mock layout visuals
  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case 'Healthcare & Medical':
        return {
          bg: 'from-blue-600/20 via-cyan-600/10 to-[#0c1122]',
          tag: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
          accent: '#38bdf8',
        };
      case 'Home Services & HVAC':
        return {
          bg: 'from-amber-600/20 via-orange-600/10 to-[#0c1122]',
          tag: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
          accent: '#f59e0b',
        };
      case 'E-Commerce & Retail':
        return {
          bg: 'from-emerald-600/20 via-teal-600/10 to-[#0c1122]',
          tag: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
          accent: '#10b981',
        };
      case 'Solar & Energy':
        return {
          bg: 'from-yellow-500/20 via-amber-600/10 to-[#0c1122]',
          tag: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
          accent: '#eab308',
        };
      case 'Real Estate & Construction':
        return {
          bg: 'from-orange-600/20 via-red-600/10 to-[#0c1122]',
          tag: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
          accent: '#f97316',
        };
      case 'Tech, AI & Agency':
        return {
          bg: 'from-purple-600/20 via-indigo-600/10 to-[#0c1122]',
          tag: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
          accent: '#a855f7',
        };
      default:
        return {
          bg: 'from-slate-700/20 via-slate-800/10 to-[#0c1122]',
          tag: 'bg-slate-500/15 text-slate-300 border-slate-500/30',
          accent: '#94a3b8',
        };
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#090d18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            CLIENT PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Verified Project Showcase
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Search and explore <strong className="text-white font-semibold">{ALL_PROJECTS.length} verified project records</strong> across WordPress, WooCommerce, Shopify, and modern web platforms.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
        </div>

        {/* View Mode Switcher (Featured vs All Projects) */}
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
              <span>All Projects Archive</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/30 font-mono">
                {ALL_PROJECTS.length}
              </span>
            </button>
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-2 font-mono">
            <span>Showing:</span>
            <strong className="text-orange-400 font-bold">{filteredProjects.length} results</strong>
            <span>({includeDuplicates ? '170 database records' : '166 unique websites'})</span>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-4 p-5 rounded-2xl bg-[#0c1122] border border-white/10 mb-10 shadow-lg">
          {/* Search Input Row */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by project name, industry, domain (e.g. Vein and Knee, HVAC, Roofing, Shopify)..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0f152a] border border-white/10 focus:border-orange-500/60 focus:outline-none text-sm text-white placeholder-slate-400 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Dropdowns & Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Platform Filter */}
            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">CMS / Platform</label>
              <select
                value={selectedPlatform}
                onChange={(e) => {
                  setSelectedPlatform(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 rounded-xl bg-[#0f152a] border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-orange-500/60"
              >
                {platformOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#0f152a] text-white">
                    {opt === 'All' ? 'All Platforms' : opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Company / Source Filter */}
            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">Company / Source</label>
              <select
                value={selectedCompany}
                onChange={(e) => {
                  setSelectedCompany(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 rounded-xl bg-[#0f152a] border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-orange-500/60"
              >
                {companyOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#0f152a] text-white">
                    {opt === 'All' ? 'All Companies & Sources' : opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Category / Industry Filter */}
            <div>
              <label className="block text-[11px] font-mono text-slate-400 mb-1">Industry Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 rounded-xl bg-[#0f152a] border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-orange-500/60"
              >
                {categoryOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#0f152a] text-white">
                    {opt === 'All' ? 'All Industries' : opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Filter Reset & Toggle Bar */}
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
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Project Cards Grid */}
        {paginatedProjects.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-[#0c1122] border border-white/10 space-y-4">
            <Layers className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No projects found matching current criteria</h3>
            <p className="text-xs text-slate-400">
              Try adjusting your search terms or clearing the selected platform/company filters.
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
              const theme = getCategoryTheme(project.category);
              return (
                <div
                  key={project.id}
                  className="group rounded-3xl bg-[#0c1122] border border-white/10 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Visual Card Banner (Browser frame style) */}
                    <div className={`p-4 bg-gradient-to-br ${theme.bg} border-b border-white/10 relative`}>
                      {/* Browser mock dots */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-slate-300 border border-white/5">
                            #{project.id}
                          </span>
                          {project.isFeatured && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">
                              ★ Featured
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Mock header title in browser frame */}
                      <div className="py-3 px-3.5 rounded-xl bg-[#080c18]/80 backdrop-blur-md border border-white/10">
                        <p className="text-white font-bold text-sm tracking-tight truncate">
                          {project.name}
                        </p>
                        <p className="text-[10px] font-mono text-slate-400 truncate mt-0.5">
                          {project.hasLiveUrl ? project.url.replace(/^https?:\/\//, '') : 'Internal Client Work'}
                        </p>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5 space-y-3">
                      {/* Meta Tags */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-500/15 text-orange-300 border border-orange-500/25">
                          {project.platform}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                          {project.company}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${theme.tag}`}>
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

                  {/* Card Actions Footer */}
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-slate-400" />
                        <span>Details</span>
                      </button>

                      {project.hasLiveUrl ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 border border-orange-500/40 text-xs font-bold transition-all shadow-sm cursor-pointer"
                        >
                          <span>Visit Website</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-[11px] font-mono text-slate-500 italic px-2 py-1">
                          Link unavailable
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
              Page {currentPage} of {totalPages} ({filteredProjects.length} total projects)
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-white text-xs font-semibold transition-colors"
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
                      className={`w-8 h-8 rounded-xl text-xs font-mono font-bold transition-all ${
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
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-white text-xs font-semibold transition-colors"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
