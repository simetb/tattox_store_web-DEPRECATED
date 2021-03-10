 //TEMPLATES
import {Registro} from './templates/registro.js'
import {Login} from './templates/login.js'
import {Home} from './templates/home.js'
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


export{router}