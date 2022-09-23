import mongoose from "mongoose";
const PrestamoSchema = new mongoose.Schema({
    usuario:{type:mongoose.Schema.ObjectId,ref:"Usuario",required:true},
    //hacer populate get all
    fechacreacion:{type:Date},
    tiempo:{type:Number,required:true},

    deuda: {type:Number,required:true},
    interes:{type:Number,required:true},
    cuotaMensual:{type:Number},

    estado:{type:String},
    createData:{type:Date,default:Date.now()},
});

export default mongoose.model("Prestamo", PrestamoSchema);
