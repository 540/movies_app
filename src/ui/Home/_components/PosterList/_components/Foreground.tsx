import styled from 'styled-components'
import { Box, PrimaryButton, Text } from 'ui/_components'
import { Movie } from 'core/Movie/domain/MovieResponse'
import Link from 'next/link'

interface Props {
  movie: Movie
}

export const DetailSummary = ({ movie }: Props) => (
  <Foreground>
    <Text as="div" bold size="medium">
      {movie.title}
    </Text>
    <Text as="i" bold size="base">
      {movie.originalTitle}
    </Text>
    <Text as="p" bold size="medium" color="titleEmphasis">
      {movie.releaseDate}
    </Text>
    <Link href={`/detail/${movie.id}`}>
      <Box horizontal="base">
        <PrimaryButton>
          <Text as="span" size="medium">
            Ver Detalles
          </Text>
        </PrimaryButton>
      </Box>
    </Link>
  </Foreground>
)

export const Foreground = styled.div`
  display: none;
  flex-direction: column;
  text-align: center;
  position: absolute;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(9, 14, 31, 0.7);
`
