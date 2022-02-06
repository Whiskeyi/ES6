let  [a,b,c]=[1,2,3];

let [a,b="天天向上"]=['好好学习']
console.log(a+b); //控制台显示“好好学习天天向上”

let {foo,bar} = {foo:'好好学习',bar:'天天向上'};
console.log(foo+bar); //控制台打印出了“好好学习天天向上”

let foo;
({foo} ={foo:'好好学习'});
console.log(foo); // 好好学习

// 对象的函数解构
let json = {
    a:'好好学习',
    b:'天天向上'
}
function fun({a,b='努力工作'}){
    console.log(a,b);
}
fun(json);//好好学习 天天向上

// 数组的函数解构
let arr = ['好好学习','天天向上','努力工作'];
function fun(a,b,c){
    console.log(a,b,c);
}
fun(...arr);