const animals = ['jacaré','macaco', 'leão', 'elefante'];
const reptils = ['pithon', 'sucuri', 'surucucu', 'jararaca'];

function concatenaArrays(array1, array2){
return array1.concat(array2);
}
zoo = concatenaArrays(animals, reptils);
console.log(zoo);

const numeros = [1,2,3,4,5,6,7,8,9,10];
const novoarray = numeros.slice(3, -2);
console.log(novoarray);

const fruits = ['maçã', 'banana', 'laranja', 'limão', 'abacaxi'];
fruits.splice(2,3,'pesego','kiwi');
console.log(fruits);

const menuPrincipal = ['file a Parmejiana', 'filé a cavalo', 'filé com fritas'];
const sobremesas = ['sorvete', 'pudim', 'gelatina'];
const menuCompleto = menuPrincipal.concat(sobremesas);
console.log(menuCompleto);


//Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

//Dicas:

 //   comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
//    você pode resolver usando um for dentro de outro for.

let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}

console.log('Matriz de duas dimensões:');
console.log(matriz);
matriz.forEach(row => console.log(row)); // visualização em linhas e colunas

//Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.
console.log(matriz[1][2]);
matriz[2][1] = 15;
console.log('Matriz após adição de elemento:', matriz);
