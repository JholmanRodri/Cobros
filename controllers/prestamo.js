import Prestamo from "../models/prestamo.js"

const PrestamoPost=async(req,res)=>{
    const{usuario,fechacreacion,tiempo,deuda,interes,cuotaMensual}=req.body
    const prestamo=new Prestamo({usuario,fechacreacion,tiempo,deuda,interes,cuotaMensual})
    await prestamo.save()
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

const PrestamoGet=async(req,res)=>{
    const prestamo =await Prestamo.find()
    res.json({
        prestamo
    })
}

const PrestamoGetBuscar=async(req,res)=>{
    const {nombre}=req.query
    const prestamo=await Prestamo.find({nombre})
    res.json({
        prestamo
    })
}

export {PrestamoPost,PrestamoGet,PrestamoGetBuscarid,}
