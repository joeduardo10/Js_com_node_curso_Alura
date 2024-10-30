const AnoAtual = new Date().getFullYear();
objLivro = {
    nome : 'Estudo Dirigido - Algoritmos',
    autor: 'José Augusto N.G. Manzano',
    anoDePublicação : 2004,
    genero : 'Livro técnico'
   
};

objLivro.idadepublicacao = AnoAtual - objLivro.anoDePublicação;


console.log(`nome do livro:   ${objLivro['nome']}`);
objLivro.avaliacao = null;
objLivro.avaliacao = 'Excelente'
objLivro.genero = 'aventura'
delete objLivro.avaliacao
console.log(objLivro);
