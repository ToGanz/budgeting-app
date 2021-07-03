export default {
  SET_CATEGORIES(state, payload) {
    state.categories = payload
  },
  ADD_CATEGORY(state, payload) {
    state.categories.push(payload)
  },
  REMOVE_CATEGORY(state, payload) {
    state.categories = state.categories.filter((category) => category.id !== payload.id)
  },
  EDIT_CATEGORY(state, payload) {
    state.categories = state.categories.filter(
      (category) => category.id !== payload.id
    );
    state.categories.push(payload);
  },
}
