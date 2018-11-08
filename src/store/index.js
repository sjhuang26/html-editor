/*
This is a Vuex store.
*/

import Vue from 'vue';
import Vuex from 'vuex';

import { parseHTML, traverseModel, parseCssSelector } from '../js/parser';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // the HTML code
    code: `<html>\n<body>\n<p>Hello world!</p>\n<a href="https://example.com">Link</a>\n</body>\n</html>`,

    // the CSS selector code
    cssCode: 'p, .abc',

    // a position array of the current selection
    selection: [],

    // for the tutorial panel
    currentTutorialPageIndex: 0
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
    setSelection(state, newSelection) {
      state.selection = newSelection;
    },
    setCssCode(state, newCode) {
      state.cssCode = newCode;
    },
    setCurrentTutorialPage(state, newPageIndex) {
      state.currentTutorialPageIndex = newPageIndex;
    }
  },
  actions: {
    updateCode({ commit, dispatch }, newCode) {
      commit('setCode', newCode);
      dispatch('updateSelection', []);
    },
    updateCssCode({ commit }, newCode) {
      commit('setCssCode', newCode);
    },
    updateSelection({ commit }, newSelection) {
      commit('setSelection', newSelection);
    },
    changeCurrentTutorialPage({ commit }, newPageIndex) {
      commit('setCurrentTutorialPage', newPageIndex);
    }
  }
});
