import Vue from 'vue';
import App from './App.vue';
import { VueMaskDirective } from 'v-mask';

Vue.directive('mask', VueMaskDirective);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
