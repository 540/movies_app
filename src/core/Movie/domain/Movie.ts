export class Movie {
  private _id: number
  private _title: string
  private _backdropUrl: string
  private _posterUrl: string
  private _description: string

  constructor({
    id,
    title,
    backdropUrl,
    posterUrl,
    description,
  }: {
    id: Movie['_id']
    title: Movie['_title']
    backdropUrl: Movie['_backdropUrl']
    posterUrl: Movie['_posterUrl']
    description: Movie['_description']
  }) {
    this._id = id
    this._title = title
    this._backdropUrl = backdropUrl
    this._posterUrl = posterUrl
    this._description = description
  }

  get id(): number {
    return this._id
  }

  get title(): string {
    return this._title
  }

  get backdropUrl(): string {
    return this._backdropUrl
  }

  get posterUrl(): string {
    return this._posterUrl
  }

  get description(): string {
    return this._description
  }
}
