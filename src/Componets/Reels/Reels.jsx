import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Box,
  Camera,
  Clapperboard,
  Film,
  Layers3,
  Mountain,
  Play,
  Search,
  Share2,
  ThumbsUp,
  Tv,
  X,
} from 'lucide-react';
import PageContainer from '../../CommonComponents/PageContainer';
import ModalPortal from '../../CommonComponents/ModalPortal';
import { behindScenesImages, featuredReels, reelCategories, workItems } from '../../data/reels';

const categoryDetails = {
  'All Reels': { Icon: Clapperboard, subtitle: 'View all' },
  VFX: { Icon: Layers3, subtitle: 'Visual effects' },
  CGI: { Icon: Box, subtitle: '3D & modeling' },
  Environments: { Icon: Mountain, subtitle: '3D worlds' },
  Commercial: { Icon: Camera, subtitle: 'Brand content' },
  'Film & Series': { Icon: Tv, subtitle: 'Movies & OTT' },
  'Behind the Scenes': { Icon: Film, subtitle: 'Studio life' },
};

function Reels() {
  const [activeCategory, setActiveCategory] = useState('All Reels');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('featured');
  const [activeReel, setActiveReel] = useState(featuredReels[0]);
  const [selectedWork, setSelectedWork] = useState(null);
  const [shareStatus, setShareStatus] = useState('');

  useEffect(() => {
    if (!selectedWork) return undefined;

    const body = document.body;
    const scrollY = window.scrollY;
    const originalStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    };
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedWork(null);
    };

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      Object.entries(originalStyles).forEach(([property, value]) => {
        body.style[property] = value;
      });
      window.scrollTo(0, scrollY);
    };
  }, [selectedWork]);

  const visibleWork = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const filtered = workItems.filter((item) => {
      const matchesCategory = activeCategory === 'All Reels'
        || item.category === activeCategory
        || item.type === activeCategory;
      const matchesSearch = !query
        || `${item.title} ${item.category} ${item.type}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });

    if (sortOrder === 'title') {
      return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }
    return filtered;
  }, [activeCategory, searchQuery, sortOrder]);

  const chooseCategory = (category) => setActiveCategory(category);

  const sharePage = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Feather VFX Studio Reels', url: window.location.href });
        return;
      }
      await navigator.clipboard.writeText(window.location.href);
      setShareStatus('Link copied');
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') return;
      setShareStatus('Unable to share this link from your browser.');
    }
  };

  return (
    <div className="reels-page">
      <section className="reels-hero">
        <div className="reels-hero__overlay" />
        <PageContainer className="reels-hero__inner">
          <div className="reels-hero__copy">
            <p className="reels-eyebrow">Showreels</p>
            <h1>
              Visual stories
              <span>in motion.</span>
            </h1>
            <p className="reels-hero__description">
              Watch our latest reels and explore the craft behind our visual effects, CGI, compositing, and more.
            </p>
            <div className="reels-hero__actions">
              <a href="#featured-reel" className="reels-primary-button">
                Play showreel <Play size={15} fill="currentColor" />
              </a>
              <span className="reels-runtime">
                <span className="reels-runtime__icon"><Play size={16} fill="currentColor" /></span>
                <span><strong>{featuredReels[0].duration}</strong><small>Studio showreel</small></span>
              </span>
            </div>
          </div>
        </PageContainer>
      </section>

      <PageContainer className="reels-content">
        <nav className="reels-categories" aria-label="Filter work by category">
          {reelCategories.map((category) => {
            const { Icon, subtitle } = categoryDetails[category];
            return (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? 'active' : ''}
                aria-pressed={activeCategory === category}
                onClick={() => chooseCategory(category)}
              >
                <Icon size={17} aria-hidden="true" />
                <span>{category}</span>
                <small>{subtitle}</small>
              </button>
            );
          })}
        </nav>

        <section className="work-section" aria-labelledby="work-section-title">
          <div className="work-section__heading">
            <div>
              <p className="reels-eyebrow">Our work</p>
              <h2 id="work-section-title">Explore <span>our work</span></h2>
            </div>
            <div className="work-controls">
              <label className="work-search">
                <span className="sr-only">Search reels</span>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search reels..."
                />
                <Search size={16} aria-hidden="true" />
              </label>
              <label className="work-sort">
                <span className="sr-only">Sort work</span>
                <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="title">Title A–Z</option>
                </select>
              </label>
            </div>
          </div>

          {visibleWork.length ? (
            <div className="work-grid">
              {visibleWork.map((item) => (
                <article className="work-card" key={item.id}>
                  <button
                    type="button"
                    className="work-card__image-button"
                    onClick={() => setSelectedWork(item)}
                    aria-label={`View ${item.title}`}
                  >
                    <img src={item.image} alt="" loading="lazy" />
                    <span className="work-card__play"><Play size={17} fill="currentColor" /></span>
                    <span className="work-card__more" aria-hidden="true">•••</span>
                  </button>
                  <div className="work-card__details">
                    <button type="button" onClick={() => setSelectedWork(item)} className="work-card__title">
                      {item.title}
                    </button>
                    <span className="work-card__category">{item.category}</span>
                    <span className="work-card__type">{item.type}</span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="work-empty">No work matched your search. Try another term or category.</p>
          )}
        </section>

        <section id="featured-reel" className="featured-reel" aria-labelledby="featured-reel-title" data-scroll-reveal>
          <div className="featured-reel__heading">
            <div>
              <p className="reels-eyebrow">Featured reel</p>
              <h2 id="featured-reel-title">{activeReel.category}</h2>
            </div>
            <span className="featured-reel__year">Feather VFX Studio</span>
          </div>

          <div className="featured-reel__layout">
            <div className="featured-reel__player">
              <video key={activeReel.video} controls preload="metadata" poster={activeReel.image}>
                <source src={activeReel.video} type="video/mp4" />
                Your browser does not support the video element.
              </video>
            </div>
            <div className="featured-reel__info">
              <h3>{activeReel.title}</h3>
              <p>
                A showcase of our work across visual effects, CGI, compositing, environments, and post-production.
              </p>
              <div className="featured-reel__actions" aria-label="Reel information">
                <span><Film size={15} /> Studio reel</span>
                <span><Play size={14} /> {activeReel.duration}</span>
                <button
                  type="button"
                  onClick={sharePage}
                  aria-label="Share showreel page"
                >
                  <Share2 size={15} /> Share
                </button>
                <span className="featured-reel__likes"><ThumbsUp size={15} /> Feather VFX</span>
              </div>
              {shareStatus && <p className="reels-share-status" role="status">{shareStatus}</p>}
            </div>
            <div className="featured-reel__playlist" aria-label="Choose a showreel">
              {featuredReels.map((reel) => (
                <button
                  key={reel.id}
                  type="button"
                  className={activeReel.id === reel.id ? 'active' : ''}
                  onClick={() => setActiveReel(reel)}
                >
                  <img src={reel.image} alt="" loading="lazy" />
                  <span><strong>{reel.title}</strong><small>{reel.duration}</small></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="behind-scenes" aria-labelledby="behind-scenes-title">
          <div className="behind-scenes__heading">
            <div>
              <p className="reels-eyebrow">Behind the scenes</p>
              <h2 id="behind-scenes-title">The art behind <span>the magic</span></h2>
            </div>
            <a href="/about" className="reels-outline-button">Meet the studio <ArrowRight size={14} /></a>
          </div>
          <div className="behind-scenes__gallery">
            {behindScenesImages.map(({ image, alt }) => (
              <img key={image} src={image} alt={alt} loading="lazy" />
            ))}
          </div>
        </section>

        <section className="reels-cta">
          <div>
            <p className="reels-eyebrow">Let&apos;s create something extraordinary together.</p>
            <h2>Have a project in mind?</h2>
            <p>We&apos;d love to hear from you and help bring your vision to life.</p>
          </div>
          <a href="/contact" className="reels-primary-button">Get in touch <ArrowRight size={15} /></a>
        </section>
      </PageContainer>

      {selectedWork && (
        <ModalPortal>
          <div className="work-lightbox" role="presentation" onClick={() => setSelectedWork(null)}>
            <section
              className="work-lightbox__dialog"
              role="dialog"
              aria-modal="true"
              aria-label={selectedWork.title}
              onClick={(event) => event.stopPropagation()}
            >
              <button type="button" className="work-lightbox__close" onClick={() => setSelectedWork(null)} aria-label="Close project preview">
                <X size={20} />
              </button>
              <video key={selectedWork.video} controls autoPlay playsInline poster={selectedWork.image}>
                <source src={selectedWork.video} type="video/mp4" />
                Your browser does not support the video element.
              </video>
              <div>
                <p className="reels-eyebrow">{selectedWork.category} · {selectedWork.type}</p>
                <h2>{selectedWork.title}</h2>
                <p className="work-lightbox__description">Watch a related Feather VFX Studio showreel.</p>
              </div>
            </section>
          </div>
        </ModalPortal>
      )}
    </div>
  );
}

export default Reels;
