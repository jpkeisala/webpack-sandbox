import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './app.vue'
import Header from '../../../components/header.vue';

Vue.use(ElementUI)
// Vue.component('bsheader', Header);

new Vue({
  el: '#app',
  render: h => h(App)
})

// new Vue({
//   el: '#top',
//   render: h => h(Header)
// })

