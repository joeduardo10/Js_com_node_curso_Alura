let num1 = 10;
let num2 = num1;

num2 += 5;
num1+= 1;


console.log(`Num1 é ${num1}. Num2 é ${num2}`);
//////////////////////////////////////////////////
let numeroOriginal = 10;

function alteraNumero(numero){
    numero = 50;
    console.log(`numero do parametro é ${numero}. numero original`)
}
alteraNumero(numeroOriginal);
///////////////////////////////////////////////////////////////////
const notas = [7,7,8,9];
const novasNotas = [...notas]; //aqui a clonagen
novasNotas.push(10);

console.log(`Às novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);


