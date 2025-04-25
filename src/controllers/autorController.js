import { autor } from "../models/Autor.js";

class autorController{

    static async listarAutores(req, res){
        try {
            const listAutores = await autor.find({});
            res.status(200).json(listAutores);
        } catch (error) {
          res.status(500).
          json({message: `${erro.message} - falha na requisição` });  
        } 
    };

    static async listarAutoresId(req, res){
        try {
            const listAutorEncontrado = await livro.findById(req.params.id);
            res.status(200).json(listAutorEncontrado);
        } catch (error) {
          res.status(500).
          json({message: `${erro.message} - falha na requisição do Autor`});  
        } 
    };

    static async cadastrarAutores(req, res){
        try {
            const novoAutores= await autor.create(req.body);
            res.status(201).
            json({message: "Autor cadastrado com sucesso!", autor: novoAutores });
        } catch (error) {
            res.status(500)
            .json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async atualizarAutores(req, res){
        try {
            await autor.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({message: "Autor atualizado"});
        } catch (error) {
          res.status(500).
          json({ 
                message: `${erro.message} - falha na requisição do Autor` 
            });  
        } 
    };

    static async deletarAutores(req, res){
        try {
            await autor.findByIdAndDelete(req.params.id);
            res.status(200).json({message: "Autor deletado"});
        } catch (error) {
          res.status(500).
          json({ 
                message: `${erro.message} - falha na requisição do Autor` 
            });  
        } 
    };

};

export default autorController;