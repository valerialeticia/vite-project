import axios from 'axios'

const api = axios.create({
  //baseURL: 'https://jsonplaceholder.typicode.com'
  baseURL: 'https://api.instantwebtools.net'
})

export default api