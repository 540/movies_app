export interface PopularMoviesDTO {
  data: {
    results: Array<{
      id: number
      title: string
      backdrop_path: string
      poster_path: string
      overview: string
    }>
  }
}
