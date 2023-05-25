import { useQuery } from "react-query"
import { getUsers } from "../services/users"

export const useUserStore = () => {
  const { data } = useQuery({ queryKey: ['users'], queryFn: getUsers})
  return data
}