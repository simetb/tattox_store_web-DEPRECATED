//Template del home
const Admin = {template:`
<div>
   <!-- HEADER + NAVBAR ADMIN VERSION -->
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
      <div @click = "submenu" class="flex flex-row-reverse mr-5 w-12 h-12 overflow-hidden profile-toggler cursor-pointer" data-target="#profile-menu">
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

    <!-- ACCOUNT MENU -->
    <div id="profile-menu" class="hidden w-auto flex-grow right-0 top-20 md:top-24 fixed z-10">
      <div class="w-full text-center divide-y-2 font-semibold">
          <p @click="Aadmin" class="cursor-pointer block py-3 px-6 text-myPalette-400 bg-myPalette-300 hover:font-bold hover:bg-myPalette-100 hover:text-myPalette-300">
            SITE MANAGEMENT
          </p>
          <p @click = "salir" class="cursor-pointer block py-3 px-6 text-myPalette-400 bg-myPalette-300 hover:font-bold hover:bg-myPalette-100 hover:text-myPalette-300">
            lOG OUT
          </p>
      </div>
    </div>

    <!-- NAVBAR CLOSE -->
    <div class="relative container mx-auto flex flex-col md:flex-row justify-center items-center flex-grow">
      <i id="editPwd-icon" @click = "modalContra" class="absolute fas fa-user-cog top-2 right-2 cursor-pointer hover:text-myPalette-100"></i>
        <div class="m-2 mt-0 flex flex-col justify-center items-center text-center">
            <div id="pic-frame" class="cursor-pointer w-24 h-24 overflow-hidden">
                <img id="profile-picture" src="./img/admin.png" alt="" class="object-contain">
            </div>
            <div class='w-72'>
                <p class="text-3xl font-semibold">Admin</p>
            </div>
        </div>
    </div>
  </div>

   <!-- JUST SHOW SOCIAL MEDIA AND PORTFOLIO CONTAINER ON ARTIST USER PROFILES -->
   <!-- Portfolio Container -->
  <div class=" bg-myPalette-200 flex flex-col items-center ">    
    <div class="container grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 my-4 px-4">
      <!-- ADMIN MENU OPTIONS -->
      <!-- THIS ONE OPENS A WINDOW TO VIEW AND GESTIONATE EVERY SINGLE USER -->
      <div @click="muestraUsuarios" id="manageUsers" class="transition ease-linear text-myPalette-400 hover:text-myPalette-100 flex items-center justify-center col-span-1 child bg-myPalette-100 hover:bg-myPalette-400 cursor-pointer">
        <i class="fas fas fa-users-cog text-4xl"></i>
      </div>
      <!-- THIS ONE IS FOR CREATE A NEW USER -->
      <div id="addUser"  @click = "usuarioTrabajador" class="transition ease-linear text-myPalette-400 hover:text-myPalette-100 flex items-center justify-center col-span-1 child bg-myPalette-100 hover:bg-myPalette-400 cursor-pointer">
        <i class="fas fas fa-user-plus text-4xl"></i>
      </div>
    </div>
  </div>


  <!-- JUST DISPLAY WHEN MANAGEUSERS IS PRESSED. HIDDEN MY DEFAULT, U CAN DELETE THE 'HIDDEN' CLASS DEPENDING ON IT'S USE -->
  <div id="muestraUsuarios" class="bg-myPalette-200 flex flex-col items-center hidden">
    <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-4 px-4">
      <div class="flex col-span-1 md:col-span-2 lg:col-span-3 bg-white mb-2">
        <input type="text" name="" id="filter-users" class="flex-grow mr-2 px-2 py-1" placeholder="user name">
        <i class="fas fas fa-search text-xl text-gray-400 hover:text-myPalette-100 cursor-pointer mx-2"></i>
      </div>

      <!-- DEFAULT DISPLAY OF EVERY SINGLE USER, ONCE CLICKED THE 'EDITUSER' ICON, OPEN ITS PROFILE WITH THE EDIT ADDONS -->
      <div v-for="(item,index) in usuarios" class="h-32 bg-myPalette-100 hover:bg-white flex items-center justify-between text-white hover:text-myPalette-100 transition ease-out duration-200">
        <div class="flex flex-row-reverse ml-2 h-24 w-24 overflow-hidden profile-toggler rounded-full" data-target="#profile-menu">
          <img id="profileList-pic" :src="item.ImgPerfil" alt="" class=" object-cover">
        </div>
        <p class="text-xl">{{item.Nombre}} </p>
        <p class="text-xl">{{item.TipoUsuario}}</p>
        <div class="mr-2 text-2xl">
          <i id="" @click="editarUsuario" class="block fas fa-user-edit cursor-pointer"></i>
        </div>
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

  <!-- JUST DISPLAY WHEN ADDUSER IS PRESSED. HIDDEN MY DEFAULT, U CAN DELETE THE 'HIDDEN' CLASS DEPENDING ON IT'S USE -->
  <div id="usuarioTrabajador" class="w-full h-screen bg-myPalette-200 flex hidden">
    <div class="container m-auto flex flex-col items-center justify-center text-center flex-grow text-white">
      <div class="bg-myPalette-100 bg-opacity-80 px-4 py-4 max-w-xs md:max-w-md lg:max-w-lg flex flex-col items-center justify-items-center">
        <p class="text-3xl md:4xl font-bold">NEW USER</p>
        <div class="flex flex-col items-start w-72">
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" class="w-72 p-1 text-myPalette-300" placeholder="example@mail.com">
        </div>
        <div class="flex flex-col items-start w-72 my-2">
          <label for="password">Password:</label>
          <input type="password" name="password" id="c1" class="w-72 p-1 text-myPalette-300" placeholder="••••••••">
        </div>
        <div class="flex flex-col items-start w-72 mb-2">
          <label for="confirm-pwd">Confirm Password:</label>
          <input type="password" name="confirm-pwd" id="c2" class="w-72 p-1 text-myPalette-300" placeholder="••••••••">
        </div>
        <input @click="registraTrabajador" type="button" value="Sign in" class=" hover:text-myPalette-100 bg-myPalette-200 hover:bg-myPalette-400 w-72 cursor-pointer text-xl font-semibold py-2">
      </div>
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
        <button id="cancel-password-btn" @click="cancelarContra" class="text-lg font-semibold text-myPalette-100 hover:text-white border-2 py-1 w-28 border-myPalette-100 hover:bg-myPalette-100">Cancel</button>
        <button id="confirm-password-btn" @click="confirmarContra" class="text-lg font-semibold text-white hover:text-myPalette-100 py-1 w-28 border-2 border-myPalette-100 bg-myPalette-100 hover:bg-transparent mr-1">Confirm</button>
      </div>
    </div>  
  </div>


  <!-- DELETE ACCOUNT . AFTER RUNNING THIS, PLEASE ASK AGAIN WITH A CONFIRM -->
  <div id="delete-acc" class="fixed overflow-hidden hidden top-0 right-0 bg-myPalette-300 bg-opacity-50 w-full h-full">
    <div class="relative w-4/5 border-l-4 border-myPalette-100 box-border p-4 md:max-w-md flex flex-col bg-white m-auto">
      <p class="border-b-2 text-2xl">Delete Account</p>
      <p class="my-2">Are you sure you want to delete this account and all the data it contains?</p>
      <div class="flex flex-row-reverse">
        <button id="cancel-delete-button" class="text-lg font-semibold text-myPalette-100 hover:text-white border-2 py-1 w-28 border-myPalette-100 hover:bg-myPalette-100">Cancel</button>
        <button id="confirm-delete-button" class="text-lg font-semibold text-white hover:text-myPalette-100 py-1 w-28 border-2 border-myPalette-100 bg-myPalette-100 hover:bg-transparent mr-1">Confirm</button>
      </div>
    </div>  
  </div>
  

  <!-- DELETE POST . AFTER RUNNING THIS, PLEASE ASK AGAIN WITH A CONFIRM -->
  <div id="deletePostConfirm" class="fixed overflow-hidden hidden top-0 right-0 bg-myPalette-300 bg-opacity-50 w-full h-full">
      <div class="relative w-4/5 border-l-4 border-myPalette-100 box-border p-4 md:max-w-md flex flex-col bg-white m-auto">
      <p class="border-b-2 text-2xl">Delete Post</p>
      <p class="my-2">Are you sure you want delete this post?</p>
      <div class="flex flex-row-reverse">
        <button id="cancel-delete-post" class="text-lg font-semibold text-myPalette-100 hover:text-white border-2 py-1 w-28 border-myPalette-100 hover:bg-myPalette-100">Cancel</button>
        <button id="confirm-delete-post" class="text-lg font-semibold text-white hover:text-myPalette-100 py-1 w-28 border-2 border-myPalette-100 bg-myPalette-100 hover:bg-transparent mr-1">Confirm</button>
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


  <!-- ALERT -->
  <div id="alert" class="fixed bg-white top-6 right-2 p-3 px-5 rounded-md hidden items-center border-l-8 border-myPalette-100 max-w-xs animate-show_slide">
    
    <div class="pr-3 border-r-2 border-gray-300 ">
      <p id="title-alert" class="font-bold text-lg">Alert</p>
      <p id="msg-alert" class="text-sm text-gray-600">Description about alert modal</p>
    </div>

    <div class="p-3 pr-0">
      <i id="hideAlert" class="fas fa-times text-2xl hover:text-myPalette-100 cursor-pointer"></i>
    </div>
    
  </div>

</div> `,methods:{
        ...Vuex.mapMutations(['Ahome','Aadmin']),
        ...Vuex.mapMutations(['logo']),
        ...Vuex.mapMutations(['menu']),
        ...Vuex.mapMutations(['submenu']),
        ...Vuex.mapMutations(['modalContra','eye1','eye2','cancelarContra','confirmarContra']),
        ...Vuex.mapMutations(['muestraUsuarios','eliminaUsuario','editarUsuario']),
        ...Vuex.mapMutations(['usuarioTrabajador','registraTrabajador']),
        ...Vuex.mapMutations(['salir']),
    },
    computed:{
        ...Vuex.mapState(['usuarios'])

  }
}

export {Admin}