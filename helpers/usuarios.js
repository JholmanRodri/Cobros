import Usuario from "../models/usuarios.js";

const HerlpersUsuario = {
  existeCedula: async (cedula) => {
    if (cedula) {
      const existe = await Usuario.findOne({ cedula });
      if (existe) throw new Error("Numero de cedula ya existe en la base de datos");
    }
  },

  existeUsuarioById: async (id) => {
    const existe = await Usuario.findById(id)
    if (!existe) {
      throw new Error(`El id no existe ${id}`)
    }
  },
  noexisteCedula:async(Cedula)=>{
    if(Cedula){
        const existe=await Usuario.findOne({Cedula})
        if(!existe) throw new Error("Cedula no existe en la base de datos")
    }
  }
}

export default HerlpersUsuario;
