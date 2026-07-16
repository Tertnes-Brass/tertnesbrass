import {
  concerts as contentConcerts,
  formatConcertDate,
  type ConcertContent,
} from '../content/content'

export interface ConcertProgram {
  type: 'band' | 'piece'
  title: string
  composer?: string
  arranger?: string
}

export interface Concert {
  id: string
  title: string
  date: string
  time: string
  venue: string
  address: string
  image?: {
    src: string
    srcSet: string
    alt: string
  }
  description?: string
  program?: ConcertProgram[]
  ticketPrice?: string
  childrenFree?: boolean
  facebookEventUrl?: string
  status: 'confirmed' | 'tba'
}

function getResponsiveSource(image: string): string {
  if (image.includes('-380.')) {
    return `${image.replace('-380.', '-760.')} 2x`
  }

  return `${image} 2x`
}

export function toConcert(concert: ConcertContent): Concert {
  const isPlaceholder = concert.status === 'annonseres'

  return {
    id: concert.id,
    title: concert.title,
    date: formatConcertDate(concert.date),
    time: concert.time || 'TBA',
    venue: concert.venue,
    address: concert.address,
    image: concert.image
      ? {
          src: concert.image,
          srcSet: getResponsiveSource(concert.image),
          alt: concert.imageAlt || concert.title,
        }
      : undefined,
    description: concert.description,
    program: (concert.program ?? []).map((item) => ({
      type: item.kind === 'korps' ? 'band' : 'piece',
      title: item.label,
      composer: item.credit,
    })),
    ticketPrice: concert.ticketPrice || undefined,
    childrenFree: concert.childrenFree ?? false,
    facebookEventUrl: concert.facebookEventUrl || undefined,
    status: isPlaceholder ? 'tba' : 'confirmed',
  }
}

export const concerts: Concert[] = contentConcerts.map(toConcert)
