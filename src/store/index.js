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
    code: `<h1>My website</h1>\n<p>This is a paragraph.</p>\n<p>This is more text.</p>`,

    // the CSS selector code
    cssCode: 'p, .abc',

    // a position array of the current selection
    selection: [],

    // for the tutorial panel
    tutorialSection: null,

    // current tab of the help panel
    currentHelpPanelTab: 'Welcome',

    isBrowsingExamples: false,

    nonExampleCode: ``
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
    },

    codeIsBlank: (state) => {
      return state.code.trim().length === 0;
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
    setTutorialSection(state, newSection) {
      state.tutorialSection = newSection;
    },
    setCurrentHelpPanelTab(state, newTab) {
      state.currentHelpPanelTab = newTab;
    },
    setBrowsingExamples(state, isBrowsing) {
      state.isBrowsingExamples = isBrowsing;
    },
    setNonExampleCode(state, newCode) {
      state.nonExampleCode = newCode;
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
    },
    turnExamplesOn({ commit, state }) {
      if (!state.isBrowsingExamples) {
        commit('setBrowsingExamples', true);
        commit('setNonExampleCode', state.code);
      }
    },
    turnExamplesOff({ commit, state }) {
      if (state.isBrowsingExamples) {
        commit('setBrowsingExamples', false);
        commit('setCode', state.nonExampleCode);
      }
    }
  }
});
