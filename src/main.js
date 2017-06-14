import Vue from 'vue';
import './filters';
import AppComponent from './components/app.components';
import store from './store';

//import App from './App.vue'
require('style-loader!css-loader!bootstrap/dist/css/bootstrap.css');
require('bootstrap');

new Vue({
  el: '#app',
  components: {
	'app' : AppComponent
  },
  store
})