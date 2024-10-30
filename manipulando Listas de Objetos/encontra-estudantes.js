    const estudantes = require('./estudantes.json');

    function buscaInformacao(lista, chave, valor) {
        return lista.find((estudante) => estudante[chave].includes(valor));
    }
    const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Olva');
    console.log(estudanteEncontrado);

    const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '1198123183')
    console.log(telefoneEstudante)



