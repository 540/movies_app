import { modules as movieModules } from '@/core/Movie/_di'
import { modules as sharedModules } from '@/core/Shared/_di'

export const modules = {
  ...movieModules,
  ...sharedModules,
}
