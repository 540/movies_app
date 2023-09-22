import { Movie } from '@/core/Movie/domain/Movie'

export interface MoviesRepository {
  findPopular: () => Promise<Movie[]>
}
