import { Center, Image, Text } from 'ui/_components'
import { Movie } from 'core/Movie/domain/MovieResponse'
import styled from 'styled-components'
import { RatingBudge } from './_components/RatingBudge'
import { DetailSummary, Foreground } from 'ui/Home/_components/PosterList/_components/Foreground'
import { constants } from 'ui/_utils/constants'
import { MovieDetail } from 'core/Movie/domain/MovieDetail'

interface Props {
  movie: Movie | MovieDetail
}

export const Poster = ({ movie }: Props) => {
  return (
    <PosterRaw>
      <Center>
        <Image src={`${constants.imagePath}${movie.posterPath}`} height={340} width={240} borderRadius={10} />
        <RatingBudge rating={movie.voteAverage} />
      </Center>
      <Text as="div" color="titleEmphasis" marginLeft="small" size="medium" marginTop="small">
        {movie.releaseDate.substring(0, 4)}
      </Text>
      <Text as="div" marginLeft="small" size="large" marginTop="small">
        {movie.title}
      </Text>
      <DetailSummary movie={movie} />
    </PosterRaw>
  )
}

const PosterRaw = styled.div`
  position: relative;
  width: 260px;

  &:hover ${Foreground} {
    display: flex;
  }
`
