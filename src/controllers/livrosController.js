import livro from "../models/livros.js";
import { autor } from "../models/Autor.js";

class LivroController{

    static async listarLivros(req, res){
        try {
            const listLivros = await livro.find({});
            res.status(200).json(listLivros);
        } catch (error) {
          res.status(500).
          json({message: `${error.message} - falha na requisição` });  
        } 
    };

    static async listarLivroId(req, res){
        try {
            const listLivroEncontrado = await livro.findById(req.params.id);
            res.status(200).json(listLivroEncontrado);
        } catch (error) {
          res.status(500).
          json({message: `${error.message} - falha na requisição do Livro`});  
        } 
    };

    static async cadastrarLivro(req, res){
        const novoLivro = req.body;
        try {
            const autorEntrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor: { ...autorEntrado._doc }};
            const livroCriadoDB = await livro.create(livroCompleto);
            res.status(201).
            json({message: "Livro cadastrado com sucesso!", livro: livroCriadoDB });
        } catch (error) {
            res.status(500)
            .json({ message: `${error.message} - falha na requisição` });
        }
    }

    static async atualizarLivro(req, res){
        try {
            await livro.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({message: "Livro atualizado"});
        } catch (error) {
          res.status(500).
          json({ 
                message: `${error.message} - falha na requisição do Livro` 
            });  
        } 
    };

    static async deletarLivro(req, res){
        try {
            await livro.findByIdAndDelete(req.params.id);
            res.status(200).json({message: "Livro deletado"});
        } catch (error) {
          res.status(500).
          json({ 
                message: `${error.message} - falha na requisição do Livro` 
            });  
        } 
    };


    static async listarLivrosPorEditor(req, res){
        const  editora = req.query.ediotora;
        try{
            const listarLivrosPorEditor = await livro.find({ editora: editora});
            res.status(200).json(listarLivrosPorEditor);
        }catch(error){
            res.status(500).json({message: `${error.message} - falha na requisição do Livro`});
        }
    }

};

export default LivroController;