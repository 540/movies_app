import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { isEmpty } from '@/core/Shared/infrastructure/wrappers/isEmtpy'
import { isUndefined } from '@/core/Shared/infrastructure/wrappers/isUndefined'
import { isDefined } from '@/core/Shared/infrastructure/wrappers/isDefined'

export class ApiClient {
  headers = {}
  axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  private mergeConfigAndHeaders(config?: AxiosRequestConfig) {
    if (isUndefined(config) && isEmpty(this.headers)) {
      return undefined
    }

    if (isDefined(config) && isEmpty(this.headers)) {
      return config
    }

    if (isUndefined(config) && !isEmpty(this.headers)) {
      return {
        headers: this.headers,
      }
    }

    return {
      ...config,
      headers: {
        ...this.headers,
        ...config?.headers,
      },
    }
  }

  async get<P>(
    path: string,
    config?: AxiosRequestConfig,
  ): Promise<P & { data: P }> {
    return this.axiosInstance
      .get<P>(path, this.mergeConfigAndHeaders(config))
      .then<P & { data: P }>(response => ({
        ...response,
        ...response.data,
      }))
  }

  async post<P = void>(
    path: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<P & { data: P }> {
    return this.axiosInstance
      .post<P>(path, JSON.stringify(data), this.mergeConfigAndHeaders(config))
      .then<P & { data: P }>(response => ({
        ...response,
        ...response.data,
      }))
  }

  async put<P = void>(
    path: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<P & { data: P }> {
    return this.axiosInstance
      .put<P>(path, JSON.stringify(data), this.mergeConfigAndHeaders(config))
      .then<P & { data: P }>(response => ({
        ...response,
        ...response.data,
      }))
  }

  async patch<P = void>(
    path: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<P & { data: P }> {
    return this.axiosInstance
      .patch<P>(path, JSON.stringify(data), this.mergeConfigAndHeaders(config))
      .then<P & { data: P }>(response => ({
        ...response,
        ...response.data,
      }))
  }
}
