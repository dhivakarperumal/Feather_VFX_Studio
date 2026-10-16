import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import PageContainer from './PageContainer';
import { useTheme } from '../ThemeContext';

const navLinks = [
  { label: 'HOME', id: '' },
  { label: 'ABOUT US', id: 'about-us' },
  { label: 'PROJECTS', id: 'projects' },
  { label: 'SERVICES', id: 'services' },
  { label: 'SHOWREEL', id: 'showreel' },
  { label: 'CAREERS', id: 'careers' },
  { label: 'BLOG', id: 'blog' },
  { label: 'CONTACT US', id: 'contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const updateActiveHash = () => setActiveHash(window.location.hash);
    window.addEventListener('hashchange', updateActiveHash);
    return () => window.removeEventListener('hashchange', updateActiveHash);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    // Set initial state in case page loads scrolled
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderLink = (link, mobile = false) => {
    const isReelsPath = ['/reels', '/work', '/projects', '/showreel'].includes(pathname);
    const isFeaturedReelActive =
      isReelsPath && ['#featured-reel', '#showreel'].includes(activeHash);
    const isPageActive =
      (link.id === 'about-us' && pathname === '/about') ||
      (link.id === 'projects' && pathname === '/projects') ||
      (link.id === 'services' && pathname === '/services' && activeHash !== '#process') ||
      (link.id === 'process' && pathname === '/services' && activeHash === '#process') ||
      (link.id === 'contact' && pathname === '/contact') ||
        (link.id === 'careers' && pathname === '/careers') ||
        (link.id === 'blog' && pathname === '/blog') ||
        (link.id === 'projects' && isReelsPath && !isFeaturedReelActive && pathname !== '/showreel') ||
        (link.id === 'showreel' && (isFeaturedReelActive || pathname === '/showreel'));
    const isHomeLink = link.id === '';
    const isActive =
      isPageActive ||
      (!isHomeLink && activeHash === `#${link.id}`) ||
      (isHomeLink && pathname === '/' && !activeHash);
    const serviceHref = pathname === '/' ? '/services' : '/services';

    return (
      <a
        key={link.id}
        href={
          isHomeLink
            ? '/'
            : link.id === 'contact'
            ? '/contact'
            : link.id === 'services'
              ? serviceHref
            : link.id === 'process'
              ? '/services#process'
            : link.id === 'careers'
              ? '/careers'
              : link.id === 'about-us'
                ? '/about'
              : link.id === 'projects'
                ? '/projects'
              : link.id === 'blog'
                ? '/blog'
              : link.id === 'projects'
                ? '/reels'
              : link.id === 'showreel'
                ? '/showreel'
                : `/#${link.id}`
        }
        onClick={() => {
          setActiveHash(link.id ? `#${link.id}` : '');
          setIsMobileMenuOpen(false);
        }}
        aria-current={isActive ? 'page' : undefined}
        className={`relative whitespace-nowrap font-medium tracking-[0.08em] text-[var(--text-primary)] transition-colors duration-200 hover:text-[var(--gold-primary)] ${
          mobile
            ? 'block border-b border-white/10 px-1 py-3 text-sm'
            : 'py-2 text-[11px] 2xl:text-xs'
        } ${isActive ? '!text-[var(--gold-primary)]' : ''}`}
      >
        {link.label}
        {!mobile && isActive && (
          <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[var(--gold-primary)]" />
        )}
      </a>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 text-[var(--text-primary)] transition-all duration-300 ${
        isScrolled
          ? 'border-b border-[var(--gold-primary)]/20 bg-[var(--bg-primary)]/98 shadow-xl shadow-black/40 backdrop-blur-xl'
            : 'border-b border-[var(--border-color)] bg-[var(--bg-header)]/95 shadow-lg shadow-black/20 backdrop-blur-md'
      }`}
    >
      <nav aria-label="Main navigation">
        <PageContainer
          className={`flex items-center justify-between gap-6 transition-all duration-300 ${
            isScrolled ? 'min-h-[56px] py-1.5' : 'min-h-[76px] py-3'
          }`}
        >
        <a
          href="/"
          aria-label="Feather VFX Studio home"
          className={`shrink-0 transition-all duration-300 ${
            isScrolled ? 'w-[140px] sm:w-[160px] lg:w-[185px]' : 'w-[170px] sm:w-[200px] lg:w-[220px]'
          }`}
        >
          <img
            src="/images/logo.png"
            alt="Feather VFX Studio"
            className="block h-auto w-full object-contain"
          />
        </a>

        <div className="hidden items-center gap-4 xl:flex 2xl:gap-6">
          {navLinks.map((link) => renderLink(link))}
        </div>

        <a
          href="/contact"
          onClick={() => setActiveHash('#contact')}
          className="btn-shimmer hidden shrink-0 items-center gap-2 border border-[var(--gold-primary)] px-5 py-2.5 text-[11px] font-semibold tracking-[0.12em] text-[var(--gold-bright)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)] xl:flex"
        >
          LET&apos;S TALK
          <span aria-hidden="true">→</span>
        </a>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          aria-pressed={theme === 'light'}
          className="theme-toggle inline-flex h-10 w-10 shrink-0 items-center justify-center rounded border border-[var(--gold-primary)]/60 text-[var(--gold-primary)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--button-text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold-primary)]"
        >
          {theme === 'dark' ? (
            <Moon aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Sun aria-hidden="true" className="h-5 w-5" />
          )}
        </button>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded border border-[var(--border-color)] p-2 text-[var(--text-primary)] transition hover:border-[var(--gold-primary)] hover:text-[var(--gold-primary)] xl:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? (
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M9 18h11" />
            </svg>
          )}
        </button>
        </PageContainer>
      </nav>

      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] px-6 pb-5 pt-2 xl:hidden">
          {navLinks.map((link) => renderLink(link, true))}
          <a
            href="/contact"
            onClick={() => {
              setActiveHash('#contact');
              setIsMobileMenuOpen(false);
            }}
            className="btn-shimmer mt-5 flex items-center justify-center gap-2 border border-[var(--gold-primary)] px-5 py-3 text-xs font-semibold tracking-[0.12em] text-[var(--gold-bright)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)]"
          >
            LET&apos;S TALK <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
