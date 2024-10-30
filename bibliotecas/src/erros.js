try{
    console.log(nome)

}catch(erro){
console.log(`O nome do erro é: ${erro.name}\n`)
console.log(`A mensagem de erro é: ${erro.message}\n`)
console.log(`A Stack do erro é: ${erro.stack}\n`)
}