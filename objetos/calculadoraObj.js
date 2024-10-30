
    media = [2,2,2,0];
    const calculadora = {
    soma: function(a,b) {
        return a + b;
      },
    subtracao : function(a,b){
        return  b - a;
    },
    multiplicacao : function(a,b){
        return a * b;
     },
     divisão : function(a,b){
        if(b !== 0){
            return a / b;
        } else{
            return console.log('divisão por 0 não permitida !');
        }
     },
     calcularMedia: function(numeros) {
        const soma = numeros.reduce((total, numero) => total + numero, 0);
        return soma / numeros.length;
    }
};
const contaBancaria = {
    titular : "José Eduardo",
    saldo : 6.50,
    depositar : function (valor){
        return this.saldo += valor;
    },
    sacar : function (valor){
        if (this.saldo < valor){
            console.log('Saldo Insuficiente')
        } else{
            return this.saldo -= valor;
        }       
    }
};
const cliente = {
    Nome : 'José Eduardo',
    conta : contaBancaria,
}
function mostrarSaldo(client){
    console.log(`Nome do cliente ${client.Nome}`)
    console.log(`Saldo em conta ${client.conta.saldo}`)
}
console.log(calculadora.soma(2,5));
console.log(calculadora.subtracao(5,2));
console.log(calculadora.multiplicacao(2,5));
console.log(calculadora.divisão(2,2));
console.log(calculadora.divisão(2,0));
const nrMedia = [2,2,2,0];
console.log("Média: " + calculadora.calcularMedia(nrMedia));
console.log(contaBancaria.depositar(11));
mostrarSaldo(cliente)




