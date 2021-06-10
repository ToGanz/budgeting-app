import axios from 'axios'

import store from '../store/index'
console.log(store)
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2MjMzODIxMjN9.lllFDthXNl9aYxpGj0rA8AVwepQE5HI5Vwg74PLkKtw'

const apiClient = axios.create({
  baseURL: 'https://tg-budgeting-app-backend.herokuapp.com/api/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: token
  }
})

export default {
  getPlans() {
    return apiClient.get('/plans')
  },
  getPlan(id) {
    return apiClient.get('/plans/' + id)
  },
  createPlan(plan) {
    return apiClient.post('/plans', plan)
  },
  editPlan(id, plan) {
    return apiClient.put('/plans' + id, plan)
  },
  deletePlan(id) {
    return apiClient.delete('/plans/' + id)
  },

}