import { sum } from './js/math.js';
import { createApp } from 'vue';

import _ from 'lodash-es';
// import _ from './node_modules/lodash-es/lodash.default.js';

import './css/index.css';
import './css/index.less';

import App from './App.vue';

console.log(_.join(['1','da','ads'], '-'));

console.log(sum(20, 129));

createApp(App).mount('#app');