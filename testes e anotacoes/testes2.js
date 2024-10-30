//Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.
function saudacao(nome){
    return `olá! seja bem vindo(a) ${nome}`;
}
console.log(saudacao('José Eduardo'));

//Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
function verificaIdade(idade){
    return idade >= 18 ? 'maior de idade': 'menor de idade';
}
console.log(verificaIdade(17));

//Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

function verificaPalindromo(string) {
    const stringInvertida = string.split('').reverse().join('');
    return string.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(verificaPalindromo("arara")); // true
console.log(verificaPalindromo("Frase")); // false

//Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.
function maior(a, b, c){ // minha solucao
    if(a>b && a > c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else{
        return c;
    }
}
console.log(maior(1,20,5));

function encontraMaiorValor(num1, num2, num3) { //solucao instrutor
    let maior = num1; // Assumindo inicialmente que num1 é o maior
  
    if (num2 > maior) {
        maior = num2;
    }
  
    if (num3 > maior) {
        maior = num3;
    }
  
    return maior;
  }
  
  console.log(encontraMaiorValor(12, 56, 32)); // 56

//Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
const potencia = (base , exp) => base ** exp;

console.log(potencia(5,2));


