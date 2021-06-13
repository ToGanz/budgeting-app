import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const usersModule = {
  namespaced: true,
  state() {
    return {
      name: null,
      email: null,
      token: null
    };
  },
  getters,
  mutations,
  actions
};

export default usersModule;