//Template del home
const Home = {template:`
<div>
    <!-- HEADER + NAVBAR -->
    <div class="flex flex-col h-screen bg-banner bg-cover bg-center text-myPalette-400">
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
    <div class="container mx-auto flex flex-col items-center justify-center text-center flex-grow">
    <p class="text-5xl lg:text-6xl font-extrabold w-72 lg:w-auto">IT'S ALL ABOUT ART</p>
    <p class="font-bold text-myPalette-100 text-3xl w-80">We bring to life anything in your mind</p>
    </div>
    <button class="hover:text-myPalette-100 bg-myPalette-100 hover:bg-myPalette-400 w-80 text-xl font-bold cursor-pointer py-2 mx-auto mb-3">MAKE AN APPOINTMENT NOW</button>
    </div>
</div> `,methods:{
    ...Vuex.mapMutations(['Ahome']),
    ...Vuex.mapMutations(['logo']),
    ...Vuex.mapMutations(['menu'])
}
}

export {Home}