// set声明
// Set不允许内部有重复的值，如果有只显示一个，相当于去重。虽然Set很像数组，但是他不是数组。
let setArr = new Set(['好好学习','天天向上']);
console.log(setArr);//Set {'好好学习','天天向上'}

// 增加set
let setArr1 = new Set(['好好学习','天天向上']);
console.log(setArr1);//Set {'好好学习','天天向上'}
setArr1.add('前端职场');
console.log(setArr1);
// 删除set
setArr1.delete('前端职场');
console.log(setArr1); //Set {'好好学习','天天向上'}
// 查找set
console.log(setArr1.has('好好学习'));//true
// 清除set
setArr1.clear();
console.log(setArr1);//true

// size获取set值的数量
let setArr2 = new Set(['好好学习','天天向上']);
for (let item of setArr2){
    console.log(item);
}
console.log(setArr2.size);

// weakset
let weakObj=new WeakSet();
let obj={a:'好好学习',b:'天天向上'}
weakObj.add(obj);
console.log(weakObj);

