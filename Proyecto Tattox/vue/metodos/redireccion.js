import {router} from './../router.js'
import {escalado} from './../js-jquery/escalado.js';
////////////////////////////////////////////////////////////////////////////////////////////////////7
//REDIRECCIONAMIENTO DE SPA PARA LOS BOTONES
function Alogin(){
	router.push('/login');
	escalado()
}

function Ahome(){
	router.push('/home');
	escalado()
}

function Aregistro(){
	router.push('/registro');
	escalado()
}

function Aadmin(){
	router.push('/admin')
	escalado()
}

function Aperfil(){
	router.push("/miPerfil")
	escalado()
}

export {Alogin,Ahome,Aregistro,Aadmin,Aperfil}