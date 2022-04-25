export interface MovieResponse {
  page: number
  totalResults: number
  totalPages: number
  results: Movie[]
}

export interface Movie {
  id: number
  adult: boolean
  backdropPath: string
  originalLanguage: OriginalLanguage
  originalTitle: string
  overview: string
  popularity: number
  posterPath: string
  releaseDate: string
  title: string
  voteAverage: number
  voteCount: number
}

export const instanceOfMovieResponse = (data: any): data is MovieResponse => {
  return 'page' in data
}

export enum OriginalLanguage {
  En = 'en',
  Hi = 'hi',
  Ru = 'ru'
}
