const animais = require('./animals.json');

const stringAnimais = JSON.stringify(animais);
console.log(stringAnimais);
console.log(typeof stringAnimais);

const objAnimais = JSON.parse(stringAnimais);
console.log(objAnimais);
console.log(typeof objAnimais);

const novoAnimal = {
    "id": 4,
    "nome": "Onça Pintada",
    "tipo": "Felino",
    "habitat": "Pantanal"
}
objAnimais.animais.push(novoAnimal);
objAnimais.animais.habitat


// Modifica o habitat de um animal existente no array de animais
const animalParaModificar = objAnimais.animais.find(animal => animal.id === 2);
if (animalParaModificar) {
    animalParaModificar.habitat = "Oceano Antártico";
}
console.log(objAnimais);

 // Remove um animal do array de animais
const indiceAnimalRemover = objAnimais.animais.findIndex(animal => animal.id === 1);
if (indiceAnimalRemover !== -1) {
    objAnimais.animais.splice(indiceAnimalRemover, 1);
} 
console.log(objAnimais); 

// Converte o objeto modificado para uma string JSON
const novaStringJsonAnimais = JSON.stringify(objAnimais, null, 2);

console.log("Objeto JavaScript Resultante das Operações:");
console.log(objAnimais);
  

  
