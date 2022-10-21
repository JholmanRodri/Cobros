import Prestamo from "../models/prestamo.js"

const PrestamoPost=async(req,res)=>{
    const{usuario,deuda,interes,tiempo}=req.body
    const prestamo=new Prestamo({usuario,deuda,interes,tiempo})
    await prestamo.save()
    res.json({
        prestamo
    })
}
const PrestamoPut=async(req,res)=>{
    const{id}=req.params
    const{usuario,deuda,interes,tiempo}=req.body
    const prestamo=await Prestamo.findByIdAndUpdate(id,{usuario,deuda,interes,tiempo})
    res.json({
        prestamo
    })
}

const PrestamoGetBuscarid=async(req,res)=>{
    const {id}=req.params
    const prestamo=await Prestamo.findById(id)
    res.json({
        prestamo
    })
}   

const PrestamosGet=async(req,res)=>{
    const prestamos =await Prestamo.find()
    .populate("usuario",["nombre","apellidos","cedula","telefono","direccion","estado"])
    res.json({
        prestamos
    })
}
const PrestamoGetBuscar=async(req,res)=>{
    const {nombre}=req.query
    const prestamo=await Prestamo.find({nombre})
    res.json({
        prestamo
    })
}
const PrestamoDesactivar=async(req,res)=>{
    const {id}=req.params
    const desactivar =await Prestamo.findByIdAndUpdate(id,{estado:0})
    res.json({
        "msg":"Usuario desactivado con exito"
    })
}
const PrestamoActivar=async(req,res)=>{
    const {id}=req.params
    const desactivar =await Prestamo.findByIdAndUpdate(id,{estado:1})
    res.json({
        "msg":"Usuario activado con exito"
    })
}

export {PrestamoPut,PrestamoPost,PrestamosGet,PrestamoGetBuscarid,PrestamoGetBuscar,PrestamoDesactivar,PrestamoActivar}
