import { STATES } from "mongoose";
import { autor } from "../models/Autor.js";

class AutorController {
    static async listarAutor(req, res) {
        try{
            const listaAutor = await autor.find({});
            res.status(200).json(listaAutor);

        }catch(erro){
            res.status(500).json({message: `${erro.message} - Falha na Requisição`})
        }
    };

    static async listarAutorPorId(req, res) {
        try{
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);

        }catch(erro){
            res.status(500).json({message: `${erro.message} - Falha na Requisição do Autor`})
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message:"Criado com suceso", autor: novoAutor});
        }catch (erro) {
            req.status(500).json({message: `${erro.message} - falha ao cadastrar autor`});
        }
    }
    static async atualizarAutor(req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "autor Atualizado"})

        }catch(erro){
            res.status(500).json({message: `${erro.message} - Falha na Atualização do autor`})
        }
    }
    static async excluirAutor(req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "autor Excluido com sucesso..."})

        }catch(erro){
            res.status(500).json({message: `${erro.message} - Falha na Exclusão do Autor`})
        }
    }
};


export default AutorController;