//1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator
//Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).
const array1 = [100, 200, 300, 400];
const array2 = [101, 201, 301, 401];
const array3 = [102, 202, 302, 402];
let lista = [];

function juntArray(par1,par2,par3){
lista = [...par1,...par2,...par3];
}
juntArray(array1,array2,array3);

console.log(lista);
/////////////EXEMPLO DO INSTRUTOR//////////////
function concatArrays(...arrays) {
    return [].concat(...arrays); // operador spread para concatenar os arrays
}

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const arraysConcatenados = concatArrays(arr1, arr2, arr3);
console.log(arraysConcatenados); // Saída: [1, 2, 3, 4, 5, 6]
//=.=.=.=.=.=.=.=.==>==>==.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.===>>>>>>>>>>>>>>>
//Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
const valores0 = [5,5,5,5,5,5,5,5,5,5,5,5];
const soma = valores0.reduce((acumulador,valor) => acumulador + valor,0);
console.log('Soma dos valore: ', soma);
/////////////SOLUÇAO DO INSTRUTOR////////////////////
const valores = [10, 20, 30, 40, 50];
const somaS = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log("Soma dos valores:", somaS);
//////////////////////////////////////////////////////////////////////////
/*3 - Considere duas listas de cores:
Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.*/
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']
let cores = [...coresLista1,...coresLista2];
const listaCores = [...new Set(cores)]; //remove direto em um arra
console.log(cores);
console.log(listaCores);
///////////////////resolução do instrutor /////////////////////////////////
const coresUnicas = [...new Set([...coresLista1, ...coresLista2])];
console.log('Cores sem repetir: ', coresUnicas);
////////////////////////////////////////////////////////////////////////
//4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
arrayDeNumeros = [1,3,5,7,13,4,5,9,6,2];


const pares = arrayDeNumeros.filter((valor) => valor % 2 === 0);
console.log(pares);
////////////////SOLUÇÃO DO INSTRUTOR /////////////////////////////////////////
function filtraNumerosPares(arr) {
    return arr.filter(num => num % 2 === 0); // Filtra apenas os números pares
}

const numArray = [1, 2, 3, 4, 5, 6,12, 24,9];
const listaNumerosPares = filtraNumerosPares(numArray);
console.log(listaNumerosPares); // Saída: [2, 4, 6]
///////////////////////////////////////////////////////////////////////////////
//Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
function filtraNumeros(arr) {
    return arr.filter(num => num % 3 === 0 && num > 5); // Filtra apenas os números multiplos de 3 e maiores que 5
}
const array53 = filtraNumeros(numArray);
console.log(array53);
//6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.
const somatudo = lista.reduce((acumulador,valor)=> acumulador + valor,0)
console.log(somatudo);
//////////////////////rewspos







