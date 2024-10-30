export default class User {
  #nome
  #email
  #nascimento
  #role
  #ativo
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome
    this.#email = email
    this.#nascimento = nascimento
    this.#role = role || "estudante"
    this.#ativo = ativo
  }
  get nome() {
    return this.#nome
  }
  set nome(novoNome) {
    if (novoNome === "") {
      throw new Error('formato do nome não é válido')
    }
    this.#nome = novoNome
  }
  get email() {
    return this.#email
  }
  get nascimento() {
    return this.#nascimento
  }
  get role() {
    return this.#role
  }
  get ativo() {
    return this.#ativo
  }
  exibirInfos() {

    if (this.role === "estudante") {
      return `dados estudante: ${this.nome}`
    }
    if (this.role === "admin") {
      return `dados admin: ${this.nome}, ${this.role}`
    }
    if (this.role === "docente") {
      return `dados docente: ${this.nome}, ${this.email}`
    }

  }
  static exibirInfosStatic(nome,email){
    return`${nome},  ${email}`
  }
  exibirInfos(){
    const tipos = {
      basic: `dados basicos :${this.nome}`,
      complete: `dados completos : ${this.nome}, ${this.email}, ${this.nascimento}`
    }
    return tipos[arguments[0]]
  }
  // exibirInfosTipo(tipoInfo){
  //   console.log(arguments)
  //   if(tipoInfo === 'basic'){
  //     return `dados basicos ${this.nome}`
  //   }
  //   if(tipoInfo === 'complete'){
  //     return `completo ${this.nome}, ${this.email}, ${this.nascimento}`
  //   }
  //   const infoSelecionada = arguments[0]
  //   console.log('tipo de informaçao selecionada',infoSelecionada)
  // }
}


  


