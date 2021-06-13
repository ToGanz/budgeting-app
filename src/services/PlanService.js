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
  config.headers = {'Authorization': store.getters['token']};
 });

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