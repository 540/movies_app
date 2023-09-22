import './di'
import { FC } from 'react'
import { container } from '@/core/Shared/_di'
import { Movie } from '@/core/Movie/domain/Movie'
import { Text } from '@/ui/components/atoms/Text'
import { Image } from '@/ui/components/atoms/Image'
import styles from './PopularMovies.module.scss'
import { ImageSize } from '@/core/Movie/infrastructure/ImageSize'

export const PopularMovies = async () => {
  const { popularMovies, highlightedMovie } = await container
    .resolve('getPopularMoviesAndItsHighlightUseCase')
    .execute()
  return (
    <div className={styles.container}>
      <picture className={styles.backdropContainer}>
        <Image
          src={`${container.resolve('envManager').getTmdbImageUrl()}/${
            ImageSize.backdrop.original
          }${highlightedMovie.backdropUrl}`}
          className={styles.backdrop}
          alt=""
          width={3840}
          height={2160}
          priority={true}
        />
        <div className={styles.backdropTitleContainer}>
          <Text
            fontStyle="4xl-500"
            color="light"
            className={styles.backdropTitle}
          >
            {highlightedMovie.title}
          </Text>
          <Text
            as="p"
            fontStyle="m-500"
            color="light"
            className={styles.backdropTitle}
          >
            {highlightedMovie.description}
          </Text>
        </div>
      </picture>
      <Text
        as="h1"
        fontStyle="3xl-700"
        color="dark"
        className={styles.popularMoviesTitle}
      >
        Popular Movies
      </Text>
      <div className={styles.grid}>
        {popularMovies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} isFirstSeen={index <= 3} />
        ))}
      </div>
    </div>
  )
}

interface MovieProps {
  movie: Movie
  isFirstSeen?: boolean
}

const MovieCard: FC<MovieProps> = ({ movie, isFirstSeen }) => {
  return (
    <div className={styles.cardContainer}>
      <Image
        src={`${container.resolve('envManager').getTmdbImageUrl()}/${
          ImageSize.poster.w342
        }${movie.posterUrl}`}
        alt=""
        width={185}
        height={278}
        priority={isFirstSeen}
      />
      <Text fontStyle="m-700" color="dark">
        {movie.title}
      </Text>
    </div>
  )
}
