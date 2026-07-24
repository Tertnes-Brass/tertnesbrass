import { Link } from '@tanstack/react-router'
import { Heart } from 'lucide-react'
import './SponsorCTA.css'

export default function SponsorCTA() {
  return (
    <section className="sponsor-cta">
      <div className="sponsor-container">
        <div className="decorative-blob blob-1"></div>
        <div className="decorative-blob blob-2"></div>
        <div className="decorative-blob blob-3"></div>

        <div className="sponsor-content">
          <div className="sponsor-badge">
            <Heart className="ui-icon badge-icon" aria-hidden="true" />
            Støtt kulturlivet
          </div>
          <h2 className="sponsor-heading">Bli en del av laget vårt</h2>
          <p className="sponsor-description">
            Som sponsor bidrar du til å holde brassmusikken levende i Bergen.
            Vi setter stor pris på støtte fra lokale bedrifter og enkeltpersoner
            som tror på kraften i musikk og fellesskap.
          </p>
          <div className="sponsor-buttons">
            <Link to="/stott-oss" className="button-gold">
              Bli sponsor
            </Link>
            <Link to="/om-oss" className="button-outline">
              Les mer
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
