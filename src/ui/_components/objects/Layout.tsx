import styled from 'styled-components'
import { Margins, marginsCss } from 'ui/_styles/mixins/margins'

interface Props extends Margins {
  backgroundColor?: string
}

export const Layout = styled.div<Props>`
  ${marginsCss};

  display: flex;
  padding: 0 10rem;
  @media (max-width: 600px) {
    padding: 0 1rem;
  } ;
`
