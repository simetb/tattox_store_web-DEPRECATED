const Perfil = {template:`
	<div>
  <!-- HEADER + NAVBAR -->
  <div class="flex flex-col h-96 bg-bricks bg-cover bg-center text-myPalette-400 overflow-hidden">
    <!-- NAVBAR OPEN -->
    <nav class="flex flex-nowrap items-center h-20 md:h-24 lg:h-28 bg-myPalette-300 bg-opacity-80 py-0.5">
      <div class="ml-5 w-12 ">
        <i id="burger"@click="menu" class="fas fa-bars hover:text-myPalette-100 cursor-pointer text-2xl block lg:hidden nav-toggler"  data-target="#menu"></i>
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
      </div>
    </div>
    <!-- NAVBAR CLOSE -->
    <div class="relative container mx-auto flex flex-col md:flex-row justify-center items-center flex-grow">
        <div class="m-2 mt-0 flex flex-col justify-center items-center text-center">
            <div id="pic-frame" class="relative rounded-full cursor-pointer bg-gray-500 w-24 h-24 border-2 border-myPalette-400 overflow-hidden">
                <img id="profile-picture" :src="trabajador.usuario.ImgPerfil" alt="" class="object-cover w-full h-full">
            </div>
            <div class='w-72'>
                <p id="name" class="text-3xl font-semibold">{{trabajador.usuario.Nombre}}</p>
            </div>
        </div>
        <!-- max 185 characters KEEP IN MIND -->
        <div id="bio" class="flex px-8 items-end">
            <p class=" h-32">{{trabajador.usuario.Descripcion}}</p>
        </div>
    </div>
   </div>

   <!-- JUST SHOW SOCIAL MEDIA AND PORTFOLIO CONTAINER ON ARTIST USER PROFILES -->

   <!-- Social Media -->
   <div class="h-14 bg-white flex items-center text-white">
    <div id="facebook-container" class="relative h-full w-1/3 flex items-center justify-center bg-facebook">
      <a href="" class="text-3xl fab fa-facebook-square"><i></i></a>
      </div>
    <div id="instagram-container" class="relative h-full w-1/3 flex items-center justify-center bg-igbg bg-cover">
      <a href="" class="text-3xl fab fa-instagram "><i></i></a>
      </div>
    <div id="twitter-container" class="relative h-full w-1/3 flex items-center justify-center bg-twitter">
      <a href="" class="text-3xl fab fa-twitter"><i></i></a>
      </div>
    </div>

    <!-- Portfolio Container -->
    <div class=" bg-myPalette-200 flex flex-col items-center ">

    <div class="container grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 my-4 px-4">
    <!-- Model of each element -->
    <!-- Show Max 30 in eadh page base:3*10 md:5*6 lg:6*5 -->
    <div v-for="(item,index) in fotosT" class="post relative col-span-1 child bg-myPalette-100 cursor-pointer">
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

</div>


	`,methods:{
        ...Vuex.mapMutations(['Ahome']),
        ...Vuex.mapMutations(['logo']),
        ...Vuex.mapMutations(['menu']),
        ...Vuex.mapMutations(['submenu','submenup']),
        ...Vuex.mapMutations(['Alogin','Aregistro','Aadmin']),
        ...Vuex.mapMutations(['Aperfil']),
        ...Vuex.mapMutations(['salir']),


	 },computed:{
    ...Vuex.mapState(['usuarioActivo']),
    ...Vuex.mapState(['usuario']),
    ...Vuex.mapState(['trabajador']),
    ...Vuex.mapState(['fotosT'])
	}
}

export{Perfil}