const Login = {template: `
	<div>
	<h1>Prueba router P1</h1>
	<button @click="prueba">Prueba</button>
	</div>
	` ,methods:{
	...Vuex.mapMutations(['prueba'])
	}
}

export{Login}