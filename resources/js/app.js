import Vue from "vue";
import VueRouter from "vue-router";
import router from './routes';

require("./bootstrap");

window.Vue = require("vue");

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router
});
