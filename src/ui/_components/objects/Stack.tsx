import styled, { css } from 'styled-components'
import { sizes, Spacing } from 'ui/_styles/size'

interface Props {
  mainAxis?: string
  crossAxis?: string
  gap?: Spacing
}

export const Stack = styled.div<Props>`
  display: flex;
  flex-direction: column;

  ${p =>
    p.mainAxis &&
    css`
      justify-content: ${p.mainAxis};
    `}

  ${p =>
    p.crossAxis &&
    css`
      align-items: ${p.crossAxis};
    `}

  ${p =>
    p.gap &&
    css`
      gap: ${sizes[p.gap]};
    `}
`
