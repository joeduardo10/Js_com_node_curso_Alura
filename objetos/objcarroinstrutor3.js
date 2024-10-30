// Definindo o objeto carro com as propriedades iniciais
const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    cor: 'Prata',
    ligado: true, // Propriedade para indicar se o carro está ligado ou desligado
  
    // Método para ligar o carro
    ligar: function () {
      if (!this.ligado) {
        this.ligado = true;
        console.log('O carro está ligado.');
      } else {
        console.log('O carro já está ligado.');
      }
    },
  
    // Método para desligar o carro
    desligar: function () {
      if (this.ligado) {
        this.ligado = false;
        console.log('O carro está desligado.');
      } else {
        console.log('O carro já está desligado.');
      }
    },
  
    // Método para obter detalhes do carro
    obterDetalhes: function () {
      const estado = this.ligado ? 'ligado' : 'desligado';
      return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
    }
  };
  
  // Testando os métodos
  carro.ligar(); // Tentar ligar o carro quando já está ligado
  carro.desligar(); // Desligar o carro
  carro.desligar(); // Tentar desligar o carro quando já está desligado
  carro.ligar(); // Ligar o carro
  console.log(carro.obterDetalhes()); // Obter detalhes do carro e imprimir no console
  

// spreadObjeto.js
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata",
    ligado: false // Nova propriedade indicando o estado do carro (ligado/desligado)
};

const carroNovo = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2023,
    cor: "Azul"
};

// Utilize o operador spread para criar um novo objeto com as propriedades de carro e carroNovo
const carroComNovosDetalhes = { ...carro, ...carroNovo };

// Imprima no console o objeto carroComNovosDetalhes
console.log("Carro com Novos Detalhes:");
console.log(carroComNovosDetalhes);

// Modifique o valor de uma propriedade no objeto carroComNovosDetalhes
carroComNovosDetalhes.modelo = "Accord";

// Imprima novamente no console o objeto carroComNovosDetalhes
console.log("\nCarro com Detalhes Modificados:");
console.log(carroComNovosDetalhes);
