import {store} from './../store.js';
////////////////////////////////////////////////////////////////
function muestraUsuarios(){
	var ele = $('#muestraUsuarios');
        if(ele.hasClass('hidden')){
        	store.state.usuarios = [];
            ele.removeClass('hidden').addClass('block')
            //Cargamos los usuarios
		    //Cargamos los Post del usuario
		    firebase.database().ref('/usuarios/').once('value').then(function(snapshot){
		        //Almacenamos la informacion
		        var usuarios = snapshot.val();
		        //Almacenamos la informacion de todos los videos por su key
		        for(let key in usuarios){
		            firebase.database().ref('/usuarios/' + key).once('value').then(function(snapshot){
		                //Almacenamos la informacion del usuario
		                var infoUsuarios = snapshot.val();
		                if (infoUsuarios.TipoUsuario != "admin") {
		                	store.state.usuarios.push(infoUsuarios);	
		                }
		                

		            });
		        }
		        
		    });
        }
        else{
            ele.addClass('hidden').removeClass('block')
        }
}

function eliminaUsuario(){
	console.log("Usuario Eliminado")
}

function editarUsuario(){
	console.log("Usuario Editado")
}


export{muestraUsuarios,
eliminaUsuario,
editarUsuario}