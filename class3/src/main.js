import Vue from 'vue'
import App from './App.vue'
import FirstComponent from './components/FirstComponent.vue'

Vue.config.productionTip = false

Vue.use('first-component', FirstComponent)

new Vue({
  render: h => h(App),
}).$mount('#app')
