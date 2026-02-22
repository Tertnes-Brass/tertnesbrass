import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '../components/PlaceholderPage'

export const Route = createFileRoute('/bli-medlem')({ component: BliMedlemPage })

function BliMedlemPage() {
  return <PlaceholderPage title="Bli medlem" />
}
