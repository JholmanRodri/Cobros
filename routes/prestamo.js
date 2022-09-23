import {Router} from "express"
import {usuario,fechacreacion,tiempo,deuda,interes,cuotaMensual}from "../controllers/prestamo.js"
import { check } from "express-validator";
import HerlpersUsuario from "../helpers/usuarios.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/Validar-jwt.js";

const router=Router()
router.post("/agregar",[
    
])