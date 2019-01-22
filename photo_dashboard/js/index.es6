const unsplashApiAccessKey ='50aadc667f39d6c2f8877889b305811361b8ab7fc24de3aeac77357c685933a3';

import Vue from './lib/vue.js';
import App from '../app.vue';

new Vue({
  render: h => h(App),
}).$mount('#app');
