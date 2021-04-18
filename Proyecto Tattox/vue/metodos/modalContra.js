function modalContra(){
    document.getElementById('passwordEdit').classList.remove('hidden');
    document.getElementById('passwordEdit').classList.add('flex');
}

function confirmarContra(){
    var user = firebase.auth().currentUser;
    var c1 = document.getElementById('input-Npwd').value;
    var c2 = document.getElementById('input-CNpwd').value;

    if (c1 == c2) {
         user.updatePassword(c1).then(function() {
          console.log("Contra cambiada correctamente")
        }).catch(function(error) {
          console.log("Ocurrio un error al cambiar contra")
        });

         //Reiniciamos los valores y cerramos el modal
        document.getElementById("input-Npwd").value = "";
        document.getElementById("input-CNpwd").value = "";
        document.getElementById('passwordEdit').classList.add('hidden');
        document.getElementById('passwordEdit').classList.remove('flex');
    }
}

function cancelarContra(){
    document.getElementById("input-Npwd").value = "";
    document.getElementById("input-CNpwd").value = "";
    document.getElementById('passwordEdit').classList.add('hidden');
    document.getElementById('passwordEdit').classList.remove('flex');
}

function eye1(){
    let  x = document.getElementById("input-Npwd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    if(document.querySelector('#eye-1').classList.contains('fa-eye')){
        document.querySelector('#eye-1').classList.remove('fa-eye');
        document.querySelector('#eye-1').classList.add('fa-eye-slash');
    }else{
        document.querySelector('#eye-1').classList.remove('fa-eye-slash');
        document.querySelector('#eye-1').classList.add('fa-eye');
    }
}

function eye2(){
    let  x = document.getElementById("input-CNpwd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    if(document.querySelector('#eye-2').classList.contains('fa-eye')){
        document.querySelector('#eye-2').classList.remove('fa-eye');
        document.querySelector('#eye-2').classList.add('fa-eye-slash');
    }else{
        document.querySelector('#eye-2').classList.remove('fa-eye-slash');
        document.querySelector('#eye-2').classList.add('fa-eye');
    }
}


export{modalContra,eye1,eye2,cancelarContra,confirmarContra}