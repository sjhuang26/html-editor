import Vue from 'vue';
import Vuex from 'vuex';

import { parseHTML } from '../parser/parser';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    code: '<html><body><p>Hello world!</p></body></html>'
  },
  getters: {
    codeModel: (state) => {
      return parseHTML(state.code);
    }
  },
  mutations: {
    setCode(state, newCode) {
      state.code = newCode;
    }
  },
  actions: {
    updateCode({ commit }, newCode) {
      commit('setCode', newCode);
    }
  }
});
