// 类的多方法声明
class Coder{
    name(val){
        console.log(val);
        return val;
    }
    skill(val){
        console.log(this.name('xiaoxianxian')+':'+'Skill:'+val);
    }
    // 类的传参 constructor()
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    add(){
        return this.a+this.b;
    }
}

let xiaoxianxian=new Coder(1,2);
console.log(xiaoxianxian.add());

// 类的继承
class htmler extends Coder{ }
let pang=new htmler(1,2);
pang.name('xiaoxianxian');
console.log(pang.add());
