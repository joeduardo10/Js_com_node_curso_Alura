/*const objetoOriginal = { chave: 'valor' };
const copiaReferencia = objetoOriginal;

copiaReferencia.chave = 'novoValor';
console.log(objetoOriginal.chave); // Saída: novoValor*/
//////////
/*const objetoOriginal = { chave: 'valor' };
const copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal));

copiaProfunda.chave = 'novoValor';
console.log(objetoOriginal.chave); // Saída: valor

console.log(copiaProfunda);
console.log(typeof copiaProfunda);
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

const typeCheck = (type) => {
    const typeString = Reflect.apply(Object.prototype.toString, type, [])
    return typeString.slice(
      typeString.indexOf(' ') + 1,
      typeString.indexOf(']')
    ).toLowerCase()
  }

console.log(typeCheck([])) // array
console.log(typeCheck(null)) // null
console.log(typeCheck({})) // object
console.log(typeCheck('teste')) // string
console.log(typeCheck(123)) // number 
////////////////////////////////////////
//clonagem profunda de arrays
const cloneArray = (element) => {
    const clonedArray = []
    for (const item of element) {
      if (typeCheck(item) === 'array') clonedArray.push(cloneArray(item))
      else clonedArray.push(item)
    }
    return clonedArray
  } 

const numbers = [1, 2, 3]
const numbersCopy = numbers
console.log(numbers === numbersCopy) // true
console.log(numbers === cloneArray(numbers)) // false
///////////////////////////clonando objetos

  const cloneObject = (element) => {
    if (typeCheck(element) !== 'object') return element
    return Object.fromEntries(
      Object.keys(element).map(key =>
        [key, cloneObject(element[key])]
      )
    )
  }
const user = { name: 'caique', address: {country: 'Brazil', state: 'SP'} }
const clonedUser = user
console.log(user.address === clonedUser.address) // true
console.log(user.address === cloneObject(user).address) // false
//console.log(clonedUser);*/
////////////////////////////////DEEP clone
const typeCheck = (type) => {
    const typeString = Reflect.apply(Object.prototype.toString, type, [])
    return typeString.slice(
      typeString.indexOf(' ') + 1,
      typeString.indexOf(']')
    ).toLowerCase()
  }
const deepClone = (element) => {
    switch (typeCheck(element)) {
      case 'array':
        return freeze(cloneArray(element))
        //return cloneArray(element)
      case 'object':
        return freeze(cloneObject(element))
        //return cloneObject(element)
      default:
        return element
    }
  }
  const cloneArray = (element) => {
    if (typeCheck(element) !== 'array') return element
    return element.map(deepClone)
  } 
  const cloneObject = (element) => {
    if (typeCheck(element) !== 'object') return element
    return Object.fromEntries(
      Object.keys(element).map((key) => [key, deepClone(element[key])])
    )
  }
  const person = {
    name: 'caique',
    age: 27,
    hobbies: [
      'movie',
      'music',
      'books'
    ]
  }
  
  console.log(deepClone(person).hobbies === person.hobbies) // false
  console.log(deepClone(person) === person) // false
  

const clonedPerson = deepClone(person)
console.log(clonedPerson === person) // false
console.log(clonedPerson.name) // caique

const newClonedPerson = clonedPerson
newClonedPerson.name = 'thomas'

console.log(newClonedPerson.name) // thomas
console.log(clonedPerson.name) // thomas
console.log(newClonedPerson.name) // caique
console.log(clonedPerson.name) // caique

