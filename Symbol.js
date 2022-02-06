var g = Symbol('web');
console.log(g);
console.log(g.toString());

var obj1={name:'xiaoxianxian',skill:'web',age:18};
for (let item in obj1){
    console.log(obj1[item]);
}

// 保护
let obj2={name:'xiaoxianxian',skill:'web'};
let age=Symbol();
obj2[age]=18;
for (let item in obj2){
    console.log(obj2[item]);
}
console.log(obj2);