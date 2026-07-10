import { useId, type ReactNode } from 'react'
import './PlaceholderPage.css'

interface PlaceholderPageProps {
  title: string
  description?: string
  children?: ReactNode
}

export function PlaceholderPage({
  title,
  description = 'Innhold kommer snart...',
  children,
}: PlaceholderPageProps) {
  const headingId = useId()

  return (
    <main className="placeholder-page" aria-labelledby={headingId}>
      <div className="placeholder-page-container">
        <h1 id={headingId} className="placeholder-page-title">
          {title}
        </h1>
        <p className="placeholder-page-description">{description}</p>
        {children}
      </div>
    </main>
  )
}
