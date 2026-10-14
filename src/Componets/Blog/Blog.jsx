import { useMemo, useState } from 'react';
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, Search, Sparkles } from 'lucide-react';
import PageContainer from '../../CommonComponents/PageContainer';
import { blogPosts } from '../../data/blogPosts';

const categories = [
  'All Posts',
  'VFX',
  'CGI',
  'Behind the Scenes',
  'Tutorials',
  'Industry News',
];

const popularTags = ['VFX', 'CGI', '3D Modeling', 'Composition', 'Animation', 'Behind the Scenes'];
const postsPerPage = 6;

const formatPostDate = (date) =>
  new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

function Blog() {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === 'All Posts' || post.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const visiblePosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 4);

  const changeCategory = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const changePage = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return (
    <div className="blog-page-shell">
      <section className="blog-hero" aria-label="Blog hero section">
        <div className="blog-hero__content">
          <div className="blog-hero__copy">
            <p className="blog-hero__eyebrow">OUR BLOG</p>
            <h1>
              INSIGHTS, TIPS & <span>VFX STORIES.</span>
            </h1>
            <p className="blog-hero__description">
              Explore the latest trends, behind-the-scenes stories, and industry insights from the Feather VFX Studio.
            </p>

            <label className="blog-search" htmlFor="blog-search-input">
              <input
                id="blog-search-input"
                type="search"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search articles..."
              />
              <button type="button" aria-label="Search articles">
                <Search size={18} />
              </button>
            </label>
          </div>

        </div>
      </section>

      <PageContainer className="pb-12 pt-8 sm:pt-10">
        <div className="blog-category-bar" aria-label="Blog categories" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? 'active' : ''}
              aria-pressed={activeCategory === category}
              onClick={() => changeCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="blog-layout">
          <div className="blog-feed" data-aos="fade-up" data-aos-delay="80">
            {visiblePosts.length ? (
              visiblePosts.map((article) => (
              <article key={article.id} className="blog-card">
                <div className="blog-card__image-wrap">
                  <img src={article.image} alt={article.title} />
                  <span className="blog-card__tag">{article.category}</span>
                </div>

                <div className="blog-card__body">
                  <h2>{article.title}</h2>
                  <p>{article.excerpt}</p>

                  <div className="blog-card__meta">
                    <span>
                      <CalendarDays size={14} />
                      {formatPostDate(article.date)}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <button type="button" className="blog-card__link">
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </article>
              ))
            ) : (
              <p className="blog-empty-state">No articles match your search. Try another keyword or category.</p>
            )}
          </div>

          <aside className="blog-sidebar" data-aos="fade-left" data-aos-delay="100">
            <div className="blog-panel">
              <div className="blog-panel__header">
                <div className="blog-panel__title-wrap">
                  <Sparkles size={18} />
                  <h3>Featured Posts</h3>
                </div>
                <button type="button">View All →</button>
              </div>

              <ul className="blog-feature-list">
                {featuredPosts.map((post) => (
                  <li key={post.id}>
                    <img src={post.image} alt={post.title} />
                    <div>
                      <h4>{post.title}</h4>
                      <span>{formatPostDate(post.date)}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="blog-panel">
              <div className="blog-panel__header blog-panel__header--stacked">
                <div className="blog-panel__title-wrap">
                  <Sparkles size={18} />
                  <h3>Popular Tags</h3>
                </div>
              </div>

              <div className="blog-tags">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => {
                      setActiveCategory(categories.includes(tag) ? tag : 'All Posts');
                      setSearchQuery(tag);
                      setCurrentPage(1);
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="blog-panel blog-panel--newsletter">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get the latest updates, tutorials, and exclusive content straight to your inbox.</p>

              <label className="newsletter-input" htmlFor="newsletter-email">
                <input id="newsletter-email" type="email" placeholder="Enter your email address" />
              </label>

              <button type="button" className="newsletter-submit">
                Subscribe
              </button>
            </div>
          </aside>
        </div>

        <div className="blog-pagination" aria-label="Pagination">
          <button
            type="button"
            className="page-arrow"
            aria-label="Previous page"
            disabled={currentPage === 1}
            onClick={() => changePage(currentPage - 1)}
          >
            <ChevronLeft size={18} />
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              type="button"
              className={currentPage === page ? 'page-number active' : 'page-number'}
              aria-current={currentPage === page ? 'page' : undefined}
              onClick={() => changePage(page)}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            className="page-arrow"
            aria-label="Next page"
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => changePage(currentPage + 1)}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <section className="blog-callout" aria-label="Stay updated callout" data-aos="zoom-in">
          <div className="blog-callout__text">
            <p className="blog-callout__eyebrow">STAY UPDATED</p>
            <h2>WITH OUR LATEST BLOGS</h2>
            <p>Get the latest VFX insights, tutorials, and studio updates delivered straight to your inbox.</p>
            <button type="button">Subscribe Now <ArrowRight size={16} /></button>
          </div>

          <div className="blog-callout__visual">
            <div className="headline-tag">STORIES • TIPS • INSPIRATION</div>
          </div>
        </section>
      </PageContainer>
    </div>
  );
}

export default Blog;
