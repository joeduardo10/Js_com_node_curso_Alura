const nomes = ['Ana','Clara','Maria','Maria', 'João','João','João'];

//const nomesAtualizados = new Set(nomes); //remove duplicatas mas não é um array
//const listaNomesAtualizados = [...nomesAtualizados] // transforma em um array
const listaNomesAtualizados1 = [...new Set(nomes)]; //remove direto em um array
//console.log(nomesAtualizados);
console.log(listaNomesAtualizados1);