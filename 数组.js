// json数组转换
let  json = {
    '0': '好好学习',
    '1': '天天向上',
    '2': '努力工作',
    length:3
}

let arr1=Array.from(json);
console.log(arr1)

let arr2 =Array.of(3,4,5,6);
console.log(arr2);

let arr3 =Array.of('好好学习','天天向上','努力工作');
console.log(arr3);

// 查找，找到符合条件的数组元素就进行return
let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr.find(function(value,index,arr){
    return value > 5;
}))

let arr4=[0,1,2,3,4,5,6,7,8,9];
arr4.fill('好好学习',2,5);//把数组从第二位到第五位用“好好学习”进行填充
console.log(arr4);//[0, 1, "好好学习", "好好学习", "好好学习", 5, 6, 7, 8, 9]

let arr5=['好好学习','天天向上','努力工作']
for (let item of arr5){
    console.log(item);
}

// 获取索引
let arr6=['好好学习','天天向上','努力工作']
for (let index of arr6.keys()){
    console.log(index);
}

// 内容+索引
let arr7=['好好学习','天天向上','努力工作']
for (let [index,val] of arr7.entries()){
    console.log(index+':'+val);
}