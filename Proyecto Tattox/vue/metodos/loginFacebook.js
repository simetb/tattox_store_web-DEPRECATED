function Facebook(){
	var provider = new firebase.auth.FacebookAuthProvider();
	firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var user = result.user;
    var accessToken = credential.accessToken;
    console.log(credential);
    console.log(user);
    console.log(accessToken);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;

    // ...
  });


}

export{Facebook}