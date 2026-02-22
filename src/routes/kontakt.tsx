import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '../components/PlaceholderPage'

export const Route = createFileRoute('/kontakt')({ component: KontaktPage })

function KontaktPage() {
  return <PlaceholderPage title="Kontakt" />
}
