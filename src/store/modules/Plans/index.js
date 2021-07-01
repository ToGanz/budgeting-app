import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const plansModule = {
  namespaced: true,
  state() {
    return {
      plans: [],
      plan: null
    };
  },
  getters,
  mutations,
  actions
};

export default plansModule;