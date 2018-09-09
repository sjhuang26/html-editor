import Vue from 'vue';
import Vuex from 'vuex';

import { parseHTML, traverseModel } from '../parser/parser';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    code: '<html><body><p>Hello world!</p></body></html>',
    visiblePanels: ['heading', 'navigation', 'explanation', 'website', 'code', 'selection', 'toolbox'],
    selection: []
  },
  getters: {
    codeModel: (state) => {
      return parseHTML(state.code);
    },
    selectionModel: (state, getters) => {
      return traverseModel(getters.codeModel, state.selection);
    }
  },
  mutations: {
    setCode(state, newCode) {
      state.code = newCode;
    },
    setVisiblePanels(state, newPanels) {
      state.visiblePanels = newPanels;
    },
    setSelection(state, newSelection) {
      state.selection = newSelection;
    }
  },
  actions: {
    updateCode({ commit }, newCode) {
      commit('setCode', newCode);
    },
    updateVisiblePanels({ commit }, newPanels) {
      commit('setVisiblePanels', newPanels);
    },
    updateSelection({ commit }, newSelection) {
      commit('setSelection', newSelection);
    }
  }
});
