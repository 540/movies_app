export const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3',
  apiKey: '3efb7bc41f0c0d2cf3c01df5fa8b37e5',
  params: {
    language: {
      en: 'en-US',
      es: 'es-ES'
    },
    page: (page: number) => page,
    include_adult: false
  }
}
