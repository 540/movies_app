import { creditsService } from 'core/Credits/services/creditsService'
import { aCredits, aMemberCollection } from 'core/Credits/domain/builders/CreditsBuilder'
import { Department } from 'core/Credits/domain/Credits'
import { apiCreditsRepository } from 'core/Credits/infrastructure/apiCreditsRepository'

describe('creditsService', () => {
  it('returns the actors', async () => {
    const movieId = 1
    const actors = aMemberCollection(5, Department.Acting)
    jest.spyOn(apiCreditsRepository, 'credits').mockResolvedValue(aCredits(actors))

    const result = await creditsService.actors(movieId)

    expect(result).toEqual(actors)
  })

  it('does not return actors if there is no actors', async () => {
    const movieId = 1
    jest.spyOn(apiCreditsRepository, 'credits').mockResolvedValue(aCredits([]))

    const result = await creditsService.actors(movieId)

    expect(result).toHaveLength(0)
  })

  it('returns the crew', async () => {
    const movieId = 1
    const crew = aMemberCollection(5, Department.Crew)
    jest.spyOn(apiCreditsRepository, 'credits').mockResolvedValue(aCredits(undefined, crew))

    const result = await creditsService.crew(movieId)

    expect(result).toEqual(crew)
  })

  it('does not return crew if there is no crew', async () => {
    const movieId = 1
    jest.spyOn(apiCreditsRepository, 'credits').mockResolvedValue(aCredits(undefined, []))

    const result = await creditsService.crew(movieId)

    expect(result).toHaveLength(0)
  })
})
