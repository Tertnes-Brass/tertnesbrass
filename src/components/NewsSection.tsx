import { Link } from '@tanstack/react-router'
import { news } from '../content/content'
import './NewsSection.css'

export default function NewsSection() {
  const featuredNews = news.find((article) => article.featured) ?? news[0]
  const smallNews = news.filter((article) => article.id !== featuredNews?.id).slice(0, 3)

  if (!featuredNews) {
    return null
  }

  return (
    <section className="news-section">
      <div className="news-container">
        <div className="section-header">
          <div className="section-badge">📰 Siste nytt</div>
          <h2 className="section-title">Hva skjer hos oss?</h2>
        </div>

        <div className="news-grid">
          <div className="featured-news">
            <div className="featured-image">📸</div>
            <div className="featured-content">
              <span className="news-tag">KONSERT</span>
              <h3 className="featured-title">{featuredNews.title}</h3>
              <p className="featured-description">{featuredNews.summary}</p>
              <Link to="/nyheter" className="read-more-link">
                Les mer →
              </Link>
            </div>
          </div>

          <div className="small-news">
            {smallNews.map((article) => (
              <div key={article.id} className="news-item">
                <div className="news-icon" aria-hidden="true">
                  {article.category === 'Konkurranse' ? '🏆' : article.category === 'Korpsliv' ? '🎊' : '🎵'}
                </div>
                <div className="news-item-content">
                  <span className="news-tag">{article.category.toUpperCase()}</span>
                  <h4 className="news-item-title">{article.title}</h4>
                  <p className="news-item-description">{article.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="news-footer">
          <Link to="/nyheter" className="view-all-link">
            Se alle nyheter →
          </Link>
        </div>
      </div>
    </section>
  )
}
