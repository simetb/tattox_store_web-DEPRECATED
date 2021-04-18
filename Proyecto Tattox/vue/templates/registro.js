//Template del registro
const Registro = {template: `
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
      <p  @mouseover="logo" @click="Ahome" id="logo" class="w-20 md:w-24 lg:w-28 h-20 md:h-24 lg:h-28 mx-auto cursor-pointer bg-contain bg-no-repeat bg-center bg-logo"></p>
      <div class="hidden mx-auto w-96 lg:flex justify-around pr-32 content-center">
        <p class="text-xl text-myPalette-400 hover:text-myPalette-100 cursor-pointer">SHOP</p>
        <p class="text-xl text-myPalette-400 hover:text-myPalette-100 cursor-pointer">CONTACT US</p>
      </div>
      <div class="flex flex-col mr-5 w-16 lg:w-32 h-20 items-center">
        <button class="hidden sm:block text-myPalette-400 hover:text-myPalette-100 bg-myPalette-100 hover:bg-myPalette-400 rounded w-full h-8 font-medium my-2">Sign up</button>
        <p @click="Alogin" class="hidden sm:block cursor-pointer">Log in</p>
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
          <div class="flex sm:hidden justify-around py-3 text-myPalette-400 bg-myPalette-300 ">
            <button class="bg-transparent hover:bg-myPalette-400 border-2 rounded p-2 w-1/3 text-myPalette-400 font-medium hover:text-myPalette-100 text-lg">Log in</button>
            <button class="bg-myPalette-100 hover:bg-myPalette-400 rounded p-2 w-1/3 text-myPalette-400 font-medium hover:text-myPalette-100 text-lg">Sign up</button>
          </div>
      </div>
    </div>
    <!-- NAVBAR CLOSE -->
    <!-- FORM -->
    <div class="container mx-auto flex flex-col items-center justify-center text-center flex-grow">
      <div class="bg-myPalette-300 bg-opacity-80 px-4 py-4 max-w-xs md:max-w-md lg:max-w-lg flex flex-col items-center justify-items-center">
        <p class="text-3xl md:4xl font-bold">SIGN IN</p>
        <button class="hover:text-myPalette-300 border-2 border-myPalette-400 bg-transparent hover:bg-white rounded-full w-72 flex items-center justify-evenly py-1 my-4">
          <img src="./svg/google.svg" alt="" srcset="" class="w-6 h-6 ml-6">
          <button class="flex-grow" @click="Google">Continue with Google</button>
        </button>
        <button class="hover:text-myPalette-300 border-2 border-myPalette-400 bg-transparent hover:bg-white rounded-full w-72 flex items-center justify-evenly py-1 mb-4">
          <img src="./svg/facebook.svg" alt="" srcset="" class="w-6 h-6 ml-6">
          <button class="flex-grow" @click="Facebook">Continue with Facebook</button>
        </button>
        <div class="flex flex-col items-start w-72">
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" class="w-72 p-1 text-myPalette-300" placeholder="example@mail.com">
        </div>
        <div class="flex flex-col items-start w-72 my-2">
          <label for="email">Password:</label>
          <input type="password" name="email" id="pass" class="w-72 p-1 text-myPalette-300" placeholder="••••••••">
        </div>
        <div class="flex flex-col items-start w-72 mb-4">
          <label for="email">Confirm Password:</label>
          <input type="password" name="email" id="pass2" class="w-72 p-1 text-myPalette-300" placeholder="••••••••">
        </div>
        <input type="button"  @click="registro_conexion" value="Sign in" class="hover:text-myPalette-100 bg-myPalette-100 hover:bg-myPalette-400 w-72 cursor-pointer text-xl font-semibold py-2">
        <p>Do you have an account?</p>
        <a @click="Alogin" class="font-bold mb-2">Log in</a>
        <p class="text-xs">By joining to Art TATTOO Studio, you agree to our Terms and Services</p>
      </div>
    </div>
  </div>

 
  </div>  
	`,methods:{
    ...Vuex.mapMutations(['registro_conexion']),
    ...Vuex.mapMutations(['Ahome']),
    ...Vuex.mapMutations(['Alogin']),
    ...Vuex.mapMutations(['logo']),
    ...Vuex.mapMutations(['menu']),
    ...Vuex.mapMutations(['Google']),
    ...Vuex.mapMutations(['Facebook'])
  }
}

export {Registro}