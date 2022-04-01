import { css } from 'styled-components'
import { sizes } from 'ui/_styles/size'

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
