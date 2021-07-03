export default {
  SET_TRANSACTIONS(state, payload) {
    state.transactions = payload
  },
  ADD_TRANSACTION(state, payload) {
    state.transactions.push(payload)
  },
  REMOVE_TRANSACTION(state, payload) {
    state.transactions = state.transactions.filter(
      (transaction) => transaction.id !== payload.id
    )
  },
  EDIT_TRANSACTION(state, payload) {
    state.transactions = state.transactions.filter(
      (transaction) => transaction.id !== payload.id
    )
    state.transactions.push(payload)
  }
}
