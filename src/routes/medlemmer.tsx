import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '../components/PlaceholderPage'
import { members } from '../content/content'

export const Route = createFileRoute('/medlemmer')({ component: MedlemmerPage })

function MedlemmerPage() {
  return (
    <PlaceholderPage
      title="Medlemmer"
      description="Medlemmer som er publisert i korpsets medlemsoversikt."
    >
      <ul className="placeholder-page-list">
        {members.map((member) => (
          <li key={member.id} className="placeholder-page-list-item">
            <p className="placeholder-page-item-meta">{member.section}</p>
            <h2 className="placeholder-page-item-title">{member.name}</h2>
            <p className="placeholder-page-item-description">
              {member.role}{member.bio ? ` · ${member.bio}` : ''}
            </p>
          </li>
        ))}
      </ul>
    </PlaceholderPage>
  )
}
