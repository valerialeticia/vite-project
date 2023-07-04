import api from "../config/axios"
import { Detail } from "../types/general"

export const getPosts = async () => {
  return await api.get('/posts')
}

export const getPostDetails = async (id: string | undefined) => {
  const response = await api.get<Detail>(`/posts/${id}`)
  return response.data
}