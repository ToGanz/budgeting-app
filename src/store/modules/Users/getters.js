export default {
  id(state) {
    return state.id;
  },
  name(state) {
    return state.name;
  },
  email(state) {
    return state.email;
  },
  token(state) {
    return state.token;
  },
  loggedIn(state) {
    return !!state.token
  }
}