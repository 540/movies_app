import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Margins, marginsCss } from 'ui/_styles/mixins/margins'
import { Color, colors } from 'ui/_styles/colors'
import { font, FontSize } from 'ui/_styles/mixins/font'
import { isUndefined } from 'lodash'

interface Props extends Margins {
  children: ReactNode
  as: string
  color?: Color
  size?: FontSize
  bold?: boolean
}

const RawText = ({ as: As, children }: Props) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <As>{children}</As>
  )
}

export const Text = styled(RawText)<Props>`
  ${marginsCss}

  ${p =>
    p.color &&
    css`
      color: ${colors[p.color]};
    `}

  ${p => p.size === 'tiny' && font.sizes.tiny()}
  ${p => p.size === 'small' && font.sizes.small()}
  ${p => p.size === 'large' && font.sizes.large()}
  ${p => p.size === 'medium' && font.sizes.medium()}
  ${p => p.size === 'nav' && font.sizes.nav()}
  ${p => p.size === 'h1' && font.sizes.h1()}
  ${p => p.size === 'base' && font.sizes.base()}
  ${p => p.size === 'button' && font.sizes.button()}
  ${p => p.size === 'buttonSmall' && font.sizes.buttonSmall()}
  ${p => isUndefined(p.size) && font.sizes.base()}

  font-weight: ${p => (p.bold ? 'bold' : 'normal')};
`
