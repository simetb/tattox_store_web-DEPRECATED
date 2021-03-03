//TEMPLATES
import {Login,Registro} from './templates/registro.js'
//STORE
import {store} from './metodos/store.js'

 //------------------------------------------------------------------------------------------------------
 //ROUTER  

    const routes = [
    { path: '/login', component: Login },
    { path: '/registro', component: Registro }
    ]

    const router = new VueRouter({
    routes // short for `routes: routes`
    })


//------------------------------------------------------------------------------------------------------
//INICIALIZACION DEL VUE
const app = new Vue({
    router,
    el: '#app',
    store: store,
});

router.push('/login');
