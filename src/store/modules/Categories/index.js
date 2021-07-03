import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const categoriesModule = {
  namespaced: true,
  state() {
    return {
      categories: []
    };
  },
  getters,
  mutations,
  actions
};

export default categoriesModule;