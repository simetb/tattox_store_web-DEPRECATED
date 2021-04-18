import {store} from './../store.js';
/////////////////////////////////////////////////
const MiPerfil = {template:`
	<div>
<!-- HEADER + NAVBAR -->
  <div class="flex flex-col h-96 bg-bricks bg-cover bg-center text-myPalette-400 overflow-hidden">
    <!-- NAVBAR OPEN -->
    <nav class="flex flex-nowrap items-center h-20 md:h-24 lg:h-28 bg-myPalette-300 bg-opacity-80 py-0.5">
      <div class="ml-5 w-12 ">
        <i id="burger" @click="menu" class="fas fa-bars hover:text-myPalette-100 cursor-pointer text-2xl block lg:hidden nav-toggler"  data-target="#menu"></i>
      </div>
      <div class="hidden mx-auto w-96 lg:flex justify-around content-center">
        <p class="text-xl text-myPalette-400 hover:text-myPalette-100 cursor-pointer">SERVICES</p>
        <p class="text-xl text-myPalette-400 hover:text-myPalette-100 cursor-pointer">PORTFOLIOS</p>
        <p class="text-xl text-myPalette-400 hover:text-myPalette-100 cursor-pointer">ARTISTS</p>
      </div>
      <p @mouseover="logo" @click="Ahome" id="logo" class="w-20 md:w-24 lg:w-28 h-20 md:h-24 lg:h-28 mx-auto cursor-pointer bg-contain bg-no-repeat bg-center bg-logo"></p>
      <div class="hidden mx-auto w-96 lg:flex justify-around pr-32 content-center">
        <p class="text-xl text-myPalette-400 hover:text-myPalette-100 cursor-pointer">SHOP</p>
        <p class="text-xl text-myPalette-400 hover:text-myPalette-100 cursor-pointer">CONTACT US</p>
      </div>


       <div id="prueba" @click = "submenup" :class="{'hidden': usuarioActivo !=0}" class="flex flex-row-reverse mr-5 bg-myPalette-400 w-12 h-12 rounded-full overflow-hidden border-2 cursor-pointer" data-target="#console-menu">
        <img :src="usuario.imgURL" alt="" class=" object-cover">
      </div>
      <div :class="{'hidden': usuarioActivo !=2} "@click = "submenu" class="flex flex-row-reverse mr-5 w-12 h-12 overflow-hidden profile-toggler cursor-pointer" data-target="#profile-menu">
        <img src="./img/admin.png" alt="" class=" object-cover">
      </div>



    </nav>
    <div id="menu" class="hidden w-full flex-grow top-20 md:top-24 fixed z-10">
      <div class="w-full text-center divide-y-2 font-semibold">
          <a href="#" class="block py-3 text-myPalette-400 bg-myPalette-300 hover:font-bold hover:bg-myPalette-100 hover:text-myPalette-300">
            SERVICES
          </a>
          <a href="#" class="block py-3 text-myPalette-400 bg-myPalette-300 hover:font-bold hover:bg-myPalette-100 hover:text-myPalette-300">
            PORTFOLIOS
          </a>
          <a href="#" class="block py-3 text-myPalette-400 bg-myPalette-300 hover:font-bold hover:bg-myPalette-100 hover:text-myPalette-300">
            ARTISTS
          </a>
          <a href="#" class="block py-3 text-myPalette-400 bg-myPalette-300 hover:font-bold hover:bg-myPalette-100 hover:text-myPalette-300">
            SHOP
          </a>
          <a href="#" class="block py-3 text-myPalette-400 bg-myPalette-300 hover:font-bold hover:bg-myPalette-100 hover:text-myPalette-300">
            CONTACT US
          </a>
      </div>
    </div>


    <!-- ACCOUNT MENU ADMIN -->
    <div  id="profile-menu" class="hidden w-auto flex-grow right-0 top-20 md:top-24 fixed z-10">
      <div class="w-full text-center divide-y-2 font-semibold">
          <p @click="Aadmin" class="cursor-pointer block py-3 px-6 text-myPalette-400 bg-myPalette-300 hover:font-bold hover:bg-myPalette-100 hover:text-myPalette-300">
            SITE MANAGEMENT
          </p>
          <p @click= "salir" class="cursor-pointer block py-3 px-6 text-myPalette-400 bg-myPalette-300 hover:font-bold hover:bg-myPalette-100 hover:text-myPalette-300">
            lOG OUT
          </p>
      </div>
    </div>


    <!-- ACCOUNT MENU -->
    <div id="console-menu" class="hidden w-auto flex-grow right-0 top-20 md:top-24 fixed z-10">
      <div class="w-full text-center divide-y-2 font-semibold">
          <p @click="Aperfil" class="cursor-pointer block py-3 px-6 text-myPalette-400 bg-myPalette-300 hover:font-bold hover:bg-myPalette-100 hover:text-myPalette-300">
            VIEW PROFILE
          </p>
          <p @click = "salir" class="cursor-pointer block py-3 px-6 text-myPalette-400 bg-myPalette-300 hover:font-bold hover:bg-myPalette-100 hover:text-myPalette-300">
            lOG OUT
          </p>
      </div>
    </div>





    <!-- NAVBAR CLOSE -->
    <div class="relative container mx-auto flex flex-col md:flex-row justify-center items-center flex-grow">
        <i id="deleteAcc-icon" @click = "modalEliminar" class="absolute fas fa-trash top-2 right-2 cursor-pointer hover:text-myPalette-100"></i>
        <i id="editPwd-icon" @click = "modalContra" class="absolute fas fa-user-cog top-2 right-8 cursor-pointer hover:text-myPalette-100"></i>
        <div class="m-2 mt-0 flex flex-col justify-center items-center text-center">
            
            <div @mouseover="frameEditFoto" @click = "modalFoto" id="pic-frame" class="relative rounded-full cursor-pointer bg-gray-500 w-24 h-24 border-2 border-myPalette-400 overflow-hidden">
                <div @mouseover="editFoto" id="change-pic" class="absolute opacity-75 hidden bg-myPalette-300 w-full h-full items-center justify-center">
                    <i class="fas fa-edit text-2xl"></i>
                </div>
                <img id="profile-picture" :src="usuario.imgURL" alt="" class="object-cover w-full h-full">
            </div>
            <div class='w-72'>
                <p id="name" class="text-3xl font-semibold">{{usuario.nombre}} <i id="edit-name" class="hover:text-myPalette-100 cursor-pointer fas fa-edit text-xs hidden"></i></p>
            </div>
        </div>


        <!-- max 185 characters KEEP IN MIND -->
        <div @mouseover = "editDescripcion" id="bio" class="flex px-8 items-end">
            <p class=" h-32">{{usuario.descripcion}}</p>
            <i id="edit-bio" @click = "modalDescripcion" class="cursor-pointer fas fa-edit text-xs hidden hover:text-myPalette-100"></i>
        </div>
    </div>
   </div>




   <!-- JUST SHOW SOCIAL MEDIA AND PORTFOLIO CONTAINER ON ARTIST USER PROFILES -->

   <!-- Social Media -->
   <div class="h-14 bg-white flex items-center text-white">
        <div id="facebook-container" class="relative h-full w-1/3 flex items-center justify-center bg-facebook">
          <a href="" class="text-3xl fab fa-facebook-square"><i></i></a>
          <i id="edit-facebook" class="absolute hover:text-myPalette-300 fas fa-edit bottom-2 right-2 cursor-pointer hidden"></i>
        </div>
        <div id="instagram-container" class="relative h-full w-1/3 flex items-center justify-center bg-igbg bg-cover">
          <a href="" class="text-3xl fab fa-instagram "><i></i></a>
          <i id="edit-instagram" class="absolute hover:text-myPalette-300 fas fa-edit bottom-2 right-2 cursor-pointer hidden"></i>
        </div>
        <div id="twitter-container" class="relative h-full w-1/3 flex items-center justify-center bg-twitter">
          <a href="" class="text-3xl fab fa-twitter"><i></i></a>
          <i id="edit-twitter" class="absolute hover:text-myPalette-300 fas fa-edit bottom-2 right-2 cursor-pointer hidden"></i>
        </div>
   </div>

   <!-- Portfolio Container -->
   <div :class="{'hidden': usuario.tipo == 'basico'}" class="bg-myPalette-200 flex flex-col items-center ">
    
    <div class="container grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 my-4 px-4">
      <!-- ONLY VISIBLE ON YOUR OWN PROFILE -->
      <div @click="modalPost" id="createNewPost" class="transition ease-linear text-myPalette-400 hover:text-myPalette-100 flex items-center justify-center col-span-1 child bg-myPalette-100 hover:bg-myPalette-400 cursor-pointer">
        <i class="fas fas fa-plus-circle text-4xl"></i>
      </div>


      <!-- Model of each element -->
      <!-- Show Max 30 in eadh page base:3*10 md:5*6 lg:6*5 -->
      <div v-for="(item,index) in usuario.imagenes" class="post relative col-span-1 child bg-myPalette-100 cursor-pointer">
        <i @click="EliminaPost(index)" class="delete-icon absolute fas fa-trash text-xl text-white bottom-2 right-2"></i>
        <img :src="item.Post" alt="" class="w-full h-full object-cover object-center">
      </div>
      
    </div>
    <!-- OP 1: Load More... -->
    <button class="text-xl text-white hover:text-myPalette-100 bg-myPalette-100 hover:bg-white border-2 border-myPalette-100 py-2 px-4 my-2 ">Load More</button>
    <!-- OP 2: Pagination -->
    <div class="inline-block text-white text-xl bg-myPalette-300 my-2 rounded-md overflow-hidden">
      <a href="#" class="fas fa-arrow-left py-2 px-4 hover:bg-myPalette-100 hover:bg-opacity-50"></a>
      <a href="#" class="py-2 px-4 bg-myPalette-100 hover:bg-myPalette-100 hover:bg-opacity-50">1</a>
      <a href="#" class="py-2 px-4 hover:bg-myPalette-100 hover:bg-opacity-50">2</a>
      <a href="#" class="py-2 px-4 hover:bg-myPalette-100 hover:bg-opacity-50">3</a>
      <a href="#" class="fas fa-arrow-right py-2 px-4 hover:bg-myPalette-100 hover:bg-opacity-50"></a>
    </div>
  </div>

  <!-- POP UPS -->


  <!-- EDIT PASSWORD -->
  <div id="passwordEdit" class="fixed hidden overflow-hidden top-0 right-0 bg-myPalette-300 bg-opacity-50 w-full h-full">
    <div class="relative w-4/5 border-l-4 border-myPalette-100 box-border p-4 md:max-w-md flex flex-col bg-white m-auto">
      <p class="border-b-2 text-xl">Change Password</p>
      <div class="flex">
        <input type="password" maxlength="100" placeholder="New Password" name="" id="input-Npwd" class="outline-none bg-gray-200 my-2 px-2 py-1 flex-grow">
        <i id="eye-1" @click = "eye1" class="eye-icon fas fa-eye cursor-pointer text-2xl text-myPalette-300 hover:text-myPalette-100 py-2 w-9 text-right"></i>
      </div>
      <div class="flex">
        <input type="password" maxlength="100" placeholder="Confirm new Password" name="" id="input-CNpwd" class="outline-none bg-gray-200 my-2 px-2 py-1 flex-grow">
        <i id="eye-2" @click = "eye2" class="eye-icon fas fa-eye cursor-pointer text-2xl text-myPalette-300 hover:text-myPalette-100 py-2 w-9 text-right"></i>
      </div>
      <div class="flex flex-row-reverse mt-2">
        <button id="cancel-password-btn"  @click="cancelarContra" class="text-lg font-semibold text-myPalette-100 hover:text-white border-2 py-1 w-28 border-myPalette-100 hover:bg-myPalette-100">Cancel</button>
        <button id="confirm-password-btn" @click="confirmarContra" class="text-lg font-semibold text-white hover:text-myPalette-100 py-1 w-28 border-2 border-myPalette-100 bg-myPalette-100 hover:bg-transparent mr-1">Confirm</button>
      </div>
    </div>  
  </div>

  <!-- DELETE ACCOUNT . AFTER RUNNING THIS, PLEASE ASK AGAIN WITH A CONFIRM -->
  <div id="delete-acc" class="fixed overflow-hidden hidden top-0 right-0 bg-myPalette-300 bg-opacity-50 w-full h-full">
    <div class="relative w-4/5 border-l-4 border-myPalette-100 box-border p-4 md:max-w-md flex flex-col bg-white m-auto">
      <p class="border-b-2 text-2xl">Delete Account</p>
      <p class="my-2">Are you sure you want to delete your account and all the data it contains?</p>
      <div class="flex flex-row-reverse">
        <button id="cancel-delete-button" @click="cancelarEliminar" class="text-lg font-semibold text-myPalette-100 hover:text-white border-2 py-1 w-28 border-myPalette-100 hover:bg-myPalette-100">Cancel</button>
        <button id="confirm-delete-button" @click="confirmarEliminar" class="text-lg font-semibold text-white hover:text-myPalette-100 py-1 w-28 border-2 border-myPalette-100 bg-myPalette-100 hover:bg-transparent mr-1">Confirm</button>
      </div>
    </div>  
  </div>


  <!-- CONFIRM -->
  <div id="confirm" class="fixed overflow-hidden hidden top-0 right-0 bg-myPalette-300 bg-opacity-50 w-full h-full">
    <div class="relative w-4/5 border-l-4 border-myPalette-100 box-border p-4 md:max-w-md flex flex-col bg-white m-auto">
      <p id = 'confirm-title' class="border-b-2 text-2xl">Confirm Title</p>
      <p id = 'confirm-description' class="my-2">Description about the confirm modal</p>
      <div class="flex flex-row-reverse">
        <button id="cancel-button" class="text-lg font-semibold text-myPalette-100 hover:text-white border-2 py-1 w-28 border-myPalette-100 hover:bg-myPalette-100">Cancel</button>
        <button id="confirm-button" class="text-lg font-semibold text-white hover:text-myPalette-100 py-1 w-28 border-2 border-myPalette-100 bg-myPalette-100 hover:bg-transparent mr-1">Confirm</button>
      </div>
    </div>  
  </div>

  <!-- EDIT SOCIAL MEDIA -->
  <div id="socialMediaEdit" class="fixed overflow-hidden hidden top-0 right-0 bg-myPalette-300 bg-opacity-50 w-full h-full">
    <div class="relative w-4/5 border-l-4 border-myPalette-100 box-border p-4 md:max-w-md flex flex-col bg-white m-auto">
      <p class="border-b-2 text-xl">Facebook</p>
      <input type="text" maxlength="100" placeholder="Facebook page or profile link" name="" id="input-facebook" class="outline-none bg-gray-200 my-2 px-2 py-1">
      <p class="border-b-2 text-xl">Instagram</p>
      <input type="text" maxlength="100" placeholder="Instagram profile link" name="" id="input-instagram" class="outline-none bg-gray-200 my-2 px-2 py-1">
      <p class="border-b-2 text-xl">Twitter</p>
      <input type="text" maxlength="100" placeholder="Twitter profile link" name="" id="input-twitter" class="outline-none bg-gray-200 my-2 px-2 py-1">
      <div class="flex flex-row-reverse mt-2">
        <button id="cancel-media-btn" class="text-lg font-semibold text-myPalette-100 hover:text-white border-2 py-1 w-28 border-myPalette-100 hover:bg-myPalette-100">Cancel</button>
        <button id="confirm-media-btn" class="text-lg font-semibold text-white hover:text-myPalette-100 py-1 w-28 border-2 border-myPalette-100 bg-myPalette-100 hover:bg-transparent mr-1">Confirm</button>
      </div>
    </div>  
  </div>


  <!-- EDIT NAME AND BIO -->
  <div id="aboutEdit" class="fixed overflow-hidden hidden top-0 right-0 bg-myPalette-300 bg-opacity-50 w-full h-full">
    <div class="relative w-4/5 border-l-4 border-myPalette-100 box-border p-4 md:max-w-md flex flex-col bg-white m-auto">
      <p class="border-b-2 text-xl">Name</p>
      <input type="text" maxlength="25" placeholder="What's your name?" name="" id="input-name" class="outline-none bg-gray-200 my-2 px-2 py-1">
      <p class="border-b-2 text-xl">Biography</p>
      <input type="text" maxlength="185" placeholder="Type about you" name="" id="input-bio" class="outline-none bg-gray-200 my-2 px-2 py-1">
      <div class="flex flex-row-reverse mt-2">
        <button @click="cancelarDescripcion" id="cancel-about-btn" class="text-lg font-semibold text-myPalette-100 hover:text-white border-2 py-1 w-28 border-myPalette-100 hover:bg-myPalette-100">Cancel</button>
        <button @click="confirmarDescripcion" id="confirm-about-btn" class="text-lg font-semibold text-white hover:text-myPalette-100 py-1 w-28 border-2 border-myPalette-100 bg-myPalette-100 hover:bg-transparent mr-1">Confirm</button>
      </div>
    </div>  
  </div>


  

  <!-- EDIT PROFILE PICTURE -->
  <div id="pictureEdit" class="hidden fixed overflow-hidden top-0 right-0 bg-myPalette-300 bg-opacity-50 w-full h-full">
    <div class="relative w-4/5 border-l-4 border-myPalette-100 box-border p-4 sm:max-w-sm flex flex-col bg-white m-auto">
      <div class="relative box-border overflow-hidden text-myPalette-100 flex flex-col items-center justify-center w-full bg-myPalette-300  postImg">
        <img id="img-user" src="" alt="" class="absolute w-full h-full object-cover">
        <i class="fas fas fa-cloud-upload-alt text-9xl "></i>
        <p class="font-semibold">No file selected, yet!</p>
        <i id="cancel-user-img" class="fas fa-times absolute top-2 right-2 cursor-pointer hover:text-white hidden"></i>
        <div id="profile-img-name" class="absolute w-full bottom-0 p-2 text-center bg-opacity-75 bg-myPalette-100 text-myPalette-400 font-semibold overflow-hidden hidden">File name here</div>
      </div>
      <button @click="selecFoto" id="pic-btn" class=" py-2 mt-1 text-myPalette-400 hover:text-myPalette-100 font-semibold bg-myPalette-100 hover:bg-transparent border-2 border-myPalette-100">Choose image</button>
      <input type="file" name="" id="profile-image-input" accept="image/*" class="hidden">
      <div class="flex justify-center mt-1">
        <button @click= "aceptarFoto" id="confirm-image-user" class="text-lg font-semibold text-white hover:text-myPalette-100 py-1 w-28 border-2 border-myPalette-100 bg-myPalette-100 mr-1 hover:bg-transparent">Confirm</button>
        <button @click= "cancelarFoto" id="cancel-image-user" class="text-lg font-semibold text-myPalette-100 hover:text-white border-2 py-1 w-28 hover:bg-myPalette-100 border-myPalette-100">Cancel</button>
      </div>
    </div>  
  </div>




  <!-- NEW POST -->
  <div id="newPost" class="hidden fixed overflow-hidden top-0 right-0 bg-myPalette-300 bg-opacity-50 w-full h-full">
    <div class="relative w-4/5 border-l-4 border-myPalette-100 box-border p-4 sm:max-w-sm flex flex-col bg-white m-auto">
      <div class="relative box-border overflow-hidden text-myPalette-100 flex flex-col items-center justify-center w-full bg-myPalette-300 h-5 postImg2">
        <img id="img-post" src="" alt="" class="absolute w-full h-full object-cover">
        <i class="fas fas fa-cloud-upload-alt text-9xl "></i>
        <p class="font-semibold">No file selected, yet!</p>
        <i id="cancel-btn" class="fas fa-times absolute top-2 right-2 cursor-pointer hover:text-white hidden"></i>
        <div id="file-name" class="absolute w-full bottom-0 p-2 text-center bg-opacity-75 bg-myPalette-100 text-myPalette-400 font-semibold overflow-hidden hidden">File name here</div>
      </div>
      <button @click="selecPost" id="custom-btn" class=" py-2 mt-1 text-myPalette-400 hover:text-myPalette-100 font-semibold bg-myPalette-100 hover:bg-transparent border-2 border-myPalette-100">Choose image</button>
      <input type="file" name="" id="image-input" accept="image/*" class="hidden">
      <div class="flex justify-center mt-2">
        <button @click="confirmarPost" id="confirm-post" class="text-lg font-semibold text-white hover:text-myPalette-100 py-1 w-28 border-2 border-myPalette-100 bg-myPalette-100 mr-1 hover:bg-transparent">Confirm</button>
        <button @click="cancelarPost" id="cancel-post" class="text-lg font-semibold text-myPalette-100 hover:text-white border-2 py-1 w-28 hover:bg-myPalette-100 border-myPalette-100">Cancel</button>
      </div>
    </div>  
  </div>
</div>

	`,methods:{
		    ...Vuex.mapMutations(['Ahome']),
        ...Vuex.mapMutations(['logo']),
        ...Vuex.mapMutations(['menu']),
        ...Vuex.mapMutations(['submenu','submenup']),
        ...Vuex.mapMutations(['modalContra','eye1','eye2','cancelarContra','confirmarContra']),
        ...Vuex.mapMutations(['modalEliminar',"confirmarEliminar","cancelarEliminar"]),
        ...Vuex.mapMutations(['modalDescripcion','cancelarDescripcion','confirmarDescripcion']),
        ...Vuex.mapMutations(['modalFoto','cancelarFoto','selecFoto']),
        ...Vuex.mapMutations(['modalPost','cancelarPost','selecPost','confirmarPost']),
        ...Vuex.mapMutations(['Aadmin',"Aperfil"]),
        ...Vuex.mapMutations(['salir']),
        ...Vuex.mapMutations(['editDescripcion','editFoto','frameEditFoto','aceptarFoto']),
        //Funcion para eliminar el post
        EliminaPost(index){
          var user = firebase.auth().currentUser;
          firebase.database().ref('/Posts/'+user.uid+"/"+store.state.usuario.imagenes[index].KeyPost).remove().then(function(){
            store.state.usuario.imagenes.splice(index,1);
          }); 
        }


	},computed:{
		...Vuex.mapState(['usuarioActivo']),
		...Vuex.mapState(['usuario']),
	}
}

export{MiPerfil}