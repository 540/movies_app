import { Movie } from '@/core/Movie/domain/Movie'

export class MovieBuilder {
  private _id: number = 1
  private _title: string = 'title'
  private _backdropUrl: string = 'backdropUrl'
  private _posterUrl: string = 'posterUrl'
  private _description: string = 'description'

  withId(id: number): this {
    this._id = id
    return this
  }

  withTitle(title: string): this {
    this._title = title
    return this
  }

  withBackdropUrl(backdropUrl: string): this {
    this._backdropUrl = backdropUrl
    return this
  }

  withPosterUrl(posterUrl: string): this {
    this._posterUrl = posterUrl
    return this
  }

  withDescription(description: string): this {
    this._description = description
    return this
  }

  build(): Movie {
    return new Movie({
      id: this._id,
      title: this._title,
      backdropUrl: this._backdropUrl,
      posterUrl: this._posterUrl,
      description: this._description,
    })
  }

  buildSingleList(): Movie[] {
    return [
      new Movie({
        id: this._id,
        title: this._title,
        backdropUrl: this._backdropUrl,
        posterUrl: this._posterUrl,
        description: this._description,
      }),
    ]
  }
}
