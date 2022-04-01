import { css, CSSObject } from 'styled-components'
import { breakpoints } from '../breakpoints'

export const media = {
  tablet: (strings: CSSObject, ...args: any) => css`
    @media (min-width: ${breakpoints.tablet}px) {
      ${css(strings, ...args)};
    }
  `,
  desktop: (strings: CSSObject, ...args: any) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${css(strings, ...args)};
    }
  `,
  largeDesktop: (strings: CSSObject, ...args: any) => css`
    @media (min-width: ${breakpoints.largeDesktop}px) {
      ${css(strings, ...args)};
    }
  `
}
