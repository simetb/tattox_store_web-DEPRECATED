//FUNCION PARA INICIAR SERION EN FIREBASE
function verifyLogin(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;    

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
        

        console.log("Ingreso exitoso!")
    
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Ingreso  no exitoso!")
    });

}

export {verifyLogin};