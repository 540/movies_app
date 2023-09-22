import type { ReactElement } from 'react'
import type { RenderOptions, RenderResult } from '@testing-library/react'
import { render as rtlRender } from '@testing-library/react'

export const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => {
  return rtlRender(ui, options)
}
