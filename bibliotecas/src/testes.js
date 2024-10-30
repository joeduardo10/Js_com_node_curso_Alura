// const { argv } = require('node:process');

// // print process.argv
// argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });
// import { readFile } from 'node:fs';

// readFile('/etc/passwd', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const paragrafos = [
  'https://developer.mozilla.org/pt-br/docs/learn/getting_started_with_the_web/how_the_web_works',
  '',
  'como a web funciona',
  '',
  'como a web funciona oferece uma visão simplificada do que acontece quando você vê uma página em um navegador, no seu computador ou telefone.',
  '',
  'essa teoria não é essencial para escrever códigos em curto prazo, mas em pouco tempo você vai se beneficiar ao entender o que está acontecendo em segundo plano.',
  'clientes e servidores',
  '',
  'computadores conectados à web são chamados clientes e servidores. um diagrama simplificado de como eles interagem pode ter essa aparência:',
  '',
  'clientes são os típicos dispositivos conectados à internet dos usuários da web (por exemplo, seu computador conectado ao seu wi-fi ou seu telefone conectado à sua rede móvel) e programas de acesso à web disponíveis nesses dispositivos (geralmente um navegador como firefox ou chrome).',
  '',
  'servidores são computadores que armazenam páginas, sites ou aplicativos. quando o dispositivo de um cliente quer acessar uma página, uma cópia dela é baixada do servidor para a máquina do cliente para ser apresentada no navegador web do usuário.',
  ''
];

const result = paragrafos.reduce((acum, paragrafo) => {
 if (paragrafo) {
   return [...acum, paragrafo];
 }
 return acum;
}, []);

console.log(result);


let arr1 = ["it's Sunny in", "", "California"];

const resultado = arr1.map((x) => x.split(" "));
console.log(resultado) //[ [ "it's", 'Sunny', 'in' ], [ '' ], [ 'California' ] ]

 const resultado2 = arr1.flatMap((x) => x.split(" "));
 console.log(resultado2) // ["it's","Sunny","in", "", "California"]

