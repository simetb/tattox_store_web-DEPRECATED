//Template para el login
const Login = {template: `
<div>
<!-- HEADER + NAVBAR -->
<div class="flex flex-col h-screen bg-log_in_bg bg-cover bg-center text-myPalette-400">
  <!-- NAVBAR OPEN -->
  <nav class="flex flex-nowrap items-center h-20 md:h-24 lg:h-28 bg-myPalette-300 bg-opacity-80 py-0.5">
	<div class="ml-5 w-12 ">
	  <i id="burger" @click="menu" class="fas fa-bars hover:text-myPalette-100 cursor-pointer text-2xl block lg:hidden nav-toggler"  data-target="#menu"></i>
	</div>
	<div class="hidden mx-auto w-96 lg:flex justify-around content-center">
	  
	  <p class="text-xl text-myPalette-400 hover:text-myPalette-100 cursor-pointer">APPOINTMENT</p>
	  <p class="text-xl text-myPalette-400 hover:text-myPalette-100 cursor-pointer">ARTISTS</p>
	</div>
	<a @click="Ahome" @mouseover="logo" id="logo" class="w-20 md:w-24 lg:w-28 h-20 md:h-24 lg:h-28 mx-auto cursor-pointer bg-contain bg-no-repeat bg-center bg-logo"></a>
	<div class="hidden mx-auto w-96 lg:flex justify-around pr-32 content-center">
	  <p class="text-xl text-myPalette-400 hover:text-myPalette-100 cursor-pointer">SHOP</p>
	  <p class="text-xl text-myPalette-400 hover:text-myPalette-100 cursor-pointer">SERVICES</p>
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
		  APPOINTMENT
		</a>
		<a href="#" class="block py-3 text-myPalette-400 bg-myPalette-300 hover:font-bold hover:bg-myPalette-100 hover:text-myPalette-300">
		  ARTISTS
		</a>
		<a href="#" class="block py-3 text-myPalette-400 bg-myPalette-300 hover:font-bold hover:bg-myPalette-100 hover:text-myPalette-300">
		  SHOP
		</a>
		<a href="#" class="block py-3 text-myPalette-400 bg-myPalette-300 hover:font-bold hover:bg-myPalette-100 hover:text-myPalette-300">
		  SERVICES
		</a>
	</div>
  </div>
  <!-- NAVBAR CLOSE -->
  <!-- FORM -->
  <div class="container mx-auto flex flex-col items-center justify-center text-center flex-grow">
	<div class="bg-myPalette-300 bg-opacity-80 px-4 py-4 max-w-xs md:max-w-md lg:max-w-lg flex flex-col items-center justify-items-center">
	  <p class="text-3xl md:4xl font-bold">LOG IN</p>
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
		<input type="password" name="email" id="password" class="w-72 p-1 text-myPalette-300" placeholder="••••••••">
	  </div>
	  <input type="button" @click="verifyLogin" value="Log in" class="hover:text-myPalette-100 bg-myPalette-100 hover:bg-myPalette-400 w-72 cursor-pointer text-xl font-semibold py-2">
	  <p>Don't you have an account?</p>
	  <a @click="Aregistro" class="font-bold mb-2">Sign in</a>
	</div>
  </div>
</div>
</div>
`,methods:{
	...Vuex.mapMutations(['verifyLogin']),
	...Vuex.mapMutations(['Aregistro']),
	...Vuex.mapMutations(['Ahome']),
	...Vuex.mapMutations(['logo']),
	...Vuex.mapMutations(['menu'])
	}
}


export{Login}