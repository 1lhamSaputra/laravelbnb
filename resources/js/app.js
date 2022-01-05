import Vue from "vue";
import VueRouter from "vue-router";
import router from './routes';
import index from "./Index";

require("./bootstrap");

window.Vue = require("vue");
Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router,
    components: {
        index
    }
});
