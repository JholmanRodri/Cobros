
import Usuario from "../models/usuarios.js"
import {generarJWT} from "../middlewares/Validar-jwt.js"

const usuarioPost=async(req,res)=>{
    const{nombre,apellidos,cedula,telefono,direccion}= req.body
    const usuario= new Usuario({nombre,apellidos,cedula,telefono,direccion})
    await usuario.save()
    res.json({
        msg:`El usuario ${usuario.nombre} se a registrado con exito`
    })
}

const ListarTodosUsuarios=async(req, res)=>{
    const usuarios=await Usuario.find()
    res.json({usuarios})
}

const usuarioGetNombre=async(req,res)=> {
    const {nombre}=req.query
    const usuario =await Usuario.find(
        {
            $or:[
                {nombre:new RegExp(nombre, "i")},
            ]
        }
    )
    //.populate("De donde viene",["que" ,"quiere", "traer" ])
    res.json({usuario})
}

const usuarioPut=async(req,res)=>{
    const{id}=req.params
    const {nombre,apellidos,cedula,telefono,direccion,imagen}=req.body
    const usuario=await Usuario.findByIdAndUpdate(id,{nombre,apellidos,cedula,telefono,direccion,imagen,email,password,rol,estado})
    await usuario.save()
    res.json({
        msg:`Actualizacion exitosa ${usuario}`
    })
}   

const usuarioLogin= async (req, res) => {
    const { email } = req.body;
    try {
        const usuario = await Usuario.findOne({ email })
        if (!usuario) {
            return res.status(400).json({
                msg: "Usuario / Password no son correctos"
            })
        }

        if (usuario.estado === 0) {
            return res.status(400).json({
                msg: "Usuario Inactivo"
            })
        }
        const token = await generarJWT(usuario.id);
        res.json({
            usuario,
            token
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Hable con el WebMaster"
        })
    }
}

const BuscarUsuarioPorCC=async(req,res)=>{
    const {cedula}=req.query
    const usuario = await Usuario.find(
        //{nombre:new RegExp(query,"i")}
        {
            $or: [
                //Viene del modelo // viene de query
                { cedula: new RegExp(cedula, "i") },
            ]
        }
    ) 
    res.json({usuario})
}

// usuarioGetListarid, usuarioGetListarNombreOEmail, usuarioGetListarTodos, usuarioLogin,
// usuarioPost, usuarioPutActivar, usuarioPutdatos, usuarioPutDesactivar, usuarioPutFoto
export {usuarioPost,ListarTodosUsuarios,usuarioGetNombre,usuarioPut,usuarioLogin,BuscarUsuarioPorCC}