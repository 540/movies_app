import { modules } from './modules'

export type Modules = typeof modules

export type Container = {
  [P in keyof Modules]: ReturnType<Modules[P]['resolve']>
}
