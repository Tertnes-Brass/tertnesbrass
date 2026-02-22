import { createFileRoute } from '@tanstack/react-router'
import { PlaceholderPage } from '../components/PlaceholderPage'

export const Route = createFileRoute('/om-oss')({ component: OmOssPage })

function OmOssPage() {
  return <PlaceholderPage title="Om oss" />
}
