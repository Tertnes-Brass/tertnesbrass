import './PlaceholderPage.css'

interface PlaceholderPageProps {
  title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="placeholder-page">
      <div className="placeholder-page-container">
        <h1 className="placeholder-page-title">{title}</h1>
        <p className="placeholder-page-description">Innhold kommer snart...</p>
      </div>
    </div>
  )
}
