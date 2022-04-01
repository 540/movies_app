import { Movie, MovieResponse, OriginalLanguage } from 'core/Movie/domain/MovieResponse'
import { MovieDetail } from 'core/Movie/domain/MovieDetail'

export const aMovie = (options: Partial<Movie>) => {
  const _default = {
    id: 1,
    title: `title`,
    overview: `overview`,
    posterPath: `posterPath`,
    releaseDate: `releaseDate`,
    originalTitle: `originalTitle`,
    backdropPath: `backdropPath`,
    adult: false,
    originalLanguage: OriginalLanguage.En,
    popularity: 1,
    voteAverage: 1,
    voteCount: 1
  }

  return Object.assign({}, _default, options)
}

export const aMovieDetail = (options?: Partial<MovieDetail>) => {
  const _default: MovieDetail = {
    id: 1,
    title: `title`,
    overview: `overview`,
    posterPath: `posterPath`,
    releaseDate: `releaseDate`,
    originalTitle: `originalTitle`,
    backdropPath: `backdropPath`,
    adult: false,
    originalLanguage: OriginalLanguage.En,
    popularity: 1,
    voteAverage: 1,
    voteCount: 1,
    genres: [],
    productionCompanies: [],
    productionCountries: [],
    status: `status`,
    tagline: `tagline`,
    runtime: 1,
    budget: 1,
    revenue: 1,
    homepage: `homepage`,
    belongsToCollection: {
      id: 1,
      name: `name`,
      posterPath: `posterPath`,
      backdropPath: `backdropPath`
    },
    video: true
  }

  return Object.assign({}, _default, options)
}

export const aMovieCollection = (size = 4) => {
  const movieResponse: MovieResponse = {
    page: 1,
    totalPages: 1,
    totalResults: 1,
    results: []
  }

  for (let i = 0; i < size; i++) {
    movieResponse.results.push({
      id: i,
      title: `title ${i}`,
      overview: `overview ${i}`,
      posterPath: `posterPath ${i}`,
      releaseDate: `releaseDate ${i}`,
      originalTitle: `originalTitle ${i}`,
      backdropPath: `backdropPath ${i}`,
      adult: false,
      originalLanguage: OriginalLanguage.En,
      popularity: i,
      voteAverage: i,
      voteCount: i
    })
  }

  return movieResponse
}
