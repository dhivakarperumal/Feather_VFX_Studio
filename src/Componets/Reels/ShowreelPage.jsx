import { Link } from 'react-router-dom';
import PageContainer from '../../CommonComponents/PageContainer';

const showreels = [
  {
    id: 'roto',
    title: 'Rotoscope',
    description: 'Precise, frame-by-frame artistry.',
    video: '/images/videos/rotoscope-showreel.mp4',
  },
  {
    id: 'prep',
    title: 'Prep & Cleanup',
    description: 'Clean plates. Seamless finishes.',
    video: '/images/videos/prep-cleanup-showreel.mp4',
  },
  {
    id: 'matchmove',
    title: 'Matchmove',
    description: 'Every camera move, perfectly tracked.',
    video: '/images/videos/matchmove-showreel.mp4',
  },
  {
    id: 'compositing',
    title: 'Compositing',
    description: 'The final touch that brings it all together.',
    video: '/images/videos/compositing-showreel.mp4',
  },
];

function ShowreelPage() {
  return (
    <div className="showreel-page">
      <header className="showreel-page__banner">
        <PageContainer className="showreel-page__banner-inner">
          <div className="showreel-page__banner-copy">
            <p className="showreel-page__banner-label">Feather VFX Studio</p>
            <h1>Showreel</h1>
            <nav aria-label="Breadcrumb" className="showreel-page__breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Showreel</span>
            </nav>
          </div>
          <span className="showreel-page__banner-mark" aria-hidden="true">FVX</span>
        </PageContainer>
      </header>

      <main className="showreel-page__main">
        <PageContainer className="showreel-page__content">
          <div className="showreel-page__intro">
            <p className="showreel-page__eyebrow">A selection of our craft</p>
            <h2>Work in <span>motion.</span></h2>
            <p>Explore the detail, precision, and imagination behind our visual effects.</p>
          </div>

          <div className="showreel-page__list">
            {showreels.map((reel, index) => (
              <article className="showreel-card" key={reel.id}>
                <div className="showreel-card__heading">
                  <span className="showreel-card__number">{String(index + 1).padStart(2, '0')}</span>
                  <div className="showreel-card__copy">
                    <p>Showreel / 0{index + 1}</p>
                    <h3>{reel.title}</h3>
                    <span>{reel.description}</span>
                  </div>
                  <span className="showreel-card__play" aria-hidden="true">PLAY REEL <span>↘</span></span>
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
