//STORE
import {store} from './store.js'
//ROUTER
import {router} from './router.js'

//------------------------------------------------------------------------------------------------------
//INICIALIZACION DEL VUE
const app = new Vue({
    router,
    el: '#app',
    store: store,
});

router.push('/login');


