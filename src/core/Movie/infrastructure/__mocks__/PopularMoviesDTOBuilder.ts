import { PopularMoviesDTO } from '@/core/Movie/infrastructure/PopularMoviesDTO'

export class PopularMoviesDTOBuilder {
  private _id: number
  private _title: string
  private _backdrop_path: string
  private _poster_path: string
  private _overview: string

  constructor() {
    this._id = 1
    this._title = 'title'
    this._backdrop_path = 'backdrop_path'
    this._poster_path = 'poster_path'
    this._overview = 'overview'
  }

  withId(id: number): PopularMoviesDTOBuilder {
    this._id = id
    return this
  }

  withTitle(title: string): PopularMoviesDTOBuilder {
    this._title = title
    return this
  }

  withBackdropPath(backdrop_path: string): PopularMoviesDTOBuilder {
    this._backdrop_path = backdrop_path
    return this
  }

  withPosterPath(poster_path: string): PopularMoviesDTOBuilder {
    this._poster_path = poster_path
    return this
  }

  withOverview(overview: string): PopularMoviesDTOBuilder {
    this._overview = overview
    return this
  }

  build(): PopularMoviesDTO {
    return {
      data: {
        results: [
          {
            id: this._id,
            title: this._title,
            backdrop_path: this._backdrop_path,
            poster_path: this._poster_path,
            overview: this._overview,
          },
        ],
      },
    }
  }
}
