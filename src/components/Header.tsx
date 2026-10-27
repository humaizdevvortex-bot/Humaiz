import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { useRouter, PageRoute } from '../router';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; path: PageRoute; count?: string }[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects', count: '170+' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: PageRoute) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060913]/95 backdrop-blur-md border-b border-orange-500/20 py-3 shadow-2xl shadow-black/60'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Attractive Brand Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('/')}
            className="text-left focus:outline-none cursor-pointer"
            aria-label="Home"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Multi-Page Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#0e1424]/90 px-4 py-1.5 rounded-full border border-white/10 shadow-xl backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  type="button"
                  onClick={() => handleNavClick(link.path)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-orange-500/30 to-amber-500/20 border border-orange-500/50 shadow-md text-orange-300'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.count && (
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                      {link.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Direct Let's Talk CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNavClick('/contact')}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Hire Me / Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => handleNavClick('/contact')}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 sm:hidden"
            >
              Hire Me
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 px-3 rounded-2xl bg-[#0c101d] border border-orange-500/30 shadow-2xl space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                type="button"
                onClick={() => handleNavClick(link.path)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  currentPath === link.path
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {link.count && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-orange-500/20 text-orange-400">
                    {link.count}
                  </span>
                )}
              </button>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleNavClick('/contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 shadow-md shadow-orange-500/30"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Discuss Project / Remote Role</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
