/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// SCSS & axios
import './assets/all.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Bootstrap 
import 'bootstrap/dist/js/bootstrap.js';
// Bootstrap  Icon
import 'bootstrap-icons/font/bootstrap-icons.css';

// 時間格式化
import moment from 'moment'
import { date, currency } from '../src/methods/fillters';

// swiper套件
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

// 引入 VeeValidate 元件跟功能
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
// 引入 VeeValidate 的驗證規則
import AllRules from '@vee-validate/rules';
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n';
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';


// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App)

// 日期格式化
app.config.globalProperties.$moment = moment
// 時間、金錢格式化
app.config.globalProperties.$filters = {
  date,
  currency,
};

// swiper 
app.config.globalProperties.$swiper = Swiper;

// loading 
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

app.use(createPinia())
app.use(VueAxios, axios)
app.use(router)
app.use(moment)

// eslint-disable-next-line vue/multi-word-component-names
app.component('Loading', Loading);

app.component('VField', Field);
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app')