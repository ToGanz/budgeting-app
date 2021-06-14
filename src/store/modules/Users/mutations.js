export default {
  SET_USER(state, payload) {
    state.name = payload.name
    state.email = payload.email
    state.token = payload.token
    localStorage.setItem('user', JSON.stringify(payload))
  },
  CLEAR_USER() {
    localStorage.removeItem('user')
    // forces refresh, state does not survie the reload
    location.reload()
  }
}