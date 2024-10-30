  // enumeraveisObjeto.js
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata",
    ligado: false, // Nova propriedade indicando o estado do carro (ligado/desligado)
    placa: "ABC1234" // Nova propriedade representando a placa do veículo
};

// Defina a propriedade placa como não enumerável
Object.defineProperty(carro, "placa", { enumerable: false });

// Utilize um loop for...in para percorrer as propriedades enumeráveis do objeto carro
console.log("Propriedades Enumeráveis do Carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

// Utilize Object.keys() para obter um array com as chaves enumeráveis do objeto carro
const chavesEnumeraveis = Object.keys(carro);
console.log("\nChaves Enumeráveis do Carro:");
console.log(chavesEnumeraveis);

// Tente acessar a propriedade placa diretamente e imprima o resultado obtido
console.log("\nAcesso direto à propriedade placa:");
console.log(carro.placa);