// forInObjetos.js
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata"
};

// Utilize o loop for...in para percorrer as propriedades do objeto carro
console.log("Propriedades iniciais do carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

// Adicione mais propriedades ao objeto carro
carro.cambio = "Automático";
carro.kmRodados = 5000;

// Utilize novamente o loop for...in para percorrer as propriedades atualizadas do objeto carro
console.log("\nPropriedades atualizadas do carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}
