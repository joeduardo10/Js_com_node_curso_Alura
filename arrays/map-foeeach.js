/*const listaProdutos = ['pôster A4', 'pôster A5','camiseta lisa','Camiseta estampada','pin de metal','cartela adesiva'];

const listaAtualizada = listaProdutos.forEach((produto) => {
    return `${produto} - Unidade`; 
});
console.log(listaAtualizada);*/
const listaProdutos = ['pôster A4', 'pôster A5','camiseta lisa','Camiseta estampada','pin de metal','cartela adesiva'];

const listaAtualizada = listaProdutos.map((produto) => {
    return `${produto} - Unidade`;
});
console.log(listaAtualizada);