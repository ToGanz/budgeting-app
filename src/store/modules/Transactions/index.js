import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const transactionsModule = {
  namespaced: true,
  state() {
    return {
      transactions: []
    };
  },
  getters,
  mutations,
  actions
};

export default transactionsModule;