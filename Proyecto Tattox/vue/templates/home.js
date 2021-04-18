import {store} from './../store.js'
import {router} from './../router.js'

//Template del home
const Home = {template:`
<div>
    <!-- HEADER + NAVBAR -->
  <div class="flex flex-col h-screen bg-banner bg-cover bg-center text-myPalette-400">
    <!-- NAVBAR OPEN -->
    <nav class="flex flex-nowrap items-center h-20 md:h-24 lg:h-28 bg-myPalette-300 bg-opacity-80 py-0.5">
      <div class="ml-5 w-16 lg:w-32 h-16 flex items-center">
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


      <!-- Trabajar desde aqui -->
      <div id="prueba" @click = "submenup" :class="{'hidden': usuarioActivo !=0}" class="flex flex-row-reverse mr-5 bg-myPalette-400 w-12 h-12 rounded-full overflow-hidden border-2 cursor-pointer" data-target="#console-menu">
        <img :src="usuario.imgURL" alt="" class=" object-cover">
      </div>
      <div :class="{'hidden': usuarioActivo !=1}" class="flex flex-col mr-5 w-16 lg:w-32 h-20 items-center">
        <button @click = "Aregistro" class="hidden sm:block text-myPalette-400 hover:text-myPalette-100 bg-myPalette-100 hover:bg-myPalette-400 rounded w-full h-8 font-medium my-2">Sign up</button>
        <p @click="Alogin" class="hidden sm:block cursor-pointer">Log in</p>
      </div>
      <div :class="{'hidden': usuarioActivo !=2} "@click = "submenu" class="flex flex-row-reverse mr-5 w-12 h-12 overflow-hidden profile-toggler cursor-pointer" data-target="#profile-menu">
        <img src="./img/admin.png" alt="" class=" object-cover">
      </div>
      <!-- hasta aqui -->


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
          <div class="flex sm:hidden justify-around py-3 text-myPalette-400 bg-myPalette-300 ">
            <button class="bg-transparent hover:bg-myPalette-400 border-2 rounded p-2 w-1/3 text-myPalette-400 font-medium hover:text-myPalette-100 text-lg">Log in</button>
            <button class="bg-myPalette-100 hover:bg-myPalette-400 rounded p-2 w-1/3 text-myPalette-400 font-medium hover:text-myPalette-100 text-lg">Sign up</button>
          </div>
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
          <p @click = "Aperfil" href="#" class="cursor-pointer block py-3 px-6 text-myPalette-400 bg-myPalette-300 hover:font-bold hover:bg-myPalette-100 hover:text-myPalette-300">
            VIEW PROFILE
          </p>
          <p @click= "salir" class="cursor-pointer block py-3 px-6 text-myPalette-400 bg-myPalette-300 hover:font-bold hover:bg-myPalette-100 hover:text-myPalette-300">
            lOG OUT
          </p>
      </div>
    </div>



    <!-- NAVBAR CLOSE -->
   <div class="container mx-auto flex flex-col items-center justify-center text-center flex-grow">
      <p class="text-5xl lg:text-6xl font-extrabold w-72 lg:w-auto">IT'S ALL ABOUT ART</p>
      <p class="font-bold text-myPalette-100 text-3xl w-80">We bring to life anything in your mind</p>
    </div>
    <button class="hover:text-myPalette-100 bg-myPalette-100 hover:bg-myPalette-400 w-80 text-xl font-bold cursor-pointer py-2 mx-auto mb-3">MAKE AN APPOINTMENT NOW</button>
  </div>

  <div class="flex flex-wrap">
    <div class="w-screen md:w-1/3 h-vw md:h-96 bg-tattoo-card bg-cover bg-center">
      <div class="w-full h-full bg-accent-gradient flex justify-center items-end text-center">
        <p class="text-4xl font-bold text-myPalette-400 mb-2">TATTOOS</p>
      </div>
    </div>
    <div class="w-screen md:w-1/3 h-vw md:h-96 bg-piercing-card bg-cover bg-center">
      <div class="w-full h-full bg-accent-gradient flex justify-center items-end text-center">
        <p class="text-4xl font-bold text-myPalette-400 mb-2">PIERCINGS</p>
      </div>
    </div>
    <div class="w-screen md:w-1/3 h-vw md:h-96 bg-accesories-card bg-cover bg-center">
      <div class="w-full h-full bg-accent-gradient flex justify-center items-end text-center">
        <p class="text-4xl font-bold text-myPalette-400 mb-2">ACCESORIES</p>
      </div>
    </div>
  </div>

  <div class="bg-myPalette-200 py-4">
    <p class="text-4xl font-bold text-center text-white mb-2">MEET OUR ARTISTS</p>
    <div class="flex flex-wrap container m-auto">

      <div v-for="(item,index) in trabajadores"class="w-screen md:w-1/3 h-auto">
        <div @click="verPerfil(index)" class="w-full h-full cursor-pointer flex flex-col justify-center items-center text-center">
          <img :src="item.ImgPerfil" @mouseover="gray_color" alt="" class="w-full filter-gray transition-all ease-in duration-500">
          <div class="bg-ink bg-center bg-contain bg-no-repeat w-2/3 h-32 z-10 mt--50 flex items-center justify-center text-white font-bold text-2xl">
            {{item.Nombre}}
          </div>
        </div>
      </div>

    </div>
  </div>

</div> `,methods:{
        ...Vuex.mapMutations(['Ahome']),
        ...Vuex.mapMutations(['logo']),
        ...Vuex.mapMutations(['menu']),
        ...Vuex.mapMutations(['submenu','submenup']),
        ...Vuex.mapMutations(['Alogin','Aregistro','Aadmin']),
        ...Vuex.mapMutations(['Aperfil']),
        ...Vuex.mapMutations(['salir']),
        ...Vuex.mapMutations(['gray_color']),
        verPerfil(index){
          store.state.trabajador = {}
          store.state.fotosT = []
          store.state.trabajador.usuario = store.state.trabajadores[index]
          //Cargamos los post
          //Cargamos los Post del usuario
          var id= store.state.trabajador.usuario.Usuario;
          firebase.database().ref('/Posts/'+ id).once('value').then(function(snapshot){
              //Almacenamos la informacion
              var post = snapshot.val();
              //Almacenamos la informacion de todos los videos por su key
              for(let key in post){
                  firebase.database().ref('/Posts/'+id+'/'+key).once('value').then(function(snapshot){
                      //Almacenamos la informacion del video
                      var infoPosts = snapshot.val();
                      store.state.fotosT.push(infoPosts);

                  });
              }
              
          });
          router.push('/perfil')
        }

    },
    computed:{
        ...Vuex.mapState(['usuarioActivo']),
        ...Vuex.mapState(['usuario']),
        ...Vuex.mapState(['trabajadores'])
    }
}

export {Home}