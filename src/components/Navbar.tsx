import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { MediumIcon } from './Icons';

interface NavItem {
  id: string;
  name: string;
  num: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'projects', name: 'Work', num: '01', href: '#projects' },
  { id: 'experience', name: 'Experience', num: '02', href: '#experience' },
  { id: 'blog', name: 'Blog', num: '03', href: '#blog' },
  { id: 'skills', name: 'Skills', num: '04', href: '#skills' },
  { id: 'education', name: 'Education', num: '05', href: '#education' },
  { id: 'contact', name: 'Contact', num: '06', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
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
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[min(980px,94vw)]"
    >
      {/* Floating Cosmic Nav inspired by rosan.me */}
      <nav
        className="cosmic-nav rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2.5 text-[#f8fafc] font-semibold tracking-tight shrink-0"
        >
          <span className="w-8 h-8 rounded-full bg-[#161c2e] border border-[#1e2638] text-accent flex items-center justify-center text-xs font-bold font-mono transition-transform duration-300 group-hover:scale-110 group-hover:border-accent/40 shadow-glow">
            AK
          </span>
          <span className="hidden sm:inline-block text-sm font-bold tracking-tight text-[#f8fafc]">
            {personalInfo.name}
          </span>
          <span className="relative flex h-2 w-2 ml-0.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
        </a>

        {/* Center: Nav Items with Numbers as seen on rosan.me */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 font-mono text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-1.5 rounded-full transition-all duration-200 flex items-baseline gap-1.5 ${
                  isActive
                    ? 'text-accent font-semibold'
                    : 'text-[#94a3b8] hover:text-[#f8fafc]'
                }`}
              >
                <span className="text-[10px] text-faint">{item.num}</span>
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-[#161c2e] border border-accent/25 rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Actions: Medium, CV, Let's talk */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Medium Link */}
          <a
            href={personalInfo.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#161c2e] transition-all hover:scale-110"
            title="Read articles on Medium (@asmita.kafle67)"
            aria-label="Medium Profile"
          >
            <MediumIcon className="w-4 h-4 text-accent" />
          </a>

          {/* Download CV */}
          <a
            href={personalInfo.cvPath}
            download="Asmita-Kafle-CV.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-hairline bg-[#161c2e]/70 text-[#94a3b8] hover:text-[#f8fafc] hover:border-accent/40 transition-all hover:scale-105"
          >
            <FileDown className="w-3.5 h-3.5 text-accent" />
            <span>CV</span>
          </a>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden lg:inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-full bg-accent text-[#06080e] font-bold hover:bg-accent-light transition-all hover:scale-105 shadow-glow"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full border border-hairline text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#161c2e]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 rounded-3xl bg-[#0e121e]/95 backdrop-blur-xl border border-hairline p-5 shadow-2xl font-mono text-xs"
          >
            <div className="flex flex-col space-y-2.5">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center justify-between py-2 text-[#94a3b8] hover:text-[#f8fafc] border-b border-hairline/40"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[10px] text-faint">{item.num}</span>
                    <span>{item.name}</span>
                  </span>
                  <span className="text-accent text-[10px]">↗</span>
                </a>
              ))}
              <div className="pt-2 flex items-center justify-between gap-3">
                <a
                  href={personalInfo.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[11px] text-[#94a3b8] hover:text-[#f8fafc] py-2"
                >
                  <MediumIcon className="w-3.5 h-3.5 text-accent" />
                  <span>Medium</span>
                </a>
                <a
                  href={personalInfo.cvPath}
                  download="Asmita-Kafle-CV.pdf"
                  className="flex items-center gap-1.5 text-[11px] text-accent py-2 font-semibold"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
