import { Link } from '@tanstack/react-router'
import { ChevronDown, X } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { SunIcon, MoonIcon } from './ThemeToggleIcons'

import './Header.css'

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img
            src="/images/logo-56.png"
            srcSet="/images/logo-112.png 2x"
            alt="Tertnes Brass logo"
            width="56"
            height="56"
            className="logo-image"
          />
          <div className="logo-text">
            <div className="logo-name">Tertnes Brass</div>
            <div className="logo-tagline">Bergen • Siden 1964</div>
          </div>
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link">Hjem</Link>
          <Link to="/program" className="nav-link">Program</Link>
          <Link to="/nyheter" className="nav-link">Nyheter</Link>
          <Link to="/medlemmer" className="nav-link">Medlemmer</Link>
          <Link to="/styret" className="nav-link">Styret</Link>
          <Link to="/om-oss" className="nav-link">Om oss</Link>

          <div className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
              aria-expanded={dropdownOpen}
              aria-controls="more-navigation"
            >
              Mer
              <ChevronDown
                className={`ui-icon dropdown-chevron${dropdownOpen ? ' open' : ''}`}
                aria-hidden="true"
              />
            </button>
            {dropdownOpen && (
              <div id="more-navigation" className="dropdown-menu">
                <Link to="/bli-medlem" className="dropdown-item">Bli medlem</Link>
                <Link to="/stott-oss" className="dropdown-item">Støtt oss</Link>
                <Link to="/kontakt" className="dropdown-item">Kontakt</Link>
              </div>
            )}
          </div>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Bytt til lys modus' : 'Bytt til mørk modus'}
          >
            <div className="theme-toggle-track">
              <div className="theme-toggle-icons">
                <MoonIcon className="theme-toggle-icon moon" />
                <SunIcon className="theme-toggle-icon sun" />
              </div>
              <div className="theme-toggle-knob" />
            </div>
          </button>
          <Link to="/bli-medlem" className="cta-button desktop-cta">
            Bli medlem
          </Link>
          <button
            className="hamburger-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Lukk meny' : 'Åpne meny'}
            aria-expanded={mobileMenuOpen}
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`} />
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`} />
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu} />
      )}

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Meny</span>
          <button
            className="mobile-menu-close"
            onClick={closeMobileMenu}
            aria-label="Lukk meny"
          >
            <X className="ui-icon mobile-menu-close-icon" aria-hidden="true" />
          </button>
        </div>
        <nav className="mobile-nav">
          <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
            Hjem
          </Link>
          <Link to="/program" className="mobile-nav-link" onClick={closeMobileMenu}>
            Program
          </Link>
          <Link to="/nyheter" className="mobile-nav-link" onClick={closeMobileMenu}>
            Nyheter
          </Link>
          <Link to="/medlemmer" className="mobile-nav-link" onClick={closeMobileMenu}>
            Medlemmer
          </Link>
          <Link to="/styret" className="mobile-nav-link" onClick={closeMobileMenu}>
            Styret
          </Link>
          <Link to="/om-oss" className="mobile-nav-link" onClick={closeMobileMenu}>
            Om oss
          </Link>
          <div className="mobile-nav-divider" />
          <Link to="/bli-medlem" className="mobile-nav-link" onClick={closeMobileMenu}>
            Bli medlem
          </Link>
          <Link to="/stott-oss" className="mobile-nav-link" onClick={closeMobileMenu}>
            Støtt oss
          </Link>
          <Link to="/kontakt" className="mobile-nav-link" onClick={closeMobileMenu}>
            Kontakt
          </Link>
        </nav>
        <div className="mobile-menu-footer">
          <Link to="/bli-medlem" className="cta-button mobile-cta" onClick={closeMobileMenu}>
            Bli medlem
          </Link>
        </div>
      </div>
    </header>
  )
}
