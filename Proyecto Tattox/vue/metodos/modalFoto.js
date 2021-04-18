import {store} from './../store.js';
//////////////////////////////////////////////////////////

function modalFoto(){
	document.getElementById('pictureEdit').classList.remove('hidden');
    document.getElementById('pictureEdit').classList.add('flex');
}



function cancelarFoto(){
	document.getElementById('pictureEdit').classList.remove('flex');
    document.getElementById('pictureEdit').classList.add('hidden');
}


function selecFoto(){
	const hiddenBtn = document.querySelector("#profile-image-input");
	hiddenBtn.click();
	hiddenBtn.addEventListener('change', (event) => {
	    store.state.usuario.imgURL= event.target.files[0];
	})
}


function aceptarFoto(){
	if (store.state.usuario.imgURL != "./img/user.png" ) {
		var user = firebase.auth().currentUser;

		var storageRef = storage.ref('/ImagenUsuarios/'+ store.state.usuario.imgURL.name);
		var uploadTask = storageRef.put(store.state.usuario.imgURL);
		uploadTask.on('state_changed', function(snapshot){
			}, function(error){
   				errorIMG.innerHTML = "Error al subir la imagen"
				},function(){
					uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
						user.updateProfile({
							photoURL: downloadURL
						});
							firebase.database().ref('usuarios/' + user.uid).update({
								ImgPerfil: downloadURL
							}, (error) => {
								if (error) {
									console.log(error)
								 } else {
									console.log("Datos introducidos correctamente")
								}
							});
						store.state.usuario.imgURL = downloadURL; 
        			});

				});

	}else{
		console.log("Sin foto seleccionada")
	}
}


export{modalFoto,cancelarFoto,selecFoto,aceptarFoto}