//FUNCION PARA REGISTRARSE EN FIREBASE
function registro_conexion(){
    var pass = document.getElementById("pass").value;
    var pass2 = document.getElementById("pass2").value;
    var email = document.getElementById("email").value;

    if (pass == pass2) {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
          .then((user) => {
            console.log("se registro")
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("no se registro")
          });

    } else{
        console.log("")
    }

}  

export{registro_conexion}