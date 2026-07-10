import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '../components/PlaceholderPage'
import { news } from '../content/content'

export const Route = createFileRoute('/nyheter')({ component: NyheterPage })

function NyheterPage() {
  return (
    <PlaceholderPage
      title="Nyheter"
      description="Siste nytt fra konserter, konkurranser og korpslivet."
    >
      <ul className="placeholder-page-list">
        {news.map((article) => (
          <li key={article.id} className="placeholder-page-list-item">
            <p className="placeholder-page-item-meta">{article.category}</p>
            <h2 className="placeholder-page-item-title">{article.title}</h2>
            <p className="placeholder-page-item-description">{article.summary}</p>
          </li>
        ))}
      </ul>
    </PlaceholderPage>
  )
}
