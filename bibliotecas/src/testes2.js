import fs from 'fs'

const caminhos = [
    "./arquivos/texto-kanban.txt",
    "./arquivos/texto-web.txt",
    "./arquivos/texto-aprendizado.txt",
   ];
   
   lerMultiplosArquivos(caminhos)
    .then((conteudoDosArquivos) => {
      console.log(conteudoDosArquivos);
      // Aqui podem ser processados os conteúdos de cada arquivo
    })
    .catch((erro) => {
      console.error('Erro ao ler arquivos', erro.message);
    });
   

// async function lerMultiplosArquivos(arrayDeCaminhos) {
//     try {
//     const arrayDePromessas = arrayDeCaminhos
//       .map((caminho) => fs.promises.readFile(caminho, "utf-8")
//     );
//       const listaDeDados = await Promise.all(arrayDePromessas);
//       return listaDeDados;
//     } catch (erro) {
//       throw erro;
//     }
//    }
   
//////////// ou refatorando ////////////////////////

   
   async function lerMultiplosArquivos(arrayDeCaminhos) {
    const arrayDePromessas = arrayDeCaminhos.map(
      async (caminho) => await fs.promises.readFile(caminho, "utf-8")
    );
    const conteudosDosArquivos = await Promise.all(arrayDePromessas);
    return conteudosDosArquivos;
   }
   
   lerMultiplosArquivos(caminhos);
   