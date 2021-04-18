import {store} from './../store.js';
///////////////////////////////////////////////////////////
function cargaTrabajadores(){
	//Cargamos los trabajadores
		firebase.database().ref('/usuarios/').once('value').then(function(snapshot){
		        //Almacenamos la informacion
		        var keyTrabajadores = snapshot.val();
		        //Almacenamos la informacion de todos los videos por su key
		        for(let key in keyTrabajadores){
		            firebase.database().ref('/usuarios/'+key).once('value').then(function(snapshot){
		                //Almacenamos la informacion de los trabajadores
		                var infoTrabajadores = snapshot.val();
		                if (infoTrabajadores.TipoUsuario == "Trabajador") {
		                	store.state.trabajadores.push(infoTrabajadores)
		                }
		                
		            });
		        }
		        
		    });
}


export{cargaTrabajadores}