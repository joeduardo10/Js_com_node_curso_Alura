// declaração da função
function somarDoisNumeros(numA, numB) {
    return numA + numB;
   }
   
   // execução (ou chamada) da função
   somarDoisNumeros(2, 2);
   
   // atribuindo o retorno de uma função a uma variável
   const resultado = somarDoisNumeros(2, 2);
   console.log(resultado);

   function dividir(dividendo, divisor) {
    return dividendo / divisor;
   }
   
   const resultado1 = dividir(10, 2);
   console.log(`o resultado é ${resultado1}`); // o resultado é 5

   // Se inverte o ordem de passagem dos parametros o resultado tbm é alterado

   const resultado2 = dividir(2, 10);
    console.log(`o resultado é ${resultado2}`); // o resultado é 0.2 

    /*Sempre observe quais são os parâmetros que a função espera receber e se estão sendo passados com o tipo de dado correto e na ordem correta!*/

    
function dividir(dividendo, divisor) {
 if (divisor !== 0) {
   return dividendo / divisor;
 } else {
   return 'favor não dividir por zero';
 }
}

const resultado3 = dividir(10, 5);
console.log(resultado3); // 2
const resultadoZero = dividir(10, 0);
console.log(resultadoZero); // 'favor não dividir por zero'

