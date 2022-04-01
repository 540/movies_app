import { css } from 'styled-components'

export type Color = keyof typeof colors

export const colors = {
  black: '#000',
  white: '#fff',
  titleEmphasis: '#2D8175',
  primary: '#db5563',
  accent: '#FCC828',
  backgroundGradient: css`
    background: linear-gradient(to right, #0c1426, #090e1f);
  `
}
