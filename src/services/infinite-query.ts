import api from '@/config/axios'

type PostParams = {
  pageParam: number;
  title?: string;
  limit: number;
}

type Items = {
  body: string; 
  id: number;
  title: string;
  userId: number
}

export const getPosts = async ({pageParam, title, limit}: PostParams) => {
  const titleParam = title ? `&title=${title.toLowerCase()}` : ''
  const response = await api.get<Items[]>(`/posts?_page=${pageParam}${titleParam}&_limit=${limit}`)
  return response.data
}
