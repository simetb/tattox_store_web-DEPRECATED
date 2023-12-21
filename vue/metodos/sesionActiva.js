import {store} from './../store.js';
import {router} from './../router.js';
//////////////////////////////////////////////////////////////
function activo(){
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			//Obtenemos el usuario
			user = firebase.auth().currentUser;
			console.log("Hay un usuario activo")

			//Hacemos una peticion a la base de detos
			firebase.database().ref('usuarios/' + user.uid).get().then(function(snapshot){
				if (snapshot.exists()){
					//Operamos segun el usuario
					var valores = snapshot.val()
					//En caso de ser trabajador o usuario basico
					store.state.usuario.tipo = valores.TipoUsuario;
					if (valores.TipoUsuario != "admin") {
						store.state.usuarioActivo = 0;
					}
					//En caso de ser admin
					else{
						store.state.usuarioActivo = 2;
					}

					//obtenemos la descripcion
					if (valores.Descripcion) {
						store.state.usuario.descripcion = valores.Descripcion
					}
				}

				else{
					console.log("No data disponible");
				}
				//Captura de error
			}).catch(function(error){
				console.log(error)
			});

		 	//Cargamos el nombre
		 	if (user.displayName) {
		 		store.state.usuario.nombre = user.displayName 
		 	}
		 	//Cargamos las fotos de perfil
		 	if (user.photoURL) {
		 		store.state.usuario.imgURL = user.photoURL
		 	}

		 	//Cargamos los post
		    //Cargamos los Post del usuario
		    firebase.database().ref('/Posts/'+ user.uid).once('value').then(function(snapshot){
		        //Almacenamos la informacion
		        var post = snapshot.val();
		        //Almacenamos la informacion de todos los videos por su key
		        for(let key in post){
		            firebase.database().ref('/Posts/'+user.uid+'/'+key).once('value').then(function(snapshot){
		                //Almacenamos la informacion del video
		                var infoPosts = snapshot.val();
		                store.state.usuario.imagenes.push(infoPosts);

		            });
		        }
		        
		    });
		    router.push('/home')
			
		 }else{
		 	//En caso de no haber nadie
		 	store.state.usuarioActivo = 1;
		 	router.push('/login')
		 }
	});	
}


export{activo}
