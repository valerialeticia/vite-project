import api from "../config/axios"

export const getUsers = () => {
  return api.get('/posts')
}