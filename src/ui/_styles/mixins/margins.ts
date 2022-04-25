import { css } from 'styled-components'
import { sizes } from 'ui/_styles/size'

type Alignment = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch'

export interface Alignments {
  mainAxis?: Alignment
  crossAxis?: Alignment
}

export const alignmentCss = css<Alignments>`
  justify-content: ${({ mainAxis }) => mainAxis};
  align-items: ${({ crossAxis }) => crossAxis};
`

export interface HorizontalMargins {
  marginRight?: keyof typeof sizes
  marginLeft?: keyof typeof sizes
}

export interface VerticalMargins {
  marginTop?: keyof typeof sizes
  marginBottom?: keyof typeof sizes
}

export type Margins = HorizontalMargins & VerticalMargins

export const horizontalMarginsCss = css<HorizontalMargins>`
  margin-right: ${p => p.marginRight && sizes[p.marginRight]};
  margin-left: ${p => p.marginLeft && sizes[p.marginLeft]};
`

export const verticalMarginsCss = css<VerticalMargins>`
  margin-top: ${p => p.marginTop && sizes[p.marginTop]};
  margin-bottom: ${p => p.marginBottom && sizes[p.marginBottom]};
`

export const marginsCss = css<HorizontalMargins & VerticalMargins>`
  ${horizontalMarginsCss}
  ${verticalMarginsCss}
`
