

const mensagem = "a";

let codAscii = mensagem.charCodeAt(0);

console.log(codAscii); // 65

const mensagem1 = "ALURA";

for (let i = 0; i < mensagem1.length; i++) {
 console.log(mensagem1.charCodeAt(i));
}

const mensagemDecimal = String.fromCharCode(65, 76, 85, 82, 65);
console.log(mensagemDecimal);

const mensagemHexa = String.fromCharCode(0x41, 0x4C, 0x55, 0x52, 0x41);
console.log(mensagemHexa);

