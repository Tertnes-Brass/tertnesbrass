import { useId } from 'react'
import './PlaceholderPage.css'

interface PlaceholderPageProps {
  title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  const headingId = useId()

  return (
    <main className="placeholder-page" aria-labelledby={headingId}>
      <div className="placeholder-page-container">
        <h1 id={headingId} className="placeholder-page-title">
          {title}
        </h1>
        <p className="placeholder-page-description">Innhold kommer snart...</p>
      </div>
    </main>
  )
}
