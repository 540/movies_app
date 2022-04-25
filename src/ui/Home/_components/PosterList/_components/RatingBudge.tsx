import styled from 'styled-components'
import { colors } from 'ui/_styles/colors'
import { Text } from 'ui/_components'

interface Props {
  rating: number
}

export const RatingBudge = ({ rating }: Props) => {
  return (
    <Budge>
      <Text as="span" color="black">
        {rating}
      </Text>
    </Budge>
  )
}

const Budge = styled.div`
  position: absolute;
  right: 0;
  top: 330px;
  height: 20px;
  width: 40px;
  text-align: center;
  border-radius: 10px;
  background-color: ${colors.accent};
`
