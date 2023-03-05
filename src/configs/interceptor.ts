import axios, { AxiosRequestConfig } from "axios"
import CONFIGS from "."

const service = axios.create({
  baseURL: CONFIGS.BASE_URL.API,
  headers: { "Content-Type": "application/json" },
  withCredentials: true
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
  let _token: string | null = null
  if (typeof window !== undefined) {
    _token = localStorage.getItem("token")
  }
  if (_token && config.headers) {
    config.headers.Authorization = `Bearer ${_token}`
  }
  return config
})

service.interceptors.response.use(
  async (response) => response,
  (error) => {
    //handle revoke token, refresh token
    return
  }
)

export default service
