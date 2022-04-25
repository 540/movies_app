import styled, { css } from 'styled-components'
import { sizes, Spacing } from 'ui/_styles/size'
import { alignmentCss, Alignments, Margins, marginsCss } from 'ui/_styles/mixins/margins'

interface Props extends Alignments, Margins {
  gap?: Spacing
}

export const Row = styled.div<Props>`
  ${marginsCss};
  ${alignmentCss};

  display: flex;
  flex-direction: row;

  ${p =>
    p.gap &&
    css`
      gap: ${sizes[p.gap]};
    `}
`
