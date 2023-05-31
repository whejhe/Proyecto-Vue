import { createWebHistory, createRouter } from "vue-router";
import register from "../views/register.vue";
import Login from "../views/login.vue";
import inicio from "../views/inicio.vue";
import profile from "../views/profileViews.vue"
import addGrupo from "../views/grupView.vue";

const routes = [
    {
        path: "/",
        name: "inicio",
        component: inicio

    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta:{
            requiresGuest: true,
        }
    },
    {
        path: "/register",
        name: "register",
        component: register,
        meta:{
            requiresGuest: true,
        }
    },
    {
        path: "/addGrupo",
        name: "addGrupo",
        component: addGrupo,
        // meta:{
        //     requiresGuest: true,
        // }
    },
    {
        path: `/profile`,
        name: "profileView",
        component: profile,
    },
    //Ruta para manejar errores 404
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../views/NotFound.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// function verificarLogueado() {
//     if (getToken()) {
//         authStores().estaLogueado = true;
//     } else {
//         authStores().estaLogueado = false;
//     }
// }

// router.beforeEach((to, from, next) => {
//     verificarLogueado();
//     if(to.matched.some(record => record.meta.requiresGuest) && authStores().estaLogueado) {
//         next({name: 'inicio'});
//         saveToken();
//     }else{
//         next();
//     }
// })

export default router;