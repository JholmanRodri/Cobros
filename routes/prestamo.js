import {Router} from "express"
import {PrestamosGet, PrestamoPost,PrestamoActivar,PrestamoPut}from "../controllers/prestamo.js"
import { check } from "express-validator";
import HerlpersUsuario from "../helpers/usuarios.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/Validar-jwt.js";

const router=Router()
router.post("/agregar",[ 
    check('usuario').isMongoId(),
    check('deuda').not().isEmpty(),
    check('interes').not().isEmpty(),
    check('tiempo').not().isEmpty(),
    validarCampos
],PrestamoPost)

router.get("/listar",[

],PrestamosGet)

router.put("/",[

],)
router.put("/desactivar",[
    check("id").isMongoId(),
],PrestamoActivar)
export default router;
