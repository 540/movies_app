import styled, { css } from 'styled-components'
import { sizes, Spacing } from 'ui/_styles/size'
import { alignmentCss, Alignments } from 'ui/_styles/mixins/margins'

interface Props extends Alignments {
  gap?: Spacing
  flex?: number
}

export const Stack = styled.div<Props>`
  ${alignmentCss};

  display: flex;
  flex: ${props => props.flex ?? 1};
  flex-direction: column;

  ${p =>
    p.gap &&
    css`
      gap: ${sizes[p.gap]};
    `}
`
