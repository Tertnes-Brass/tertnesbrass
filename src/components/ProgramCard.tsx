import { useState } from 'react';
import {
  ArrowUpRight,
  CakeSlice,
  CalendarClock,
  CalendarDays,
  Clock3,
  Coffee,
  MapPin,
  Minus,
  Music2,
  Plus,
} from 'lucide-react';
import type { Concert } from '../data/concerts';
import './ProgramCard.css';

interface ProgramCardProps {
  concert: Concert;
}

export function ProgramCard({ concert }: ProgramCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isTBA = concert.status === 'tba';

  return (
    <div className={`program-card ${isExpanded ? 'expanded' : ''}`}>
      <button
        className="program-card-header"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Lukk detaljer' : 'Åpne detaljer'}
      >
        <div className="program-card-preview">
          {concert.image ? (
            <img
              src={concert.image.src}
              srcSet={concert.image.srcSet}
              alt={concert.image.alt}
              width="120"
              height="80"
              className="program-card-image"
              loading="lazy"
            />
          ) : (
            <div className="program-card-icon" aria-hidden="true">
              {isTBA ? (
                <CalendarClock className="ui-icon" />
              ) : (
                <Music2 className="ui-icon" />
              )}
            </div>
          )}

          <div className="program-card-info">
            <h3 className="program-card-title">{concert.title}</h3>
            <div className="program-card-meta">
              <span className="meta-item">
                <CalendarDays className="ui-icon meta-item-icon" aria-hidden="true" />
                {concert.date}
              </span>
              {concert.time !== 'TBA' && (
                <span className="meta-item">
                  <Clock3 className="ui-icon meta-item-icon" aria-hidden="true" />
                  {concert.time}
                </span>
              )}
              <span className="meta-item">
                <MapPin className="ui-icon meta-item-icon" aria-hidden="true" />
                {concert.venue}
              </span>
            </div>
          </div>

          <div className="expand-icon" aria-hidden="true">
            {isExpanded ? (
              <Minus className="ui-icon expand-control-icon" />
            ) : (
              <Plus className="ui-icon expand-control-icon" />
            )}
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="program-card-details">
          {isTBA ? (
            <div className="tba-message">
              <p className="tba-text">Mer info kommer snart</p>
              <p className="tba-description">
                {concert.description ||
                  'Vi jobber med å planlegge dette arrangementet. Følg med for oppdateringer!'}
              </p>
            </div>
          ) : (
            <>
              {concert.description && (
                <div className="detail-section">
                  <p className="concert-description">{concert.description}</p>
                </div>
              )}

              {concert.program && concert.program.length > 0 && (
                <div className="detail-section">
                  <h4 className="detail-heading">Program</h4>
                  <ul className="program-list">
                    {concert.program.map((item, index) => (
                      <li
                        key={index}
                        className={`program-item ${item.type === 'band' ? 'program-band' : 'program-piece'}`}
                      >
                        {item.type === 'band' && (
                          <Music2 className="ui-icon band-icon" aria-hidden="true" />
                        )}
                        <div className="program-content">
                          <strong className="program-title">{item.title}</strong>
                          {item.composer && (
                            <span className="program-meta"> - {item.composer}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="extra-info">
                    <span className="extra-info-icons" aria-hidden="true">
                      <Coffee className="ui-icon" />
                      <CakeSlice className="ui-icon" />
                    </span>
                    Kaffe og kake blir det og!
                  </p>
                </div>
              )}

              {(concert.ticketPrice || concert.childrenFree) && (
                <div className="detail-section">
                  <h4 className="detail-heading">Billetter</h4>
                  <p className="ticket-info">
                    {concert.ticketPrice && (
                      <span className="ticket-price">Inngangsbillett: {concert.ticketPrice}</span>
                    )}
                    {concert.childrenFree && (
                      <span className="ticket-note"> • Barn er gratis</span>
                    )}
                  </p>
                </div>
              )}

              {concert.facebookEventUrl && (
                <div className="detail-section">
                  <a
                    href={concert.facebookEventUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook-link link-with-icon"
                  >
                    Se arrangement på Facebook
                    <ArrowUpRight className="ui-icon link-icon" aria-hidden="true" />
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
