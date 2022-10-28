require('./bootstrap');

import { createApp } from "vue";
import App from "./vue/app";

const app = new Vue ({
    el: '#app',
    components: { App }
});
