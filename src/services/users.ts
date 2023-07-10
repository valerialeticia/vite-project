import api from "../config/axios"
import { Detail, PassengerDataResponse } from "../types/general"

/*export const getPosts = async () => {
  return await api.get('/posts')
}

export const getPostDetails = async (id: string | undefined) => {
  const response = await api.get<Detail>(`/posts/${id}`)
  return response.data
}*/


type PassengerParams = {
  page: number;
  size: number
}

type PassengerResponse = {
  totalPassengers: number;
  totalPages: number;
  data: PassengerDataResponse[]
}

export const getPassengers = async (params: PassengerParams) => {
  const { data } = await api.get<PassengerResponse>('v1/passenger', {params}) 
  console.log('RESSS SERVICEE', data)
  return data
}