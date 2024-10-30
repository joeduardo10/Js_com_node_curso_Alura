//////////  DATAS /////////////////////
/*
let timestamp = Date.now();  // The current time as a timestamp (a number).
let now = new Date();        // The current time as a Date object.
let ms = now.getTime();      // Convert to a millisecond timestamp.
let iso = now.toISOString(); // Convert to a string in standard format.
console.log(timestamp )
console.log(now)
console.log(ms)
console.log(iso)
*/
/////////////  string /////////////////////
let s = "Hello, world"; // Start with some text.

// Obtaining portions of a string
s.substring(1,4)        // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4)            // => "ell": same thing
s.slice(-3)             // => "rld": last 3 characters
s.split(", ")           // => ["Hello", "world"]: split at delimiter string
console.log(s)
console.log(s.substring(1,4))
console.log(s.slice(-3))
console.log(s.split(", "))
// Searching a string
s.indexOf("l")          // => 2: position of first letter l
s.indexOf("l", 3)       // => 3: position of first "l" at or after 3
s.indexOf("zz")         // => -1: s does not include the substring "zz"
s.lastIndexOf("l")      // => 10: position of last letter l
console.log(s.indexOf("l"))
console.log(s.indexOf("l", 3) )
console.log(s.indexOf("zz"))
console.log(s.lastIndexOf("l") )
// Boolean searching functions in ES6 and later
s.startsWith("Hell")    // => true: the string starts with these
s.endsWith("!")         // => false: s does not end with that
s.includes("or")        // => true: s includes substring "or"
console.log(s.startsWith("Hell"))
console.log(s.endsWith("!") )
console.log(s.includes("or"))
// Creating modified versions of a string
s.replace("llo", "ya")  // => "Heya, world"
s.toLowerCase()         // => "hello, world"
s.toUpperCase()         // => "HELLO, WORLD"
s.normalize()           // Unicode NFC normalization: ES6
s.normalize("NFD")      // NFD normalization. Also "NFKC", "NFKD"
console.log(s.replace("llo", "ya"))
console.log(s.toLowerCase())
console.log(s.toUpperCase())
console.log(s.normalize() )
console.log(s.normalize("NFD"))
// Inspecting individual (16-bit) characters of a string
s.charAt(0)             // => "H": the first character
s.charAt(s.length-1)    // => "d": the last character
s.charCodeAt(0)         // => 72: 16-bit number at the specified position
s.codePointAt(0)        // => 72: ES6, works for codepoints > 16 bits
console.log(s.charAt(0))
console.log(s.charAt(s.length-1))
console.log(s.charCodeAt(0))
console.log(s.codePointAt(0))
// String padding functions in ES2017
"x".padStart(3)         // => "  x": add spaces on the left to a length of 3
"x".padEnd(3)           // => "x  ": add spaces on the right to a length of 3
"x".padStart(3, "*")    // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-")      // => "x--": add dashes on the right to a length of 3
console.log("x".padStart(3))
console.log("x".padEnd(3))
console.log("x".padStart(3, "*"))
console.log("x".padEnd(3, "-"))
// Space trimming functions. trim() is ES5; others ES2019
" test ".trim()         // => "test": remove spaces at start and end
" test ".trimStart()    // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd()      // => " test": remove spaces at right. Also trimRight
console.log(" test ".trim())
console.log(" test ".trimStart())
console.log(" test ".trimEnd())
// Miscellaneous string methods
s.concat("!")           // => "Hello, world!": just use + operator instead
"<>".repeat(5)          // => "<><><><><>": concatenate n copies. ES6
console.log(s.concat("!"))
console.log("<>".repeat(5))
///////////////acesso Strings
//let s = "hello, world";
s[0]                  // => "h"
s[s.length-1]         // => "d"
console.log(s[0])
console.log(s[s.length-1])

//text = "testing: 1, 2, 3";   // Sample text
//let pattern = /\d+/g;            // Matches all instances of one or more digits
//pattern.test(text)               // => true: a match exists
//console.log(pattern.test(text) )

//text.search(pattern)
//console.log(text.search(pattern)) // => 9: position of first match

//text.match(pattern)              // => ["1", "2", "3"]: array of all matches
//console.log(text.match(pattern))

//text.replace(pattern, "#")       // => "testing: #, #, #"
//console.log(text.replace(pattern, "#"))

//text.split(/\D+/)                // => ["","1","2","3"]: split on nondigits
//console.log(text.split(/\D+/))

//////copia explicita objeto
let a = ["a","b","c"];              // An array we want to copy
let b = [];                         // A distinct array we'll copy into
for(let i = 0; i < a.length; i++) { // For each index of a[]
    b[i] = a[i];                    // Copy an element of a into b
}
let c = Array.from(b);              // In ES6, copy arrays with Array.from()
console.log(a)
console.log(b)
console.log(c)
//coloca ponto em valores
let n = 123456.789;
n.toFixed(0)         // => "123457"
n.toFixed(2)         // => "123456.79"
n.toFixed(5)         // => "123456.78900"
n.toExponential(1)   // => "1.2e+5"
n.toExponential(3)   // => "1.235e+5"
n.toPrecision(4)     // => "1.235e+5"
n.toPrecision(7)     // => "123456.8"
n.toPrecision(10)    // => "123456.7890"
/////////conversão de tipo
parseInt("3 blind mice")     // => 3
parseFloat(" 3.14 meters")   // => 3.14
parseInt("-12.34")           // => -12
parseInt("0xFF")             // => 255
parseInt("0xff")             // => 255
parseInt("-0XFF")            // => -255
parseFloat(".1")             // => 0.1
parseInt("0.1")              // => 0
parseInt(".1")               // => NaN: integers can't start with "."
parseFloat("$72.47")         // => NaN: numbers can't start with "$"
// conversão para string
//[1,2,3].toString()                  // => "1,2,3"
//(function(x) { f(x); }).toString()  // => "function(x) { f(x); }"
///\d+/g.toString()                   // => "/\\d+/g"
//let d = new Date(2020,0,1);
//d.toString()  // => "Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)"
/////FOR OF
/*
Se você quiser iterar através das propriedades de um objeto, você pode Use o for/inloop (introduzido em 5,5.5), ou usar for/ofcom o Object.keys()Método:
*/
let o = { x: 1, y: 2, z: 3 };
let keys = "";
for(let k of Object.keys(o)) {
    keys += k;
}
keys  // => "xyz"
/*
E se você estiver interessado em ambas as chaves e os valores de um propriedades do objeto, você pode usar for/ofcom a Object.entries()E a Atribuição de desestruturação:
*/
let pairs = "";
for(let [k, v] of Object.entries(o)) {
    pairs += k + v;
}
pairs  // => "x1y2z3"
/*
for/of com strings

Strings são iteráveis de caráter por personagem em ES6:
*/
let frequency = {};
for(let letter of "mississippi") {
    if (frequency[letter]) {
        frequency[letter]++;
    } else {
        frequency[letter] = 1;
    }
}
frequency   // => {m: 1, i: 4, s: 4, p: 2}
/*
for/of com Set e Mapa

As classes integradas de ES6 Set e Map são iteráveis. Quando você iterar a Definir com for/of, o corpo do laço corre uma vez para cada elemento do - Definir um conjunto. Você poderia usar código como este para imprimir as palavras únicas em um Cortina de texto:
*/
let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for(let word of wordSet) {
    unique.push(word);
}
unique // => ["Na", "na", "Batman!"]
/*Mapas são um caso interessante porque o iterador de um objeto do mapa não itereia as chaves do mapa, nem os valores do mapa, mas a chave/valor - Em pares. Cada vez que através da iteração, o iterador retorna uma matriz cujo primeiro elemento é uma chave e cujo segundo elemento é o o valor correspondente. Dado um mapa m, você pode iterar e depor seus pares chave/valor como este:*/
let m = new Map([[1, "one"]]);
for(let [key, value] of m) {
    key    // => 1
    value  // => "one"
}
/*5.4.5 para/em  FOR IN

A for/inO loop parece muito com um for/ofloop, com o ofpalavra-chave alterada para in- A . (í a , , , , , ínte , . Enquanto a for/ofO loop requer um iterável objeto após o of, a for/inloop funciona com qualquer objeto após o in- A . (í a , , , , , ínte , . O que é for/ofO loop é novo em ES6, mas for/inJá foi parte do JavaScript desde o início (é por isso que tem o sintaxe mais natural).

O que é for/inloop de declaração através dos nomes de propriedades de um especificado O objeto. A sintaxe é assim: 

para ( variableA que entrar a , object) ()
    statement
variável tipicamente nomeia uma variável, mas pode ser uma variável declaração ou qualquer coisa adequada como o lado esquerdo de um expressão de tarefa. objeto é uma expressão que avalia para um objeto. Como de costume, a declaração é o bloco de declaração ou declaração que serve como o corpo do laço.

E você pode usar um for/inloop como este:
for(let p in o) {      // Assign property names of o to variable p
    console.log(o[p]); // Print the value of each property
}
    Para executar a for/inA instrução, o interpretador JavaScript primeiro Avalia a expressão do objeto. Se ele avalia para nullou a undefined, o intérprete pula o loop e passa para o próximo Declaração. O intérprete agora executa o corpo do loop uma vez para cada propriedade enumerável do objeto. Antes de cada iteração, entretanto, o intérprete avalia a expressão variável e Atribui o nome da propriedade (um valor de cadeia) a ela.

Note-se que a variável no for/inO loop pode ser um expressão arbitrária, desde que seja avaliada em algo adequado para o lado esquerdo de uma tarefa. Esta expressão é avaliada a cada vez através do ciclo, o que significa que pode avaliar de forma diferente cada - Hora. Por exemplo, você pode usar código como o seguinte para copiar o seguinte Nomes de todas as propriedades do objeto em um array:

let o = { x: 1, y: 2, z: 3 };
let a = [], i = 0;
for(a[i++] in o) /* empty 
Arrays JavaScript são simplesmente um tipo especializado de objeto e matriz os índices são propriedades de objetos que podem ser enumeradas com um for/in- Locuo. Por exemplo, seguindo o código anterior com este Linha enumera os índices de matriz 0, 1 e 2:

for(let i in a) console.log(i);

Eu acho que uma fonte comum de bugs no meu próprio código é o acidental Utilização de for/incom matrizes quando eu quis usar for/of- A . (í a , , , , , í , . Quando estiver a trabalhar com arrays, você quase sempre quer usar for/ofEm vez de for/in- A . (í a , , , , , í , .*/

/*
criar objetos
let Obj = { x: "don't change this value" };
library.function(Object.create(Obj));  // Guard against accidental modifications
*/
