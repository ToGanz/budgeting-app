import axios from 'axios'
import store from '../store/index'

const apiClient = axios.create({
  baseURL: 'https://tg-budgeting-app-backend.herokuapp.com/api/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// set token
apiClient.interceptors.request.use((config) => {
  // We are importing store before it is populated.
  // We intercept the request and use the current token
  config.headers = { Authorization: store.getters['users/token'] }
  return config
})

// 401s führen zu logout
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch('users/logout')
    }
    return Promise.reject(error)
  }
)

export default {
  getCategories() {
    return apiClient.get('/categories')
  },
  createCategory(name) {
    const category = {
      category: {
        name
      }
    }
    return apiClient.post('/categories', category)
  },
  editCategory(id, name) {
    const category = {
      category: {
        name
      }
    }
    return apiClient.put('/categories/' + id, category)
  },
  deleteCategory(id) {
    return apiClient.delete('/categories/' + id)
  }
}
