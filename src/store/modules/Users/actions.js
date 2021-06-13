import UserService from '@/services/UserService.js'

export default {
  async registerUser(context, data) {

    const response = await UserService.createUser(data)

    const responseData = response.data

    context.commit('SET_USER', {
      name: responseData.data.attributes.name,
      email: responseData.data.attributes.email
    })
  }
}
