import {store} from './../store.js'
import {router} from './../router.js'
/////////////////////////////////////////////
function salir(){
	firebase.auth().signOut().then(() => {
	  store.state.usuarioActivo = 1;
	  console.log("Sesion Cerrada")
	  router.push("/home")
	}).catch((error) => {
	  console.log(error);
	});

	store.state.file = ""
	store.state.usuario.descripcion = ""
	store.state.usuario.nombre = ""
	store.state.usuario.imgURL = "./img/user.png"
	store.state.usuario.imagenes = []
	store.state.usuario.tipo = "" 

}

export{salir}