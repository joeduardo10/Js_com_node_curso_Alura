const estudante = {
    Nome : 'Jose Fernandes',
    Idade : 53,
    Cpf : '110.311.578-24',
    Turma : 'Javascript'
}
console.log(estudante.Nome);
console.log(`O nome do estudante é ${estudante.Nome}`);
console.log(`Os três primeiros números do cpf são: ${estudante.Cpf.substring(0,3)}`);