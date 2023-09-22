export const envManager = {
  getTmdbBaseUrl: () => process.env.NEXT_PUBLIC_THE_MOVIE_DB_BASE_URL,
  getTmbdApiKey: () => process.env.NEXT_PUBLIC_THE_MOVIE_DB_API_KEY,
  getTmdbImageUrl: () => process.env.NEXT_PUBLIC_THE_MOVIE_DB_IMAGE_URL,
}

export type EnvManager = typeof envManager
