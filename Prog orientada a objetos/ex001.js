/*const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
      console.log(this.nome, this.email);
    }
   }
   //user.exibirInfos()
   const exibir = user.exibirInfos;
   exibir()
   const exibir = function() {
    console.log(this.nome, this.email);
}
const exibirNome = exibir.bind(user);
exibirNome()


function exibeInfos() {
    console.log(this.nome, this.email)
   }
   
   const user = {
    nome: 'Mariana',
    email: 'm@m.com'
   }
   
   exibeInfos.call(user)
   function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibeInfos = function(){
      console.log(this.nome, this.email)
    }
   }
   
   const newUser = new User('mariana', 'm@m.com')
   
   const outroUser = {
    nome: 'Rodrigo',
    email: 'r@r.com'
   }
   
   newUser.exibeInfos() //mariana m@m.com
   newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com*/

   function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }
    const user = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
      fn.call(user, this.nome, this.email)
    }
   }
   
   user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com
   