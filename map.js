// json格式
let json = {
    name:'xiaoxianxian',
    skill:'web'
}
console.log(json.name);

// map格式
var map=new Map();
map.set(json,'iam');
console.log(map);

// get
console.log(map.get(json));
// delete
map.delete(json);
console.log(map)
// size属性
console.log(map.size);
// 查找
console.log(map.has('xiaoxianxian'))
// 清除
map.clear()