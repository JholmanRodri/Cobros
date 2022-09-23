import {Router} from "express"
import {usuarioPost,usuarioLogin,ListarTodosUsuarios,usuarioPut,usuarioGetNombre,BuscarUsuarioPorCC} from "../controllers/usuarios.js"
import { check } from "express-validator";
import HerlpersUsuario from "../helpers/usuarios.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/Validar-jwt.js";

const router=Router()
router.post("/agregar",[
    check('nombre',"El nombre es obligatoro").not().isEmpty(),
    check('apellidos',"Los apellidos son obligatoros").not().isEmpty(),
    check('cedula',"El numero de cedula es obligatoro").not().isEmpty(),
    check('telefono',"El telefono es obligatoro").not().isEmpty(),
    check('direccion',"La direccion es obligatoria").not().isEmpty(),
    check('cedula').custom(HerlpersUsuario.existeCedula),
    validarCampos,
],usuarioPost);

router.post("/login",[
    check('email').custom(HerlpersUsuario.noexisteEmail),
    check('email',"No es un email valido").isEmail(),
    validarCampos
],usuarioLogin)

router.get("/listar",ListarTodosUsuarios)

router.put("/datos/:id",[
    validarJWT,
    check('id').isMongoId(),
    check('id').custom(HerlpersUsuario.existeUsuarioById),
    check('nombre',"El nombre es obligatoro").not().isEmpty(),
    check('nombre',"Debe tener menos de 25 caracteres").isLength({max:25}),
    check('password',"Es Obligatorio").not().isEmpty(),
    check('password',"Debe tener más de 6 caracteres").isLength({min:6}),
    check('email',"Es Obligatorio").not().isEmpty(),
    check('email',"No es un email valido").isEmail(),
    check('email').custom(HerlpersUsuario.existeEmail),
    validarCampos
],usuarioPut)
// router.get("/",usuarioGetListarTodos)

// router.get("/listar/:id",[
//     check('id').isMongoId(),
//     validarCampos
// ],usuarioGetListarid)

router.get("/nombre",[
    check('nombre').not().isEmpty(),
    validarCampos
],usuarioGetNombre)

// router.put("/foto/:id",[
//     validarJWT,
//     check('id', 'No es un ID válido').isMongoId(),
//     check('id').custom(HerlpersUsuario.existeUsuarioById),
//     validarExistaArchivo,
//     validarCampos
// ],usuarioPutFoto)


// router.put("/activar/:id",[
//     validarJWT,
//     check('id').isMongoId(),
//     validarCampos
// ],usuarioPutActivar)

// router.put("/desactivar/:id",[
//     validarJWT,
//     check('id').isMongoId(),
//     validarCampos
// ],usuarioPutDesactivar)

router.delete("/eliminar/:id",[
    validarJWT,
    check('id').isMongoId(),
    validarCampos,
],)

export default router;

