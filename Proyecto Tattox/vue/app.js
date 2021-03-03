//TEMPLATES

const P1 = { template:`

	<h1>Prueba router P1</h1>
	`

}

const P2 = {template: `
	<h1>Prueba router P2</h1>
	`
}




 //------------------------------------------------------------------------------------------------------
 //VUEX STORE

const store = new Vuex.Store({
            state:{
                
 

              },
            mutations:{
              
                
            },
            actions:{
                              
            }

        }); 

 //------------------------------------------------------------------------------------------------------
 //ROUTER  

    const routes = [
    { path: '/p1', component: P1 },
    { path: '/p2', component: P2 }
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

router.push('/p1');
