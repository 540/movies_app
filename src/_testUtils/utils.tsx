import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'

export const renderScreen = (screen: JSX.Element) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 0,
        retry: false
      }
    }
  })

  return render(<QueryClientProvider client={queryClient}>{screen}</QueryClientProvider>)
}
