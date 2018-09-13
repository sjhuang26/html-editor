/*
The entrypoint JS file of the app, which is basically configuration
*/

import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';
import store from './store';

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
