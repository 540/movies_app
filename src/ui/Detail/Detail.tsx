import { MovieDetail } from 'core/Movie/domain/MovieDetail'
import { Image, Layout, Stack, Text } from 'ui/_components'
import { constants } from 'ui/_utils/constants'

interface Props {
  movie?: MovieDetail
}

export const Detail = ({ movie }: Props) => {
  return (
    <Layout marginTop="medium">
      <Stack gap="large">
        <Image src={`${constants.imagePath}${movie?.posterPath}`} height={600} width={470} borderRadius={16} />
        <Stack gap="extrasmall">
          <Text as="div" bold size="large">
            {movie?.title}
          </Text>
          <Text as="i" size="medium">
            {movie?.originalTitle}
          </Text>
        </Stack>
      </Stack>
    </Layout>
  )
}
