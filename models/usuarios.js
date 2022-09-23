import mongoose from "mongoose";
const UsuarioSchema= new mongoose.Schema({
    nombre:{type:String,required:true},
    apellidos:{type:String,required:true},
    cedula:{type:String,required:true,unique:true},
    telefono:{type:String,required:true},
    direccion:{type:String,required:true},
    imagen:{type:String},
    email:{type:String},
    password:{type:String},
    
    estado:{type:Number,default:1},
    rol:{type:String,default:"Usuario"},
    createData:{type:Date,default:Date.now()},
})

export default mongoose.model("Usuario",UsuarioSchema)