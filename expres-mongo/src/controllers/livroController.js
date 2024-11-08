import { STATES } from "mongoose";
import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {
    static async listarLivros(req, res) {
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);

        }catch(erro){
            res.status(500).json({message: `${erro.message} - Falha na Requisição`})
        }
    };

    static async listarLivroPorId(req, res) {
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);

        }catch(erro){
            res.status(500).json({message: `${erro.message} - Falha na Requisição do Livro`})
        }
    }

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor)
            const livroCompleto = {...novoLivro, autor:{...autorEncontrado._doc}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message:"Criado com suceso", livro: livroCriado});
        }catch (erro) {
            req.status(500).json({message: `${erro.message} - falha ao cadastrar livro`});
        }
    }
    static async atualizarLivro(req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "livro Atualizado"})

        }catch(erro){
            res.status(500).json({message: `${erro.message} - Falha na Atualização do Livro`})
        }
    }
    static async excluirLivro(req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "livro Excluido com sucesso..."})

        }catch(erro){
            res.status(500).json({message: `${erro.message} - Falha na Exclusão do Livro`})
        }
    }
    static async listarLivrosPorEditora (req, res) {
        const editora = req.query.editora;
        try{
            const livroPorEditora = await livro.find({editora: editora});
            res.status(200).json(livroPorEditora);
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - falha na busca` });
        }
        
    }

};


export default LivroController;