import { Movie } from 'core/Movie/domain/MovieResponse'

export interface MovieDetail extends Movie {
  belongsToCollection: BelongsToCollection
  budget: number
  genres: Genre[]
  homepage: string
  productionCompanies: ProductionCompany[]
  productionCountries: ProductionCountry[]
  revenue: number
  runtime: number
  status: string
  tagline: string
  video: boolean
}

export interface BelongsToCollection {
  id: number
  name: string
  posterPath: string
  backdropPath: string
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  id: number
  logoPath: string
  name: string
  originCountry: string
}

export interface ProductionCountry {
  name: string
}
