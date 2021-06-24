import UserService from '@/services/UserService.js'

export default {
  async registerUser(context, data) {
    const createResponse = await UserService.createUser(
      data.name,
      data.email,
      data.password
    )
    const createResponseData = createResponse.data

    const loginResponse = await UserService.login(
      createResponseData.data.attributes.email,
      data.password
    )
    const loginResponseData = loginResponse.data

    context.commit('SET_USER', {
      name: createResponseData.data.attributes.name,
      email: createResponseData.data.attributes.email,
      token: loginResponseData.auth_token
    })
  },
  async login(context, data) {
    const response = await UserService.login(
      data.email,
      data.password
    )
    const responseData = response.data

    context.commit('SET_USER', {
      name: responseData.name,
      email: responseData.email,
      token: responseData.auth_token
    })
  },
  logout(context) {
    context.commit('CLEAR_USER')
  },
  async editUser(context, data) {
    const response = await UserService.editUser(
      data
    )
    const responseData = response.data

    const token = context.getters["users/token"]
    console.log(token)
    context.commit('SET_USER', {
      name: responseData.data.attributes.name,
      email: responseData.data.attributes.email,
      token
    })
  }
}
