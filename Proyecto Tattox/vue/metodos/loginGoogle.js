function Google(){
	var provider = new firebase.auth.GoogleAuthProvider();	
	firebase.auth()
  .signInWithPopup(provider)
  	.then((result) => {

    var credential = result.credential;
    console.log(credential);
    var token = credential.accessToken;
    console.log(token);
    var user = result.user;
    console.log(user);
    // ...
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    //...
  });

}	


export{Google}