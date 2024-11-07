import express from "express";
import conectaBaseDeDados from "./config/dbConfig.js";
import routes from "./routes/index.js";

const conexao = await conectaBaseDeDados();
conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
})
conexao.once("open",() => {
    console.log("Conexão com o banco realizada com sucesso...")
})
const app = express();
routes(app);


app.delete("/livros/:id", (req,res) => {
    const index  = buscaLivro(req.params.id);
    livros.splice(index,1);
    res.status(200).send("Livro removido com suceso.");
});

export default app;


// mongodb+srv://joeduardoj3:#joeduardo@cluster0.8w2kd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//mongodb+srv://joeduardoj3:<db_password>@cluster0.8w2kd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

