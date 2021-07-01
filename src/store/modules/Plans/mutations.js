export default {
  SET_PLANS(state, payload) {
    state.plans = payload
  },
  ADD_PLAN(state, payload) {
    state.plans.push(payload)
  },
  SET_PLAN(state, payload) {
    state.plan = payload
  }
}
