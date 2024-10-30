const carro = {
    marca : 'Nissan',
    modelo : 'Versa SV 1.6 CVT',
    anoFabricação: 2017,
    cor : 'cinza'
};
carro.portas = "4";
carro.cambio = 'automatico';
for(let chave in carro){
    const tipo = typeof carro[chave];
    if(tipo !== 'object' && tipo !== 'function'){
        const texto = `a chave ${chave} tem o valor ${carro[chave]}`;
        console.log(texto);
    }
 }
 for(let key in carro){
    console.log(carro[key]);
 }
 console.log(Object.keys(carro));
 console.log(Object.values(carro));
 console.log(Object.entries(carro));
 
 // Utilize novamente o loop for...in para percorrer as propriedades atualizadas do objeto carro
console.log("\nPropriedades atualizadas do carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

