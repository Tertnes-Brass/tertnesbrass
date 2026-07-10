export interface ConcertProgramItem {
  kind: 'korps' | 'verk'
  label: string
  credit: string
}

export interface ConcertContent {
  id: string
  title: string
  date: string
  time: string
  venue: string
  address: string
  description: string
  status: 'bekreftet' | 'avholdt' | 'annonseres' | 'utkast'
  published: boolean
  image: string
  imageAlt: string
  ticketPrice: string
  childrenFree: boolean
  facebookEventUrl: string
  program: ConcertProgramItem[]
}

export interface NewsContent {
  id: string
  title: string
  category: string
  summary: string
  image: string
  imageAlt: string
  featured: boolean
  published: boolean
  sortOrder: number
}

export interface MemberContent {
  id: string
  name: string
  role: string
  section: string
  bio: string
  image: string
  imageAlt: string
  published: boolean
  sortOrder: number
}

const concertModules = import.meta.glob<ConcertContent>('./concerts/*.json', {
  eager: true,
  import: 'default',
})

const newsModules = import.meta.glob<NewsContent>('./news/*.json', {
  eager: true,
  import: 'default',
})

const memberModules = import.meta.glob<MemberContent>('./members/*.json', {
  eager: true,
  import: 'default',
})

export const concerts = Object.values(concertModules)
  .filter((concert) => concert.published)
  .toSorted((a, b) => a.date.localeCompare(b.date))

export const news = Object.values(newsModules)
  .filter((article) => article.published)
  .toSorted((a, b) => a.sortOrder - b.sortOrder)

export const members = Object.values(memberModules)
  .filter((member) => member.published)
  .toSorted((a, b) => a.sortOrder - b.sortOrder)

export function formatConcertDate(date: string): string {
  return new Intl.DateTimeFormat('nb-NO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}

export function isUpcomingConcert(concert: ConcertContent, referenceDate = new Date()): boolean {
  const concertDate = new Date(`${concert.date}T23:59:59`)
  return concert.status === 'bekreftet' && concertDate >= referenceDate
}
