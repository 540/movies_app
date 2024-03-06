import { Container, Modules } from '../types'
import { container } from '../container'
import { asFunction } from '../resolvers'
import { mock, MockProxy } from 'jest-mock-extended'
import { modules } from '@/_di/modules'
import { Resolver } from 'awilix/lib/resolvers'

const registerMockModule = <ModuleName extends keyof Modules>(
  moduleName: ModuleName,
): MockProxy<Container[ModuleName]> => {
  const mockedModule = mock<Container[ModuleName]>()

  container.register({
    [moduleName]: asFunction<Container[ModuleName]>(() => mockedModule),
  })

  return mockedModule
}

export type MockedModules = {
  [ModuleName in keyof Modules]: MockProxy<Container[ModuleName]>
}

export const registerMockModules = () => {
  const moduleNames = Object.keys(modules) as (keyof typeof modules)[]
  return Object.fromEntries(
    moduleNames.map(moduleName => [moduleName, registerMockModule(moduleName)]),
  ) as MockedModules
}

export const registerModule = <ModuleName extends keyof Modules>(
  moduleName: ModuleName,
  module: Resolver<Container[ModuleName]>,
): void => {
  container.register({ [moduleName]: module })
}
