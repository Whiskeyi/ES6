function add1(a,b){
    return a+b;
}
console.log(add1(1,2));

// 默认值
function add2(a,b=2){
    return a+b;
}
console.log(add2(1));//3

// 抛错
function add3(a,b=1){
    if(a == 0){
        throw new Error('This is error')
    }
     return a+b;
}
// console.log(add3(0));

// 箭头函数
var add4 =(a,b=1) => a+b;
console.log(add4(1));

var add5 =(a,b=1) => {
    console.log('111111')
    return a+b;
};
console.log(add5(1));