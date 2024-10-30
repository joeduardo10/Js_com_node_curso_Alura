/*Crie uma função chamada filtrarFilmesPorAno que receba um ano como parâmetro e retorne um novo array contendo apenas os filmes lançados nesse ano.*/
const catalogoFilmes = [{
    id: 1,
    titulo: "Dirth dancing",
    diretor: "Albert Neuman",
    anoLancamento: 1987
}, {
    id: 2,
    titulo: "Tubarão",
    diretor: "Steven Spielberg",
    anoLancamento: 1975
},
{
    id: 3,
    titulo: "Missão Imposivel ",
    diretor: "",
    anoLancamento: 1987
},
{
    id: 4,
    titulo: "Matrix",
    diretor: "Lana Wachowski",
    anoLancamento: 1999
},
{
    id: 5,
    titulo: "Jurassic Park",
    diretor: "Steven Spielberg",
    anoLancamento: 1993
},

{
    id: 6,
    titulo: "Inception",
    diretor: "Christopher Nolan",
    anoLancamento: 2010
}
]

function filtrarFilmesPorAno(ano) {
    return catalogoFilmes.filter(filme => filme.anoLancamento === ano);
}
const filmePorAno = filtrarFilmesPorAno(1975)
console.log(filmePorAno)

/*const teste = catalogoFilmes.filter(filme =>filme.anoLancamento === 1987)
console.log(teste)*/











