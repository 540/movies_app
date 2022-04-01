import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'

export const renderScreen = (screen: JSX.Element) =>
  render(<QueryClientProvider client={new QueryClient()}>{screen}</QueryClientProvider>)
