import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel border-b border-charcoal-200/80 shadow-subtle py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 text-charcoal-900 font-semibold tracking-tight transition-colors hover:text-accent-600"
          >
            <span className="w-8 h-8 rounded-lg bg-charcoal-900 text-white flex items-center justify-center text-xs font-bold font-mono group-hover:bg-accent-600 transition-colors shadow-sm">
              AK
            </span>
            <span className="text-base sm:text-lg font-bold tracking-tight">
              {personalInfo.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-accent-700 bg-accent-50/80 font-semibold'
                      : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-100/60'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.cvPath}
              download="Asmita-Kafle-CV.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-charcoal-300 text-charcoal-800 bg-white hover:bg-charcoal-100 hover:border-charcoal-400 transition-all shadow-subtle"
            >
              <FileDown className="w-3.5 h-3.5 text-charcoal-600" />
              Download CV
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1 text-xs font-semibold px-3.5 py-2 rounded-lg bg-accent-600 text-white hover:bg-accent-700 transition-all shadow-subtle hover:shadow"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={personalInfo.cvPath}
              download="Asmita-Kafle-CV.pdf"
              className="p-2 text-charcoal-700 hover:text-charcoal-900"
              title="Download CV"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-charcoal-700 hover:text-charcoal-900 hover:bg-charcoal-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden border-b border-charcoal-200 bg-surface px-4 py-4 shadow-lg"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-charcoal-700 hover:text-accent-600 hover:bg-charcoal-100"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 border-t border-charcoal-200 flex flex-col gap-2">
                <a
                  href={personalInfo.cvPath}
                  download="Asmita-Kafle-CV.pdf"
                  className="w-full flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg border border-charcoal-300 text-charcoal-800 bg-charcoal-50"
                >
                  <FileDown className="w-4 h-4 text-charcoal-600" />
                  Download CV
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-accent-600 text-white"
                >
                  Get in Touch
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

