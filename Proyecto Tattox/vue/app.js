//TEMPLATES
import {Registro} from './templates/registro.js'
import {Login} from './templates/login.js'
//STORE
import {store} from './store.js'

//EJEMPLO DE ADAPTACION 
const Prueba = {template: `
	<div>
		<i class="fa fa-plus icon-to-change"></i>
		<button  @click="a">Change icon</button>
	</div>
	`,methods:{
		a(){
			var ele = $('.icon-to-change');
			if(ele.hasClass('fa-plus')){
				ele.removeClass('fa-plus').addClass('fa-minus')     
		  }
		  else{
		  		ele.addClass('fa-plus').removeClass('fa-minus')
		       
		  }
			
		}
	}
}
 //------------------------------------------------------------------------------------------------------
 //ROUTER  

    const routes = [
    { path: '/login', component: Login },
    { path: '/registro', component: Registro },
    { path: '/jquery', component: Prueba}
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
