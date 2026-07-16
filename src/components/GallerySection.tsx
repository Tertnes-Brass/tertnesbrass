import { Link } from '@tanstack/react-router'
import { ArrowRight, Camera } from 'lucide-react'
import './GallerySection.css'

export default function GallerySection() {
  const galleryItems = [
    { image: '/images/gallery/photo-1.jpg', alt: 'Tertnes Brass konsert', span: 2 },
    { image: '/images/gallery/photo-2.jpg', alt: 'Tertnes Brass musikere', span: 2 },
    { image: '/images/gallery/photo-3.jpg', alt: 'Tertnes Brass øvelse', span: 1 },
    { image: '/images/gallery/photo-4.jpg', alt: 'Tertnes Brass arrangement', span: 1 },
    { image: '/images/gallery/photo-5.jpg', alt: 'Tertnes Brass fellesskap', span: 2 },
  ]

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="section-header">
          <div className="section-badge">
            <Camera className="ui-icon badge-icon" aria-hidden="true" />
            Bildealbum
          </div>
          <h2 className="section-title">Minner fra korpset</h2>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
              style={{ gridColumn: `span ${item.span}` }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="gallery-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="gallery-footer">
          <Link to="/nyheter" className="view-all-button link-with-icon">
            Se alle bilder
            <ArrowRight className="ui-icon link-icon" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
