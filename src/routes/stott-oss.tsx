import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '../components/PlaceholderPage'

export const Route = createFileRoute('/stott-oss')({ component: StottOssPage })

function StottOssPage() {
  return <PlaceholderPage title="Støtt oss" />
}
