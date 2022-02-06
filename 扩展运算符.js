function fun(...arg){
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);

}
fun(1,2,3);

let arr1=['www','baidu','com'];
let arr2=arr1;
console.log(arr2);
arr2.push('Google');
console.log(arr1);

// 拓展
let arr1=['www','baidu','com'];
//let arr2=arr1;
let arr2=[...arr1];
console.log(arr2);
arr2.push('Google');
console.log(arr2);
console.log(arr1);