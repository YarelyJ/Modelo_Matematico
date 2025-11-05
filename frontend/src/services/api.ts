import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api"

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export const getOverview = async () => {
  const response = await api.get("/overview/")
  return response.data
}

export const getStatistics = async () => {
  const response = await api.get("/statistics/")
  return response.data
}

export const getCorrelations = async () => {
  const response = await api.get("/correlations/")
  return response.data
}

export const getProtocols = async () => {
  const response = await api.get("/protocols/")
  return response.data
}

export const getClassification = async () => {
  const response = await api.get("/classification/")
  return response.data
}

export const getFeatureDistribution = async (feature: string) => {
  const response = await api.get(`/feature-distribution/${feature}/`)
  return response.data
}

export default api
