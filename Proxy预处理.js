// 相当于方法调用前的钩子函数
var pro = new Proxy({
    add: function (val) {
        return val + 10;
    },
    name: 'I am xiaoxianxian'
},
{
    get:function(target,key){
        console.log('come in Get');
        return target[key];
    },
    set:function(target,key,value,receiver){
        console.log(`setting ${key} = ${value}`);
        return target[key] = value;
    }

});
console.log(pro.name);
pro.name='xiaoxianxian';
console.log(pro.name);

