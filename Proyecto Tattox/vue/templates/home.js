//Template del home
const Home = {template:`
<div>
    <!-- HEADER + NAVBAR -->
    <div class="flex flex-col h-screen bg-banner bg-cover bg-center text-myPalette-400">
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
    <a href="./home.html" id="logo" class="w-20 md:w-24 lg:w-28 h-20 md:h-24 lg:h-28 mx-auto cursor-pointer bg-contain bg-no-repeat bg-center bg-logo"></a>
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
    <div class="container mx-auto flex flex-col items-center justify-center text-center flex-grow">
    <p class="text-5xl lg:text-6xl font-extrabold w-72 lg:w-auto">IT'S ALL ABOUT ART</p>
    <p class="font-bold text-myPalette-100 text-3xl w-80">We bring to life anything in your mind</p>
    </div>
    <button class="hover:text-myPalette-100 bg-myPalette-100 hover:bg-myPalette-400 w-80 text-xl font-bold cursor-pointer py-2 mx-auto mb-3">MAKE AN APPOINTMENT NOW</button>
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
</div> `
}

export {Home}