import express from "express";
import AutorController from "../controllers/autorController.js";
 
const routes = express.Router();

routes.get("/autores", AutorController.listarAutores);
routes.get("/autores/:id", AutorController.listarAutoresId);
routes.post("/autores", AutorController.cadastrarAutores);
routes.put("/autores/:id", AutorController.atualizarAutores);
routes.delete("/autores/:id", AutorController.deletarAutores);

export default routes;