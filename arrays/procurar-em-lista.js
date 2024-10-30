
const alunos = ['Maria', 'Eduarda','Fernanda', 'Marcela'];
const medias = [8.5,9,9.5,10];
const lista = [alunos, medias];
function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
        } else {
        console.log('Estudante não existe na lista');
        }
    }
    
exibeNomeENota('Eduarda');
exibeNomeENota('Vini');
