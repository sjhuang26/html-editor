/*
This is a Vuex store.
*/

import Vue from 'vue';
import Vuex from 'vuex';

import { parseHTML, traverseModel, parseCssSelector } from '../parser/parser';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // the HTML code
    code: '<html><body><p>Hello world!</p><a href="https://example.com">Link</a></body></html>',

    // the CSS selector code
    cssCode: 'p, .abc',

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

    cssModel: (state) => {
      return parseCssSelector(state.cssCode);
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
    },
    setCssCode(state, newCode) {
      state.cssCode = newCode;
    }
  },
  actions: {
    updateCode({ commit }, newCode) {
      commit('setCode', newCode);
    },
    updateCssCode({ commit }, newCode) {
      commit('setCssCode', newCode);
    },
    updateVisiblePanels({ commit }, newPanels) {
      commit('setVisiblePanels', newPanels);
    },
    updateSelection({ commit }, newSelection) {
      commit('setSelection', newSelection);
    },
    // toggle the visibility of a single panel
    togglePanelVisibility({ dispatch, state }, panelName) {
      // this code manipulates an array containing names of all the visible panels
      if (state.visiblePanels.includes(panelName)) {
        // remove panel
        dispatch('updateVisiblePanels', state.visiblePanels.filter((value) => (value !== panelName)));
      } else {
        // add panel
        dispatch('updateVisiblePanels', state.visiblePanels.concat(panelName));
      }
    }
  }
});
