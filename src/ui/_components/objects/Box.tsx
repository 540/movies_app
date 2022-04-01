import styled, { css } from 'styled-components'
import { sizes, Spacing } from 'ui/_styles/size'

interface Props {
  horizontal?: Spacing
  vertical?: Spacing
}

export const Box = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: center;
  justify-content: center;

  ${props =>
    props.horizontal &&
    css`
      padding-left: ${sizes[props.horizontal]};
      padding-right: ${sizes[props.horizontal]};
    `}

  ${props =>
    props.vertical &&
    css`
      padding-top: ${sizes[props.vertical]};
      padding-bottom: ${sizes[props.vertical]};
    `}
`
