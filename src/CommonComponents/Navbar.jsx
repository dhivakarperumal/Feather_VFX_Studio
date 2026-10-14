import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageContainer from './PageContainer';

const navLinks = [
  { label: 'HOME', id: 'home' },
  { label: 'ABOUT US', id: 'about-us' },
  { label: 'SERVICES', id: 'services' },
  { label: 'OUR WORK', id: 'projects' },
  { label: 'PROCESS', id: 'process' },
  { label: 'SHOWREEL', id: 'showreel' },
  { label: 'CAREERS', id: 'careers' },
  { label: 'BLOG', id: 'blog' },
  { label: 'CONTACT US', id: 'contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash);
  const { pathname } = useLocation();

  useEffect(() => {
    const updateActiveHash = () => setActiveHash(window.location.hash);
    window.addEventListener('hashchange', updateActiveHash);
    return () => window.removeEventListener('hashchange', updateActiveHash);
  }, []);

  const renderLink = (link, mobile = false) => {
    const isReelsPath = ['/reels', '/work', '/projects'].includes(pathname);
    const isFeaturedReelActive =
      isReelsPath && ['#featured-reel', '#showreel'].includes(activeHash);
    const isPageActive =
      (link.id === 'about-us' && pathname === '/about') ||
      (link.id === 'services' && pathname === '/services' && activeHash !== '#process') ||
      (link.id === 'process' && pathname === '/services' && activeHash === '#process') ||
      (link.id === 'contact' && pathname === '/contact') ||
        (link.id === 'careers' && pathname === '/careers') ||
        (link.id === 'blog' && pathname === '/blog') ||
        (link.id === 'projects' && isReelsPath && !isFeaturedReelActive) ||
        (link.id === 'showreel' && isFeaturedReelActive);
    const isActive = isPageActive || activeHash === `#${link.id}` || (!activeHash && pathname === '/' && link.id === 'home');

    return (
      <a
        key={link.id}
        href={
          link.id === 'contact'
            ? '/contact'
            : link.id === 'services'
              ? '/services'
            : link.id === 'process'
              ? '/services#process'
            : link.id === 'careers'
              ? '/careers'
              : link.id === 'about-us'
                ? '/about'
              : link.id === 'blog'
                ? '/blog'
              : link.id === 'projects'
                ? '/reels'
              : link.id === 'showreel'
                ? '/reels#featured-reel'
                : `/#${link.id}`
        }
        onClick={() => {
          setActiveHash(`#${link.id}`);
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
    <header className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/95 text-[var(--text-primary)] shadow-lg shadow-black/20 backdrop-blur-md">
      <nav aria-label="Main navigation">
        <PageContainer className="flex min-h-[76px] items-center justify-between gap-6 py-3">
        <a href="/#home" aria-label="Feather VFX Studio home" className="w-[170px] shrink-0 sm:w-[200px] lg:w-[220px]">
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
          className="hidden shrink-0 items-center gap-2 border border-[var(--gold-primary)] px-5 py-2.5 text-[11px] font-semibold tracking-[0.12em] text-[var(--gold-bright)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)] xl:flex"
        >
          LET&apos;S TALK
          <span aria-hidden="true">→</span>
        </a>

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
            className="mt-5 flex items-center justify-center gap-2 border border-[var(--gold-primary)] px-5 py-3 text-xs font-semibold tracking-[0.12em] text-[var(--gold-bright)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)]"
          >
            LET&apos;S TALK <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
