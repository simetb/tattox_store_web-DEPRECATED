import {store} from './../store.js'
/////////////////////////////////////////////////
function modalDescripcion(){
	document.getElementById('aboutEdit').classList.remove('hidden');
    document.getElementById('aboutEdit').classList.add('flex');
}

function cancelarDescripcion(){
	document.getElementById('aboutEdit').classList.add('hidden');
    document.getElementById('aboutEdit').classList.remove('flex');
}


function confirmarDescripcion(){
	var nombre = document.getElementById("input-name").value;
	var biografia = document.getElementById("input-bio").value;
	var user = firebase.auth().currentUser;
	console.log(biografia);

	if (nombre) {
		store.state.usuario.nombre = nombre;
		user.updateProfile({
			displayName: nombre
		}).then(function(){
			console.log("se cambio el nombre exitosamente")
			document.getElementById('aboutEdit').classList.add('hidden');
   			document.getElementById('aboutEdit').classList.remove('flex');
		}).catch(function(error){
			console.log(error)
		});
		firebase.database().ref('usuarios/' + user.uid).update({
			Nombre: nombre,
		}, (error) => {
			if (error) {
				console.log(error)
			 } else {
				console.log("Datos introducidos correctamente")
			}
		});
	}

	if (biografia) {
		if (biografia.length < 180 ) {
			store.state.usuario.descripcion = biografia
			firebase.database().ref('usuarios/' + user.uid).update({
				  Descripcion: biografia,
				}, (error) => {
				  if (error) {
				    console.log(error)
				  } else {
				    console.log("Datos introducidos correctamente")
				  }
				});
		}else{

			console.log("La biografia es muy larga")
		}
	}
	document.getElementById('aboutEdit').classList.add('hidden');
   	document.getElementById('aboutEdit').classList.remove('flex');

}



export{modalDescripcion,cancelarDescripcion,confirmarDescripcion}