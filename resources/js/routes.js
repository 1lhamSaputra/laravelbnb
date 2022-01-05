import VueRouter from "vue-router";
import Bookables from "./bookables/Bookables";
import SecondComponent from "./components/SecondComponent";

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home",
    },
    {
        path: "/second",
        component: SecondComponent,
        name: "second",
    },
];

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history',
});

export default router;