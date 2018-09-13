/*
This is a Vuex store.
*/

import Vue from 'vue';
import Vuex from 'vuex';

import { parseHTML, traverseModel } from '../parser/parser';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // the HTML code
    code: '<html><body><p>Hello world!</p></body></html>',

    // an array of names of visible panels
    visiblePanels: ['heading', 'navigation', 'explanation', 'website', 'code', 'selection', 'toolbox'],

    // a position array of the current selection
    selection: []
  },
  getters: {
    // get the code model
    codeModel: (state) => {
      return parseHTML(state.code);
    },

    // get the model of the current selection (which is a subset of the entire model)
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
