import api from "@/config/axios"
import { Items } from "@/types/general";

type PostParams = {
  pageParam: number;
  title?: string
}

export const getPosts = async ({pageParam, title}: PostParams) => {
  const titleParam = title ? `&title=${title.toLowerCase()}` : ''
  const response = await api.get<Items[]>(`/posts?_page=${pageParam}${titleParam}`)
  return response.data
}
