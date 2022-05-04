import { useQuery } from 'react-query'

interface QueryOptions<Data> {
  onSuccess?: (data: Data) => void
  enabled?: boolean
}

export const useQueryService = <Data>(
  key: string,
  deps: any[],
  service: () => Promise<Data>,
  options: QueryOptions<Data> = {}
) =>
  useQuery<Data, Error>([key, ...deps], service, {
    retry: false,
    onSuccess: data => options.onSuccess?.(data),
    enabled: options.enabled ?? true
  })
