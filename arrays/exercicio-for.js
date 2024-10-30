const fruits = ['apple', 'Orange', 'banana','kiwi','pineapple','lemon'];

for(let i of fruits){
    console.log(i)
}
////////////////////////////////////////
function retornaElemento(lista){
    for (i = 0; i < lista.length; i++){
        console.log(`indice ${i} Elemento ${lista[i]}`)
    }
}
retornaElemento(fruits);
//////////////////////////////////////////////////////////

const numeros = [100 ,200, 300, 400, 500, 600, 700, 800, 900, 1001];
let soma = 0;

function somaNr(lista){
    for(let i = 0; i < lista.length; i++){
        soma += lista[i];
  } 
    return soma
}
console.log(somaNr(numeros))
//////////////////////////////////
let somar = 0;
function somanumero(lista){
    for(let i of lista){
        somar += i
     }
     return somar;
}

console.log(somanumero(numeros))
///////////////////////////////////////////// não foi iso que foi pedido era pra usar o for caralho
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
  }
const max = getMaxOfArray(numeros);
const min =getMinOfArray(numeros);
console.log(`O menor valor é ${min} e o maior valor é ${max}`)
//Tipo isso:
//Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

const arrMenoresMaiores = [5, 37, 18, 59, 12, -5];

function imprimeMaiorEMenor(arr) {

  let maior = 0;
  let menor = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i]
    }
    if (arr[i] < menor) {
      menor = arr[i]
    }
  }
  return `o maior número é ${maior} e o menor número é ${menor}`;
}

console.log(imprimeMaiorEMenor(arrMenoresMaiores));
///exibir numeros pares
const numeros1 =[3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
for(let i of numeros1){
    if(i % 2 === 0){
        console.log(i)
    }
}
///////////////////////////////////////////
let somando = 0;
for(i = 0; i < numeros.length; i++){
    somando += numeros[i];
}
somando /= numeros.length;
console.log(somando);




  