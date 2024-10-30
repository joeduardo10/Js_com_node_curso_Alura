const pessoa = {
    nome: 'Maria',
    notas: [],
    notas: [5.9,5.9,5.9,5.9],
    calcularMedia: function(notas) {
        const soma = this.notas.reduce((total, numero) => total + numero, 0);
        return soma.toFixed(2) / notas.length;
    },
    clasifificaDesempenho: function(nota){
        if(nota >= 9){
           return 'Desempenho excelente' 
        }else if(nota >= 7.6 && nota <= 8.9){       
            return 'Bom desempenho'
              }else if(nota >= 6 && nota <= 7.5){                
                return 'Desempenho Regular'
              }else{
                return 'Desempenho insuficiente'
              }
                    }
};
const media = pessoa.notas;
const desempenho = pessoa.calcularMedia(media);
console.log(pessoa.calcularMedia(media));
console.log(pessoa.clasifificaDesempenho(desempenho));

