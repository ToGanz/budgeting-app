export default {
  SET_USER(state, payload) {
    state.name = payload.name
    state.email = payload.email
    state.token = payload.token
  }
}