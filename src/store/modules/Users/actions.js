import UserService from '@/services/UserService.js'

export default {
  async registerUser(context, data) {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password
    }
    
    const response = await UserService.createUser(user)

    const responseData = response.data

    context.commit('SET_USER', {
      name: responseData.data.attributes.name,
      email: responseData.data.attributes.email
    })
  }
}
