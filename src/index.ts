import { type } from "os";

// 作用： 相当于强类型语言中的类型声明
// 语法：（变量、函数）：type
// 原始类型 基本类型

let str: string = "Hello Typescript";
let str1: string = '您好！'
let bool: boolean = true;
let bool1: boolean = false;
// let num: number | undefined | null = 2;
let num: number = 2;
let num1: number = 3;
// 数组
let arr1: string[] = ['1', '3'];
let arr11: number[] = [1, 2];
let arr111: boolean[] = [true, false];
let arr2: Array<number | string> = ['3', 2, '4'];
let arr22: Array<number | string | null | undefined> = [1, 3, '3', null, undefined]

// 元组 限定了类型和个数
let tuple: [number, string] =[1, '2'];
let tuple1: [boolean, null, string, undefined, number] = [false, null, 'hah', undefined, 2];
// 能push
// tuple.push(2);
// console.log(tuple)
// tuple[2] 但不能访问，越界

// 函数
let add = (x: number, y: number) => `${x + y}`;
let muilt = (x: number, y: number) => x - y;
// muilt(3,2)
console.log(typeof add(2, 4), typeof muilt(5,2));
// 定义下
let compute:(x: number, y: number) => number;
compute = (a, b) => a + b;
console.log(compute(2, 3), typeof compute(2, 3));
let compute1:(x: number, y: number) => string;
compute1 = (a, b) => a*b+'';
console.log(compute1(5, 2), typeof compute1(5, 2));


// 对象
let obj: {x: number, y: number} = {x: 1, y: 2};
let nobj: {a: string, b: boolean} = {a: '2', b: false};
let obj2:{x: string, y: number};
let nobj2: {x: null, y: number, z: string};
nobj2 = {x: null, y: 2, z: '好不好'};
obj2 = {x: '3', y: 3}
obj.x
obj2.y
nobj.a = '中国';
console.log(obj.x, obj2.x)

// symbol 唯一
let sy1 = Symbol();
let sy2: symbol = Symbol();
console.log(sy1 === sy2);
let sym = Symbol();
let symm2: Symbol ;
symm2 = Symbol();
console.log(symm2 !== sym);

// undefined null

let un: undefined = undefined;
let un1: undefined = undefined;
let nu1: null = null;
let nu: null = null;
// undefined null 给你num 赋值是因为只接受number 
// let num: number | undefined | null = 2; 改成这样可以的
// 或者是从tsconfig.json 的配置中的key "strictNullChecks": false, 设置为false;
// num = un;
// str = '22';
// console.log(num)

// any 不去设任何类型的时候就是any

let x;
x = 1;
x = '3'

// void 没有任何返回值的函数 javascript:void(0)
let noReturn = () => {};
let noReturn1: void;
// let noReturn1: void = () => void;
// noReturn1 = ()=> {}

// never 永远不会有返回值的类型
let error = () => {
  throw new Error('error');
}
let error1 = () => {
  throw new Error('error')
}

// 死循环
let endless = () => {
  while(true) {
  }
}
let endless1 = () => {
  while(true) {
    
  }
}




console.log(document.querySelectorAll('.app'))
document.querySelectorAll('.app')[0].innerHTML = str;