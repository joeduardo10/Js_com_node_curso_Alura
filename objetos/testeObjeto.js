var meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;


function mostrarProps(obj, meuCarro) {
    var resultado = "";
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        resultado += meuCarro + "." + i + " = " + obj[i] + "\n";
      }
    }
    return resultado;
  }
  console.log(mostrarProps())