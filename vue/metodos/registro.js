//FUNCION PARA REGISTRARSE EN FIREBASE
function registro_conexion(){
    var pass = document.getElementById("pass").value;
    var pass2 = document.getElementById("pass2").value;
    var email = document.getElementById("email").value;

    if (pass == pass2) {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
          .then((userCredential) => {
            var user = userCredential.user;
            firebase.database().ref('usuarios/'+user.uid).set({
              TipoUsuario: "basico",
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

export{registro_conexion}
