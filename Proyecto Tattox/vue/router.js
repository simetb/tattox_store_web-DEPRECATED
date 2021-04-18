 //TEMPLATES
import {Registro} from './templates/registro.js'
import {Login} from './templates/login.js'
import {Home} from './templates/home.js'
import {Admin} from './templates/admin.js'
import {MiPerfil} from './templates/miPerfil.js'
import {Perfil} from './templates/perfil.js'
 //------------------------------------------------------------------------------------------------------
 //ROUTER  

    const routes = [
    { path: '/login', component: Login },
    { path: '/registro', component: Registro },
    { path: '/home', component: Home},
    { path: '/admin', component: Admin},
    { path: '/miPerfil',component: MiPerfil},
    { path: '/perfil' , component: Perfil}
    ]

    const router = new VueRouter({
    routes // short for `routes: routes`
    })


export{router}