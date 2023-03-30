import { API_URL } from '@env'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
console.log('API_URL>', API_URL)
export async function apiHandler<T = any>(
  params: AxiosRequestConfig,
): Promise<AxiosResponse<T>> {
  try {
    const apiEndpoint = API_URL
    const request = axios.create({
      baseURL: apiEndpoint,
      timeout: 60 * 1000,
    })

    const res = await request.request<T>({ ...params })
    return res
  } catch (error) {
    const resError = error as AxiosError

    throw resError
  }
}
/* -------------------------- Get charity API -------------------------- */
/**
 * callUserLogin [Post]
 */
export const callUserLogin = (postData: AxiosRequestConfig) =>
  apiHandler({
    url: '/login',
    method: 'post',
    ...postData,
  })
