import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  margin-top: 50px;
  margin-bottom: 50px;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
  grid-gap: 3rem;
`
