import { modules as movieModules } from '@/core/Movie/_di'
import { modules as sharedModules } from '@/core/Shared/_di/registerModules'

const modules = {
  ...movieModules,
  ...sharedModules,
}

export type Container = {
  [P in keyof typeof modules]: ReturnType<(typeof modules)[P]['resolve']>
}
