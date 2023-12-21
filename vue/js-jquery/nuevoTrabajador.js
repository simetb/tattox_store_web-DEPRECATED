function usuarioTrabajador(){
		var ele = $('#usuarioTrabajador');
        if(ele.hasClass('hidden')){
            ele.removeClass('hidden').addClass('block')
        }
        else{
            ele.addClass('hidden').removeClass('block')
        }
}

function registraTrabajador(){
	var correo = document.getElementById('email').value; 
	var c1 = document.getElementById('c1').value;
	var c2 = document.getElementById('c2').value;


	if (c1 == c2) {
        firebase.auth().createUserWithEmailAndPassword(correo, c1)
          .then((userCredential) => {
            var user = userCredential.user;
            firebase.database().ref('usuarios/'+user.uid).set({
              TipoUsuario: "Trabajador",
              Usuario: user.uid,
            }
            ,(error) => {
              if (error) {
                console.log(error)
              }else{
                console.log("Todo Bien")
              }
            });
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
          });

    } else{
        console.log("Contras diferentes")
    }
}

export{usuarioTrabajador,registraTrabajador}