import { apiCreditsRepository } from 'core/Credits/infrastructure/apiCreditsRepository'

export const creditsService = {
  actors: async (movieId: number) => {
    const result = await apiCreditsRepository.credits(movieId)
    return result.cast.filter(member => member.knownForDepartment === 'Acting')
  },
  crew: async (movieId: number) => (await apiCreditsRepository.credits(movieId)).crew
}
