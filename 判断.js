// 对象判断
let obj={
    a:'好好学习',
    b:'天天向上'
}
console.log('a' in obj); //true

// 数组判断
let arr=[,,,,,];
console.log(arr.length); //5

// 数组下标判断
let arr1=[,,,,,];
console.log(0 in arr1); //false
let arr2=['好好学习','天天向上'];
console.log(0 in arr2);  // true