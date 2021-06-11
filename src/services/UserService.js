import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://tg-budgeting-app-backend.herokuapp.com/api/v1/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

export default {
  createUser(user) {
    return apiClient.post('/users', user)
  }
}