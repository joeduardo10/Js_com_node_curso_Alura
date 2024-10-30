const estudantes = require('./estudantes.json')

function ordenarInverso(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
      if (a[propriedade] < b[propriedade]) {
        return -1;
      }
      if (a[propriedade] > b[propriedade]) {
        return 1;
      }
      return 0;
    });
  
    return resultado;
  }
  
   
   //const listaOrdenada = ordenar(estudantes, 'nome');
   const listaOrdenada = ordenarInverso(estudantes,"nome");
   console.log(listaOrdenada);