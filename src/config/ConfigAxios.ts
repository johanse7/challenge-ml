import axios, { AxiosInstance } from "axios"
import configEnv from "./ConfigEnv"

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: configEnv.urlBaseApi,
})
