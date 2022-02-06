// export :负责进行模块化，也是模块的输出。
// import : 负责把模块引，也是模块的引入操作。
export var a = 'xiaoxianxian';
import { a } from './模块化';
console.log(a);
// export default的使用 加上default相当是一个默认的入口
export default a = 'xiaoxianxian';
