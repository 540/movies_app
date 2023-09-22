import { isUndefined } from './isUndefined'

export const isDefined = <T>(value: T | undefined): value is T =>
  !isUndefined(value)
