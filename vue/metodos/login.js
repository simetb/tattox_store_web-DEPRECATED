import {router} from './../router.js';
/////////////////////////////////////////////////////////////////////////
//FUNCION PARA INICIAR SERION EN FIREBASE
function verifyLogin(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;    

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
        

        router.push("/home")
    
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Ingreso  no exitoso!")
    });

}

export {verifyLogin};