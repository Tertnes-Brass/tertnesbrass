import { Link } from '@tanstack/react-router'
import {
  ArrowRight,
  Camera,
  Music2,
  Newspaper,
  PartyPopper,
  Trophy,
} from 'lucide-react'
import { news } from '../content/content'
import './NewsSection.css'

interface NewsCategoryIconProps {
  category: string
}

function NewsCategoryIcon({ category }: NewsCategoryIconProps) {
  const Icon = category === 'Konkurranse'
    ? Trophy
    : category === 'Korpsliv'
      ? PartyPopper
      : Music2

  return <Icon className="ui-icon" aria-hidden="true" />
}

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
          <div className="section-badge">
            <Newspaper className="ui-icon badge-icon" aria-hidden="true" />
            Siste nytt
          </div>
          <h2 className="section-title">Hva skjer hos oss?</h2>
        </div>

        <div className="news-grid">
          <div className="featured-news">
            <div className="featured-image" aria-hidden="true">
              <Camera className="ui-icon featured-image-icon" />
            </div>
            <div className="featured-content">
              <span className="news-tag">KONSERT</span>
              <h3 className="featured-title">{featuredNews.title}</h3>
              <p className="featured-description">{featuredNews.summary}</p>
              <Link to="/nyheter" className="read-more-link link-with-icon">
                Les mer
                <ArrowRight className="ui-icon link-icon" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="small-news">
            {smallNews.map((article) => (
              <div key={article.id} className="news-item">
                <div className="news-icon" aria-hidden="true">
                  <NewsCategoryIcon category={article.category} />
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
          <Link to="/nyheter" className="view-all-link link-with-icon">
            Se alle nyheter
            <ArrowRight className="ui-icon link-icon" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
