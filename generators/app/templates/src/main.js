// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// include vue-custom-element plugin to vue
import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement);
// use polyfill for vue-custom-element
import 'document-register-element/build/document-register-element';

// Vue.config.ignoredElement = [
// 	'testExample'
// ];


import App from './App'

Vue.customElement('test-example', App, {
	// element is mounted/inserted into document
	connectedCallback() {
		console.log('connected to vue app')
	}
});

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   //router,
//   template: '<App/>',
//   components: { App }
// })
