 //------------------------------------------------------------------------------------------------------
 //VUEX STORE
import {Alogin,Ahome,Aregistro} from './metodos/redireccion.js'
import {registro_conexion} from './metodos/registro.js'
import {verifyLogin} from './metodos/login.js'


const store = new Vuex.Store({
            state:{
                


              },
            mutations:{
            	
            	registro_conexion,
            	verifyLogin,
            	Alogin,
            	Ahome,
            	Aregistro
            	
              
                
            },
            actions:{
                              
            }

        });

export{store}