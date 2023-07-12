import api from "@/config/axios"
import { PassengerDataResponse } from "@/types/general"

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
  return data
}
