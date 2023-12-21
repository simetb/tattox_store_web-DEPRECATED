import {router} from './../router.js';
import {store} from './../store.js';
///////////////////////////////////////////////
function modalEliminar(){
	document.getElementById('delete-acc').classList.remove('hidden');
    document.getElementById('delete-acc').classList.add('flex');
}


function cancelarEliminar(){
	document.getElementById('delete-acc').classList.remove('flex');
    document.getElementById('delete-acc').classList.add('hidden');
}

function confirmarEliminar(){
	document.getElementById('delete-acc').classList.remove('hidden');
    document.getElementById('delete-acc').classList.add('flex');
    var user = firebase.auth().currentUser;

    var user = firebase.auth().currentUser;
	user.delete().then(function() {
	  console.log("Usuario Eliminado");
	}).catch(function(error) {
	  console.log(error);
	});
    router.push("/home")
    store.state.usuarioActivo = 1;

}

export{modalEliminar,cancelarEliminar,confirmarEliminar}