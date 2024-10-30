const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;


fruits.sort();
console.log(fruits)
fruits.reverse();
console.log(position)
console.log(fruits)

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);

points.sort(function(){return 0.5 - Math.random()});
console.log(points);

for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }
  console.log(points);

  points.sort(function(a, b){return a - b});
  console.log(points)

  function myArrayMin(arr) {
    return Math.min.apply(null, arr);
  }
  console.log(myArrayMin(points));
  
  function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
console.log(myArrayMax(points));

function myArrayMin1(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  } 
  console.log(myArrayMin1(points));

  //for each
  const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value ;
}
console.log(txt)
/*////////////////
//map()*/
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
console.log(numbers2)
////////////////////////////////
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
} 
console.log(over18);

/////////////reduce
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
} 
console.log(sum);
