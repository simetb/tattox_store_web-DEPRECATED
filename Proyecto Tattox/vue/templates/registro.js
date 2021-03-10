//Template del registro
const Registro = {template: `
	<div>
  <!-- HEADER + NAVBAR -->
  <div class="flex flex-col h-screen bg-sign_in_bg bg-cover bg-center text-myPalette-400">
    <!-- NAVBAR OPEN -->
    <nav class="flex flex-nowrap items-center h-20 md:h-24 lg:h-28 bg-myPalette-300 bg-opacity-80 py-0.5">
      <div class="ml-5 w-12 ">
        <i id="burger" class="fas fa-bars hover:text-myPalette-100 cursor-pointer text-2xl block lg:hidden nav-toggler"  data-target="#menu"></i>
      </div>
      <div class="hidden mx-auto w-96 lg:flex justify-around content-center">
        <p class="text-xl text-myPalette-400 hover:text-myPalette-100 cursor-pointer">SERVICES</p>
        <p class="text-xl text-myPalette-400 hover:text-myPalette-100 cursor-pointer">PORTFOLIOS</p>
        <p class="text-xl text-myPalette-400 hover:text-myPalette-100 cursor-pointer">ARTISTS</p>
      </div>
      <a @click="Ahome"  id="logo" class="w-20 md:w-24 lg:w-28 h-20 md:h-24 lg:h-28 mx-auto cursor-pointer bg-contain bg-no-repeat bg-center bg-logo"></a>
      <div class="hidden mx-auto w-96 lg:flex justify-around pr-32 content-center">
        <p class="text-xl text-myPalette-400 hover:text-myPalette-100 cursor-pointer">SHOP</p>
        <p class="text-xl text-myPalette-400 hover:text-myPalette-100 cursor-pointer">CONTACT US</p>
      </div>
      <div class="flex flex-row-reverse mr-5">
        <img src="" alt="" class="bg-myPalette-400 w-12 h-12 rounded-full">
      </div>
    </nav>
    <div id="menu" class="hidden w-full flex-grow top-20 md:top-24 fixed">
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
    <!-- FORM -->
    <div class="container mx-auto flex flex-col items-center justify-center text-center flex-grow">
      <div class="bg-myPalette-300 bg-opacity-80 px-4 py-4 max-w-xs md:max-w-md lg:max-w-lg flex flex-col items-center justify-items-center">
        <p class="text-3xl md:4xl font-bold">SIGN IN</p>
        <button class="hover:text-myPalette-300 border-2 border-myPalette-400 bg-transparent hover:bg-white rounded-full w-72 flex items-center justify-evenly py-1 my-4">
          <img src="./svg/google.svg" alt="" srcset="" class="w-6 h-6 ml-6">
          <p class="flex-grow">Continue with Google</p>
        </button>
        <button class="hover:text-myPalette-300 border-2 border-myPalette-400 bg-transparent hover:bg-white rounded-full w-72 flex items-center justify-evenly py-1 mb-4">
          <img src="./svg/facebook.svg" alt="" srcset="" class="w-6 h-6 ml-6">
          <p class="flex-grow">Continue with Facebook</p>
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
        <a href="./log_in.html" class="font-bold mb-2">Log in</a>
        <p class="text-xs">By joining to Art TATTOO Studio, you agree to our Terms and Services</p>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <div class="bg-myPalette-300 h-auto lg:h-screen flex flex-col">
    <div class="container mx-auto flex-grow flex flex-wrap justify-around text-myPalette-400">
      <div class="w-full h-32 md:h-40 bg-contain bg-no-repeat bg-center bg-logo my-8"></div>
      <div class="text-left w-80 md:w-auto md:max-w-xs my-2">
        <p class="text-xl md:text-2xl font-bold">STUDIO</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quis laboriosam nulla eveniet, inventore non esse cumque architecto tenetur illo dolore excepturi nihil aliquid natus debitis blanditiis magni optio ducimus.</p>
        <div class="mt-2">
          <div class="flex items-center mb-1">
            <i class="text-myPalette-100 mr-2 fas fa-map-marker-alt"></i> 
            <p>Location</p>
          </div>
          <div class="flex items-center mb-1">
            <i class="text-myPalette-100 mr-2 fas fa-map-marker-alt"></i> 
            <p>Location</p>
          </div>
          <div class="flex items-center">
            <i class="text-myPalette-100 mr-2 fas fa-map-marker-alt"></i> 
            <p>Location</p>
          </div>
        </div>
      </div>
      <div class="text-left w-80 md:max-w-xs my-2 block lg:flex lg:justify-center">
        <div class="">
          <p class="text-xl md:text-2xl font-bold">WORKING HOURS</p>
          <p>Monday - Tuesday / Appointment</p>
          <p>Wednesday - Friday / 12:00 - 9:00pm</p>
          <p>Saturday / 12:00 - 6:00pm</p>
          <p>Sunday / On God's day we don't work</p>
        </div>
      </div>
      <div class="text-left w-80 md:max-w-xs my-2 block md:flex md:justify-center">
        <div>
          <p class="text-xl md:text-2xl font-bold">SOCIAL MEDIA</p>
          <div>
            <div class="flex items-center mb-1">
              <i class="text-myPalette-100 mr-2 fab fa-facebook"></i> 
              <p><a href="">Faceebook</a></p>
            </div>
            <div class="flex items-center">
              <i class="text-myPalette-100 mr-2 fab fa-twitter"></i> 
              <p><a href="">Twitter</a></p>
            </div>
            <div class="flex items-center mb-1">
              <i class="text-myPalette-100 mr-2 fab fa-instagram"></i> 
              <p><a href="">Instagram</a></p>
            </div>
            <div class="flex items-center mb-1">
              <i class="text-myPalette-100 mr-2 fab fa-pinterest"></i> 
              <p><a href="">Pinterest</a></p>
            </div>
          </div>
        </div>
      </div> 
    </div>
    <div class="w-full bg-myPalette-100 text-center font-semibold text-myPalette-300 py-2 mt-4">
      <p>&copy; ALL RIGHTS RESERVED</p>
    </div>
  </div>
  </div>  
	`,methods:{
    ...Vuex.mapMutations(['registro_conexion']),
    ...Vuex.mapMutations(['Ahome']),
    ...Vuex.mapMutations(['Alogin']),
    ...Vuex.mapMutations(['Aregistro'])
  }
}

export {Registro}