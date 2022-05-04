import { MovieDetail } from 'core/Movie/domain/MovieDetail'
import { Center, Image, Layout, PrimaryButton, Row, Stack, Text } from 'ui/_components'
import { constants } from 'ui/_utils/constants'
import { Member } from 'core/Credits/domain/Credits'
import { MemberList } from './_components/MemberList'

interface Props {
  movie?: MovieDetail
  actors?: Member[]
  goBack: () => void
  isFavorite: boolean
  toggleFavorite: (id: number) => void
}

export const Detail = ({ movie, actors, toggleFavorite, isFavorite, goBack }: Props) => {
  return (
    <Layout marginTop="large" crossAxis="center" width="1400px">
      <Row mainAxis="space-evenly" gap="medium">
        <Stack gap="large">
          <Image src={`${constants.imagePath}${movie?.posterPath}`} height={600} width={470} borderRadius={16} />
          <Stack gap="extrasmall">
            <Text as="div" bold size="large">
              {movie?.title}
            </Text>
            <Text as="i" size="medium">
              {movie?.originalTitle}
            </Text>
            <Text as="p" size="medium" color="titleEmphasis">
              Fecha de estreno: {movie?.releaseDate}
            </Text>
            <PrimaryButton onClick={() => toggleFavorite(movie!.id)}>
              <Text as="span" bold size="medium" pointer>
                {isFavorite ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
              </Text>
            </PrimaryButton>
            <Center>
              <Text as="div" size="large" marginTop="base" onClick={goBack}>
                Regresar
              </Text>
            </Center>
          </Stack>
        </Stack>
        <Stack flex={2}>
          <Text as="h1" bold size="h1">
            Resumen
          </Text>
          <Text as="p" size="large">
            {movie?.overview}
          </Text>
          <Text as="h1" bold size="h1">
            Reparto
          </Text>
          <MemberList actors={actors} />
        </Stack>
      </Row>
    </Layout>
  )
}
