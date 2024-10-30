const horas = new Date();
console.log( horas );

const horas1 = new Date();
console.log( horas1.getHours() );

const pessoa = {
    nome: "Maria",
    idade: 30,
    apresentar: function() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
  };
  
  pessoa.apresentar(); // Saída: Olá, meu nome é Maria e eu tenho 30 anos.
  
  const cliente = {
    nome: "Jose",
    idade: 33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
  };
  
  cliente.animalEstimacao = [{
    nome: "Kripto",
    raca: "Cão",
    vacinado: true
  }];
  
  cliente.animalEstimacao.push({
    nome: "Lex",
    raca: "Gato",
    vacinado: false
  })
console.log(cliente)  