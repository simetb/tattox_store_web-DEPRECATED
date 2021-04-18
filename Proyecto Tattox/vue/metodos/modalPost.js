import {store} from './../store.js';
////////////////////////////////////////////////////////////////
function modalPost(){
	document.getElementById('newPost').classList.remove('hidden');
    document.getElementById('newPost').classList.add('flex');
}

function cancelarPost(){
	document.getElementById('newPost').classList.remove('flex');
    document.getElementById('newPost').classList.add('hidden');
}


function selecPost(){
	const defaultBtn = document.querySelector("#image-input");
	defaultBtn.click();
	defaultBtn.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if(file){
    	store.state.file = file
        }
	});
}


function confirmarPost(){
	//Iniciamos el usuario
    var user = firebase.auth().currentUser;
    //Creamos una KEY
    var newkey = firebase.database().ref().child('videos').push().key;
	//Creamos la referencia
    var storageRef = firebase.storage().ref('/Posts/'+ user.uid + '/' + newkey + '/' + store.state.file.name);
    //Subimos la imagen
    var uploadTask = storageRef.put(store.state.file);
    uploadTask.on('state_changed', function(snapshot){
        },function(error){
            //En caso de error al subir la imagen
            console.log(error)
        },function(){
            //Subirmos los datos
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                firebase.database().ref('Posts/'+user.uid+'/'+newkey+'/').set({
                    Post: downloadURL,
                    KeyPost:newkey
                },(error) => {
                        if (error) {
                            //En caso de no subir los datos
                            console.log(error)
                        }else{
                        	console.log("Publicacion subida")
                        }
                    });

            });
        });
}

export{modalPost,cancelarPost,selecPost,confirmarPost}