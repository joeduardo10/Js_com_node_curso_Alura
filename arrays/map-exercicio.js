const arrayNums = [1,2,3,4];
const multiplicados = arrayNums.map((par) => {
    return par *= 10;
});

console.log(multiplicados);

const arraySomada = arrayNums.map(num => num * 100);
console.log(arraySomada);


