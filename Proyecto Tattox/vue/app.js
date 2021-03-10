//TEMPLATES
import {Registro} from './templates/registro.js'
import {Login} from './templates/login.js'
import {Home} from './templates/home.js'
//CODIGO JQUERY 
import {FuncionesHeader} from './js-jquery/scripts.js'
//STORE
import {store} from './store.js'

 //------------------------------------------------------------------------------------------------------
 //ROUTER  

    const routes = [
    { path: '/login', component: Login },
    { path: '/registro', component: Registro },
    { path: '/home', component: Home}
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

router.push('/registro');


