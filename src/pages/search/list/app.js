import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import '../../../assets/css/style.scss';
import Header from '../../../components/header.vue';
import App from './app.vue';


Vue.use(ElementUI);
Vue.component('bsheader', Header);

new Vue({
  el: '#app',
  render: h => h(App)
})
