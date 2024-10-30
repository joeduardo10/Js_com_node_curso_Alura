/*3 - Crie um array de objetos JavaScript representando informações fictícias de produtos. Cada objeto deve conter pelo menos as seguintes propriedades:*/
const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]
/*function filtrarPorPreco(preco){
    return listaProdutos.filter(valor => valor.preco <= preco)
}*/
function filtrarPorPreco(preco){
    const produtosFiltrados = listaProdutos.filter(produto =>produto.preco <= preco)
    return produtosFiltrados.sort((a, b) => a.preco - b.preco);
}


const ordenarPorPreco=filtrarPorPreco(50)
console.log(ordenarPorPreco)



