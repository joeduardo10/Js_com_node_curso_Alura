const arr = [2, 3, 6, 8, 10];
/*
function dobra(vetor){
    let resultados = [];
    for (let i = 0; i < vetor.length ; i++){
        resultados.push(arr[i] * 2);
}
return resultados;
}*/
function dobra(vetor) {
    return vetor.map((item) => item * 2);
}
console.log(dobra(arr));


