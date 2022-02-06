// 对象赋值
let name="xiaoxianxian";
let skill= 'web';
var obj= {name,skill};
console.log(obj);  //Object {name: "xiaoxianxian", skill: "web"}

// 对象Key值构建
let key='skill';
var obj={
    [key]:'web'
}
console.log(obj.skill);

// 自定义对象方法
var obj={
    add:function(a,b){
        return a+b;
    }
}
console.log(obj.add(1,2));  //3

// 对象比较
var obj1 = {name:'xiaoxianxian'};
var obj2 = {name:'xiaoxianxian'};
console.log(obj1.name === obj2.name);//true
console.log(Object.is(obj1.name,obj2.name)); //true

// ===为同值相等，is()为严格相等
console.log(+0 === -0);  //true
console.log(NaN === NaN ); //false
console.log(Object.is(+0,-0)); //false
console.log(Object.is(NaN,NaN)); //true

// 合并对象
var a={a:'好好学习'};
var b={b:'天天向上'};
var c={c:'努力工作'};
let d=Object.assign(a,b,c)
console.log(d);

