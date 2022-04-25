import { Image, Text } from 'ui/_components'
import { constants } from 'ui/_utils/constants'
import { Member } from 'core/Credits/domain/Credits'
import styled from 'styled-components'

interface Props {
  actor: Member
}

export const MemberCard = ({ actor }: Props) => {
  return (
    <Container>
      {actor.profilePath ? (
        <Image src={`${constants.imagePath}${actor.profilePath}`} height={200} width={140} borderRadius={16} />
      ) : (
        <NoImage>No Image</NoImage>
      )}
      <Text as="div" size="medium" marginTop="small">
        {actor.name}
      </Text>
      <Text as="i" size="base">
        {actor.character}
      </Text>
    </Container>
  )
}

const Container = styled.div`
  width: 140px;
`

const NoImage = styled.div`
  display: flex;
  width: 140px;
  height: 200px;
  background-color: #000;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`
