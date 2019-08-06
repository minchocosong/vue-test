import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import AudioVisual from 'vue-audio-visual'

Vue.config.productionTip = false

new Vue({
  vuetify,
  AudioVisual,
  render: h => h(App)
}).$mount('#app')
