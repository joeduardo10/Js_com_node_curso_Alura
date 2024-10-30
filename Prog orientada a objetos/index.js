import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"


const novoUser = new User("Juliana", "j@j.com.br", "2024-01-01")
console.log(novoUser.exibirInfos());

const novoAdmin1 = new Admin("José Eduardo Fernandes","joeduardofer@hotmail.com","1970-06-12")
console.log(novoAdmin1.exibirInfos());

// novoUser.#nome = "Márcia"
// console.log(novoUser.exibirInfos());
// novoUser.nome = "Julia"
// console.log(novoUser.nome);
// console.log(novoUser.montaObjUser());
// console.log(novoUser.#nome);
//const novoAdmin = new Admin("Eduardo", "edu.com", "2024-01-01")
//console.log(novoAdmin.exibirInfos());
//  console.log(novoAdmin.exibeNome());
const novaDocente = new Docente("Ana", "a@a.com", "2024-01-01")
console.log(novaDocente.exibirInfos());
const dadosFicticios = User.exibirInfosStatic("maria","maria@hotmaol.com")
console.log(dadosFicticios)
const novoUser2 = new User('Maria Gabriela', 'Mariagabi@gmail.com', '2025-01-01')
 console.log(novoUser2.exibirInfos('basic'));
 console.log(novoUser2.exibirInfos('complete'));

