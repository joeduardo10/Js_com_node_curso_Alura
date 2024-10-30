const estudante = {
    Nome : 'Jose Fernandes',
    Idade : 53,
    Cpf : '110.311.578-24',
    Turma : 'Javascript'
}

function exibeNomeEstudante(objEstudante,infoEstudante){
    return objEstudante[infoEstudante];
}
console.log(exibeNomeEstudante(estudante, 'Nome'));
console.log(exibeNomeEstudante(estudante, 'Cpf'));
console.log(estudante['Nome']);
console.log(estudante['Cpf']);
estudante.telefone = '15 99672-2266';
console.log(estudante['telefone']);
console.log(estudante);