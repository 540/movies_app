import { Member } from 'core/Credits/domain/Credits'
import styled from 'styled-components'
import { MemberCard } from 'ui/Detail/_components/MemberList/_components/MemberCard'

interface Props {
  actors?: Member[]
}

export const MemberList = ({ actors }: Props) => {
  return (
    <Container>
      {actors?.slice(0, 10)?.map(actor => (
        <MemberCard actor={actor} key={actor.id} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`
