import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '../components/PlaceholderPage'

export const Route = createFileRoute('/styret')({ component: StyretPage })

function StyretPage() {
  return <PlaceholderPage title="Styret" />
}
