import { Link } from 'react-router-dom';
import PageContainer from '../../CommonComponents/PageContainer';

const showreels = [
  { id: 'roto', title: 'Rotoscope Showreel', video: '/images/videos/rotoscope-showreel.mp4' },
  { id: 'prep', title: 'Prep & Cleanup Showreel', video: '/images/videos/prep-cleanup-showreel.mp4' },
  { id: 'matchmove', title: 'Matchmove Showreel', video: '/images/videos/matchmove-showreel.mp4' },
  { id: 'compositing', title: 'Compositing Showreel', video: '/images/videos/compositing-showreel.mp4' },
];

function ShowreelPage() {
  return (
    <div className="showreel-page">
      <header className="showreel-page__banner">
        <PageContainer>
          <h1>Showreel</h1>
          <nav aria-label="Breadcrumb" className="showreel-page__breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Showreel</span>
          </nav>
        </PageContainer>
      </header>

      <main className="showreel-page__main">
        <PageContainer className="showreel-page__content">
          <div className="showreel-page__intro">
            <p className="showreel-page__eyebrow">Feather VFX Studio</p>
            <h2>Our Showreels</h2>
            <p>A closer look at the craft behind every frame.</p>
          </div>

          <div className="showreel-page__list">
            {showreels.map((reel, index) => (
              <article className="showreel-card" key={reel.id}>
                <div className="showreel-card__heading">
                  <span className="showreel-card__number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{reel.title}</h3>
                </div>
                <div className="showreel-card__player">
                  <video
                    controls
                    preload="metadata"
                    poster="/images/videos/thumbnail.jpg"
                    aria-label={reel.title}
                  >
                    <source src={reel.video} type="video/mp4" />
                    Your browser does not support the video element.
                  </video>
                </div>
              </article>
            ))}
          </div>
        </PageContainer>
      </main>
    </div>
  );
}

export default ShowreelPage;
