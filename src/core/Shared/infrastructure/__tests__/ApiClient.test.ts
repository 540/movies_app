import { mock, MockProxy } from 'jest-mock-extended'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ApiClient } from '@/core/Shared/infrastructure/ApiClient'

describe('Cliente API base', () => {
  let basicApiClient: ApiClient
  let mockAxiosInstance: MockProxy<AxiosInstance>

  beforeEach(() => {
    mockAxiosInstance = mock<AxiosInstance>()
    basicApiClient = new ApiClient(mockAxiosInstance)
  })

  it('llama a GET sin configuración adicional', async () => {
    const response = {
      data: {
        response: 'response',
      },
    }
    mockAxiosInstance.get.mockResolvedValue(response)

    const result = await basicApiClient.get('/test')

    expect(mockAxiosInstance.get).toHaveBeenCalledWith('/test', undefined)
    expect(result).toEqual({
      data: {
        response: 'response',
      },
      response: 'response',
    })
  })

  it('llama a GET con headers', async () => {
    mockAxiosInstance.get.mockResolvedValue({ data: undefined })
    const headers = {
      headers: {
        header: 'header',
      },
    }

    await basicApiClient.get('/test', headers)

    expect(mockAxiosInstance.get).toHaveBeenCalledWith('/test', headers)
  })

  it.each<['post' | 'patch' | 'put']>([['post'], ['patch'], ['put']])(
    'llama a %s sin configuración adicional',
    async method => {
      const response = {
        data: {
          response: 'response',
        },
      }
      mockAxiosInstance[method].mockResolvedValue(response)

      const result = await basicApiClient[method]('/test')

      expect(mockAxiosInstance[method]).toHaveBeenCalledWith(
        '/test',
        undefined,
        undefined,
      )
      expect(result).toEqual({
        data: {
          response: 'response',
        },
        response: 'response',
      })
    },
  )

  it.each<['post' | 'patch' | 'put']>([['post'], ['patch'], ['put']])(
    'llama a %s con datos',
    async method => {
      mockAxiosInstance[method].mockResolvedValue({ data: undefined })
      const data = { data: 'data' }

      await basicApiClient[method]('/test', data)

      expect(mockAxiosInstance[method]).toHaveBeenCalledWith(
        '/test',
        '{"data":"data"}',
        undefined,
      )
    },
  )

  it.each<['post' | 'patch' | 'put']>([['post'], ['patch'], ['put']])(
    'llama a %s con headers',
    async method => {
      mockAxiosInstance[method].mockResolvedValue({ data: undefined })
      const headers = {
        headers: {
          header: 'header',
        },
      }

      await basicApiClient[method]('/test', undefined, headers)

      expect(mockAxiosInstance[method]).toHaveBeenCalledWith(
        '/test',
        undefined,
        headers,
      )
    },
  )

  it('manda los headers configurados en cliente custom', async () => {
    mockAxiosInstance.get.mockResolvedValue({ data: undefined })
    const testApiClient = new TestApiClient(mockAxiosInstance)

    await testApiClient.addHeaders().get('/url')

    expect(mockAxiosInstance.get).toHaveBeenCalledWith('/url', {
      headers: {
        test: 'test',
      },
    })
  })

  it('manda los headers por llamada sin configurar ninguno en cliente custom', async () => {
    mockAxiosInstance.get.mockResolvedValue({ data: undefined })
    const testApiClient = new TestApiClient(mockAxiosInstance)

    await testApiClient.get('/url', {
      headers: {
        onlyThisUrl: 'onlyThisUrl',
      },
    })

    expect(mockAxiosInstance.get).toHaveBeenCalledWith('/url', {
      headers: {
        onlyThisUrl: 'onlyThisUrl',
      },
    })
  })

  it('mezcla los headers por llamada con headers configurados en clientes custom', async () => {
    mockAxiosInstance.get.mockResolvedValue({ data: undefined })
    const testApiClient = new TestApiClient(mockAxiosInstance)

    await testApiClient.addHeaders().get('/url', {
      headers: {
        onlyThisUrl: 'onlyThisUrl',
      },
    })

    expect(mockAxiosInstance.get).toHaveBeenCalledWith('/url', {
      headers: {
        test: 'test',
        onlyThisUrl: 'onlyThisUrl',
      },
    })
  })

  it('no manda headers en clientes custom', async () => {
    mockAxiosInstance.get.mockResolvedValue({ data: undefined })
    const testApiClient = new TestApiClient(mockAxiosInstance)

    await testApiClient.get('/url')

    expect(mockAxiosInstance.get).toHaveBeenCalledWith('/url', undefined)
  })

  it('manda headers por llamada cuando coinciden con configurados en clientes custom', async () => {
    mockAxiosInstance.get.mockResolvedValue({ data: undefined })
    const testApiClient = new TestApiClient(mockAxiosInstance)

    await testApiClient.addHeaders().get('/url', {
      headers: {
        test: 'onlyThisUrl',
      },
    })

    expect(mockAxiosInstance.get).toHaveBeenCalledWith('/url', {
      headers: {
        test: 'onlyThisUrl',
      },
    })
  })
})

class TestApiClient extends ApiClient {
  addHeaders() {
    this.headers = {
      test: 'test',
    }
    return this
  }

  async get<P>(
    path: string,
    config?: AxiosRequestConfig,
  ): Promise<P & { data: P }> {
    return super.get(path, config)
  }
}
