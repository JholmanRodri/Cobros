import express from "express";
import cors from "cors";
import {bdconectar} from "../database/config.js";
// import peliculas from "../routes/peliculas.js";
import usuarios from "../routes/usuarios.js";
import prestamo from "../routes/prestamo.js";
// import favoritos from "../routes/favoritos.js";
// import actores from "../routes/actores.js";
// import comentarios from "../routes/comentarios.js";
import fileUpload from "express-fileupload";

class Servidor {
  constructor() {
    this.app = express();
    this.middlewares();
    this.port = process.env.PORT;
    this.conectarbd();
    this.routes();
  }
  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    
    this.app.use(fileUpload({
      useTempFiles:true,
      tempFileDir:'/tmp/',
      createParentPath:true
    }))
  }
  async conectarbd() {
    await bdconectar();
  }
  routes(){
      this.app.use("/cobros/usuarios",usuarios);
      this.app.use("/cobros/prestamo",prestamo);
  }
  escuchar(){
      this.app.listen(this.port,() =>{
          console.log(`Servidor escuchando por el puerto ${this.port}`);
      })
  }
}

export default Servidor;

