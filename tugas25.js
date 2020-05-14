var arr1 = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

function check(x){
  return x > 10;
}

console.log("Sebelumnya :",arr1.toString());
console.log("Ascending :",arr1.sort().toString());
console.log("Descending :",arr1.sort().reverse().toString());
console.log("Filter > 10 :",arr1.filter(check).toString());
