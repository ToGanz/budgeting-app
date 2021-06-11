import UserService from '@/services/UserService.js'

export default {
  async getPlans(context, data) {
    const response = await UserService.createUser(data)

    const responseData = response.data

    console.log(responseData)
    context.commit('setUser', {
      name: data.user.name,
      email: data.user.email
    })
  }
}
