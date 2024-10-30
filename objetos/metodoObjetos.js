const carro = {
    marca : 'Nissan',
    modelo : 'Versa SV 1.6 CVT',
    anoFabricacao: 2017,
    cor : 'cinza',
    ligado : true,
    ligar : function(){
        if(this.ligado !== true){
            this.ligado = true;
            return 'Caro ligado com suceso';
         }else{
            return 'o carro já está ligado"';
        }
    },
    desligar : function(){
        if(this.ligado !== false){
            this.ligado = false;
            return 'carro foi desligado!';
        }else{
            return 'O carro encontra desligado"';
        }
    },
    obterDetalhes : function(){
       return Object.entries(carro); 
    }
};
console.log(carro.obterDetalhes());
console.log(carro.ligar());
console.log(carro.desligar());
console.log(carro.obterDetalhes());
Object.defineProperty(carro, 'propriedadeNaoEnumeravel', {
    value: 'FER - 4658',
    enumerable: false
  });
console.log(carro.obterDetalhes());
console.log(carro.propriedadeNaoEnumeravel);

for(let key in carro){
    console.log(carro[key]);
 }
 console.log(Object.keys(carro));
 console.log(Object.values(carro));
 console.log(Object.entries(carro));
 console.log(carro.placa);

 const carraNovo = {
    marca : 'Volkswagen',
    modelo : 'FOX 1.6 Trend',
    anoFabricacao : 2011,
    cor : 'prata Egito'
 }
 const carroComNovosDetalhes = {...carro,...carraNovo};
 console.log(Object.entries(carroComNovosDetalhes));
 carroComNovosDetalhes.anoFabricacao = 2012;
 console.log(Object.entries(carroComNovosDetalhes));