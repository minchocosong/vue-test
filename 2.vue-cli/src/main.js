import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Howl from 'howler';

Vue.config.productionTip = false

new Vue({
  vuetify,
  Howl,
  render: h => h(App)
}).$mount('#app')
