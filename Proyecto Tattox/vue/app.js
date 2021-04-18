//STORE
import {store} from './store.js'
//ROUTER
import {router} from './router.js'


//DE ARRANQUE
import {activo} from './metodos/sesionActiva.js';

import {escalado} from './js-jquery/escalado.js'

import {cargaTrabajadores} from './metodos/trabajadores.js'

//------------------------------------------------------------------------------------------------------
//INICIALIZACION DEL VUE
const app = new Vue({
    router,
    el: '#app',
    store: store,
});
//------------------------------------------------------------------------------------------------------
activo()
//------------------------------------------------------------------------------------------------------
escalado()
//------------------------------------------------------------------------------------------------------
cargaTrabajadores()
//------------------------------------------------------------------------------------------------------


