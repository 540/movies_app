import { createContainer, InjectionMode } from 'awilix'
import type { Container } from './container'

export const container = createContainer<Container>({
  injectionMode: InjectionMode.PROXY,
})
