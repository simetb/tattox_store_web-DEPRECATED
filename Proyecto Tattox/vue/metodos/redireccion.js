import {router} from './../router.js'
////////////////////////////////////////////////////////////////////////////////////////////////////7
//REDIRECCIONAMIENTO DE SPA PARA LOS BOTONES
function Alogin(){
	router.push('/login');
}

function Ahome(){
	router.push('/home');
}

function Aregistro(){
	router.push('/registro');
}

export {Alogin,Ahome,Aregistro}