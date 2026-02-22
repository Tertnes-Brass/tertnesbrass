import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '../components/PlaceholderPage'

export const Route = createFileRoute('/medlemmer')({ component: MedlemmerPage })

function MedlemmerPage() {
  return <PlaceholderPage title="Medlemmer" />
}
