import mongoose from "mongoose";
const PrestamoSchema = new mongoose.Schema({
    usuario:{type:mongoose.Schema.ObjectId,ref:"Usuario",required:true},
    //hacer populate get all
    deuda:{type:String},
    interes:{type:String},
    tiempo:{type:String},
    
    estado:{type:String,default:1},
    createData:{type:Date,default:Date.now()},
});

export default mongoose.model("Prestamo", PrestamoSchema);
