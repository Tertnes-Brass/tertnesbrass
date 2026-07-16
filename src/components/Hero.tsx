import { Link } from '@tanstack/react-router'
import { ArrowRight, Heart, Music2, Sparkles, Trophy, Users } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-images">
          <div className="image-main">
            <img
              src="/images/logo-380.png"
              srcSet="/images/logo-760.png 2x"
              alt="Tertnes Brass - Bergen's premier brass band since 1964"
              width="380"
              height="380"
              className="hero-logo-image"
            />
          </div>
          <div className="image-blob" aria-hidden="true">
            <Music2 className="ui-icon image-blob-icon" />
          </div>
          <div className="image-accent" aria-hidden="true">
            <Trophy className="ui-icon image-accent-icon" />
          </div>
          <div className="decorative-dot dot-1"></div>
          <div className="decorative-dot dot-2"></div>
          <div className="decorative-dot dot-3"></div>
          <div className="decorative-dot dot-4"></div>
          <div className="decorative-dot dot-5"></div>

          <div className="stats-box">
            <div className="stat-item">
              <Users className="ui-icon stat-icon" aria-hidden="true" />
              <span className="stat-text">35+ glade medlemmer</span>
            </div>
            <div className="stat-item">
              <Music2 className="ui-icon stat-icon" aria-hidden="true" />
              <span className="stat-text">61 år med musikk</span>
            </div>
            <div className="stat-item">
              <Heart className="ui-icon stat-icon" aria-hidden="true" />
              <span className="stat-text">100% lidenskap</span>
            </div>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="ui-icon badge-icon" aria-hidden="true" />
            Velkommen til oss
          </div>
          <h1 className="hero-heading">
            Et <span className="highlight-burgundy">varmt</span> fellesskap for{' '}
            <span className="highlight-gold">brass</span>-entusiaster
          </h1>
          <p className="hero-description">
            Tertnes Brass er mer enn bare et korps – vi er en familie som deler lidenskapen
            for brassmusikk. Siden 23. januar 1964 har vi skapt magiske øyeblikk gjennom musikk, vennskap
            og fellesskap i Bergen.
          </p>
          <div className="hero-buttons">
            <Link to="/om-oss" className="button-primary link-with-icon">
              Møt oss
              <ArrowRight className="ui-icon link-icon" aria-hidden="true" />
            </Link>
            <Link to="/program" className="button-secondary">
              Se program
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
