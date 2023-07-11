import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.instantwebtools.net'
})

export default api