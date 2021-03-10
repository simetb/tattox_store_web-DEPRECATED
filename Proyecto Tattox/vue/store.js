 //------------------------------------------------------------------------------------------------------
 //VUEX STORE
import {Alogin,Ahome,Aregistro} from './metodos/redireccion.js'
import {registro_conexion} from './metodos/registro.js'
import {verifyLogin} from './metodos/login.js'
//CODIGO JQUERY
import {logo} from './js-jquery/color_logo.js'
import {menu} from './js-jquery/menu.js'


const store = new Vuex.Store({
            state:{
                


              },
            mutations:{
            	
            	registro_conexion,
            	verifyLogin,
            	Alogin,
            	Ahome,
            	Aregistro,
                logo,
                menu,

            	
              
                
            },
            actions:{
                              
            }

        });

export{store}