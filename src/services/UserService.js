import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://tg-budgeting-app-backend.herokuapp.com/api/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

export default {
  createUser(name, email, password) {
    const user = { user: {
      name,
      email,
      password
    }}

    return apiClient.post('/users', user)
  },
  login(email, password) {
    const user = { user: {
      email,
      password
    }}
    return apiClient.post('/auth/login', user)
  }
}