import { Container } from './types'
import { createContainer, InjectionMode } from 'awilix'
import { modules } from './modules'

export const container = createContainer<Container>({
  injectionMode: InjectionMode.PROXY,
})

export const inject = <T extends keyof Container>(module: T): Container[T] =>
  container.resolve<T>(module)

export const registerModules = () => container.register({ ...modules })
