/*
The entrypoint JS file of the app, which is basically configuration
*/

import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from "bootstrap-vue";

import App from './App.vue';
import store from './store';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Vuex);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
