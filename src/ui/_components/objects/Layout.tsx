import styled from 'styled-components'
import { alignmentCss, Alignments, Margins, marginsCss } from 'ui/_styles/mixins/margins'

interface Props extends Margins, Alignments {
  backgroundColor?: string
  width?: number | string
}

export const Layout = styled.div<Props>`
  ${marginsCss};
  ${alignmentCss};

  display: flex;
  flex-direction: column;
  width: ${p => p.width ?? '100%'};
  background: transparent;
  padding-left: 5rem;
  padding-right: 5rem;
  @media (max-width: 600px) {
    padding: 0 1rem;
  } ;
`
