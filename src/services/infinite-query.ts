import api from "@/config/axios"

type PostParams = {
  pageParam: number;
  title?: string
}

/*type PostResponse = {

}*/

export const getPosts = async ({pageParam, title}: PostParams) => {
  const titleParam = title ? `&title=${title.toLowerCase()}` : ''
  const response = await api.get(`/posts?_page=${pageParam}${titleParam}`)
  console.log(response.data)
  return response.data
}