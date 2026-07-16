import { describe, expect, it } from 'vitest'
import type { ConcertContent } from '../content/content'
import { toConcert } from './concerts'

const minimalConcert: ConcertContent = {
  id: 'sommer-2026',
  title: 'Annonseres senere',
  date: '2026-07-01',
  venue: 'Sted kommer snart',
  address: 'Bergen',
  description: 'Sommerkonsert i sentrum for å avslutte en flott sesong!',
  status: 'annonseres',
  published: true,
}

describe('toConcert', () => {
  it('handles optional fields omitted by Pages CMS', () => {
    const concert = toConcert(minimalConcert)

    expect(concert.time).toBe('TBA')
    expect(concert.program).toEqual([])
    expect(concert.image).toBeUndefined()
    expect(concert.ticketPrice).toBeUndefined()
    expect(concert.childrenFree).toBe(false)
    expect(concert.facebookEventUrl).toBeUndefined()
  })

  it('uses the concert title when an uploaded image has no alt text', () => {
    const concert = toConcert({
      ...minimalConcert,
      image: '/images/uploads/concerts/sommerkonsert.webp',
    })

    expect(concert.image?.alt).toBe(minimalConcert.title)
  })
})
