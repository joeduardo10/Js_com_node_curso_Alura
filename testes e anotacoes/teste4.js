const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }
   
delete objPersonagem.aliado
delete objPersonagem["status"]
 
console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined
console.log(objPersonagem);

const objPessoa = {
    
};
objPessoa.nome = "Sandra Regina";
objPessoa.sexo = "feminino";
objPessoa.dataTermino = "01/07/1987";
delete objPessoa.dataTermino;
console.log(objPessoa);

let i = 5;
let valorA = i++;
let valorB = ++i;

console.log("O valor de valorA é:", valorA);
console.log("O valor de valorB é:", valorB);


