import axios from 'axios'
import { SERVER, API_RESOURCE } from './const'

const api = axios.create({
  baseURL: SERVER.STAGE + API_RESOURCE,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
  },
})

export default api
