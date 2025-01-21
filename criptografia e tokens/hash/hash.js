import { createHash } from 'crypto';

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex');
}
console.log(criaHash('uma String Qualquer'))

class Usuario{
    constructor (nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha);
    }
    autentica(nome, senha){
        if(nome === this.nome && this.hash === criaHash(senha)){
            console.log("Usuario Autenticado com sucesso...");
            return true;
        }
        console.log("nome ou senha inválidos !");
    }
}

const usuario = new Usuario('José Eduardo', 'minhaSenha');
console.log(usuario);

//caso de sucesso
usuario.autentica('José Eduardo', 'minhaSenha');
console.log('***************************************')
// caso de fracasso
usuario.autentica('jos','minhaSenha');
usuario.autentica('José Eduardo', 'minhasenha');