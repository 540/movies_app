import { Credits } from 'core/Credits/domain/Credits'

export interface CreditsRepository {
  credits: (movieId: number) => Promise<Credits>
}
