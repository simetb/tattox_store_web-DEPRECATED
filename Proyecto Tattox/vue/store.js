 //------------------------------------------------------------------------------------------------------
 //VUEX STORE
import {Alogin,Ahome,Aregistro,Aadmin,Aperfil} from './metodos/redireccion.js'
import {registro_conexion} from './metodos/registro.js'
import {verifyLogin} from './metodos/login.js'
import {Google} from './metodos/loginGoogle.js'
import {Facebook} from './metodos/loginFacebook.js'

//CODIGO JQUERY
import {logo} from './js-jquery/color_logo.js'
import {editDescripcion,editFoto,frameEditFoto} from './js-jquery/botonesEdit.js'
import {menu} from './js-jquery/menu.js'
import {submenu,submenup} from './js-jquery/submenu.js'
import {gray_color} from './js-jquery/imagenes.js'

//FUNCIONES DEL USUARIO
import {salir} from './metodos/modificaUsuario.js'
import {modalEliminar,confirmarEliminar,cancelarEliminar} from './metodos/modalEliminar.js'
import {modalDescripcion,cancelarDescripcion,confirmarDescripcion} from './metodos/modalDescripcion.js'
import {modalFoto,cancelarFoto,selecFoto,aceptarFoto} from './metodos/modalFoto.js'
import {modalPost,cancelarPost,selecPost,confirmarPost} from './metodos/modalPost.js'

//Administrador
import {modalContra,eye1,eye2,cancelarContra,confirmarContra} from './metodos/modalContra.js'
import {muestraUsuarios,eliminaUsuario,editarUsuario} from './js-jquery/muestraUsuarios.js'
import {usuarioTrabajador,registraTrabajador} from './js-jquery/nuevoTrabajador.js'


const store = new Vuex.Store({
            state:{
                usuarioActivo: 1,
                file:"",
                usuario:{
                    descripcion: "Sin descripcion registrada...",
                    nombre:"Sin nombre registrado...",
                    imgURL:"./img/user.png",
                    imagenes:[],
                    tipo:""
                },
                //Usuarios
                usuarios:[],
                //Trabajadores
                trabajadores:[],
                //Trabajador seleccionado
                trabajador:{
                    usuario:{},
                },
                fotosT: []

              },
            mutations:{
            	
            	registro_conexion,
            	verifyLogin,
            	Alogin,
            	Ahome,
            	Aregistro,
                logo,
                menu,
                Google,
                Facebook,
                submenu,
                modalContra,
                eye1,
                eye2,
                cancelarContra,
                confirmarContra,
                Aadmin,
                muestraUsuarios,
                eliminaUsuario,
                usuarioTrabajador,
                registraTrabajador,
                submenup,
                Aperfil,
                salir,
                modalEliminar,
                confirmarEliminar,
                cancelarEliminar,
                editDescripcion,
                modalDescripcion,
                cancelarDescripcion,
                confirmarDescripcion,
                editFoto,
                frameEditFoto,
                modalFoto,
                cancelarFoto,
                selecFoto,
                aceptarFoto,
                modalPost,
                cancelarPost,
                selecPost,
                confirmarPost,
                gray_color
                
            },
            actions:{
                              
            }

        });

export{store}