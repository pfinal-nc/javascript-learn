// 元素(tuple) 是 TypeScript 特有的数据类型, JavaScript 没有单独区分这种类型. 它表示成员类型可以自由设置的数组,即数组的各种成员的类型可以不同
// 由于成员的类型可以不一样.所以元组必须明确声明每个成员的类型

const t1: [string, string, boolean] = ['a', 'b', true];
console.log(t1); // 元组 s 的前两个成员的类型是 string 最后一个成员的类型是 boolean.

// 元组类型的写法,数组的成员类型写在方括号外面 元组的成员类型是写在方括号里面 ts的区分方法就是, 成员类型写在方括号里面的就是元组 写在外面的是数组
// 数组
let t2: number[] = [1];
// 元组 变量 
let t3: [number, string] = [1, 'a'];
console.log(t3)

// 使用元组的时, 必须明确给出类型声明, 否则 Ts 会把一个值在动推断为数组
// a 的类型呗推断为 (number|boolean) []

let a3 = [1, true]; //a3 的类型被推断为 (number| boolean) 
console.log(a3);

// 元组成员的类型可以添加问号后缀 (?) 表示该成员是可选的。 注意 问号只能用于元组的尾部成员, 也就是说, 所有可选成员必须在必选成员之后
let a4: [number, string?, boolean?] = [1];
console.log(a4);

type myTuple = [number, string, boolean?, string?];
// 由于需要声明每个成员的类型. 所以大多数情况下, 元组的成员数量是有限的, 从类型声明就可以明确知道,元组包含多少个成员,越界的成员报错
// 变量 x 是一个只有两个成员的元组, 如果对第三个成员赋值就报错了.但是, 使用扩展运算符(...) 可以表示不限成员数量的元组

type NameNums = [
    string, // 名字
    ...number[]
];

const t4: NameNums = ['A', 1, 2, 3]
console.log(t4)
const t5: NameNums = ['A']
console.log(t5)

// 元组类型 NameNums 的第一个成员是字符串,后面的成员使用扩展运算符来展开一个数组, 从而实现了不定数量的成员

type t6 = [string, number, ...boolean[]];
let t6_1: t6;
t6_1 = ['a', 1, true, false, true]
console.log(t6_1)
type t7 = [string, ...boolean[], number];
type t8 = [...boolean[], string, number];
// 如果不确定元组成员的类型和数量, type Tuple = [...any[]];
// 上面示例中, 扩展运算符分别在元组的尾部, 中部和头部, ... 的后面是一个数组 boolean[];
// 如果不确定元组成员的类型和数量, 可以写在下面这样.
// type Tuple = [...any[]];
// 上面示例中, 元组 Tuple 可以放置任意数量和类型的成员. 但是这样写, 也就失去了使用元组和 TypeScript的意义.
// 元组的成员可以添加成员名, 这个成员名是说明性的, 可以任意取名, 没有实际作用

type ColorTuple = [red: number, green: number, blue: number]
const ct: ColorTuple = [255, 0, 0]
console.log(ct)

// 类型 color 是一个元组, 他有三个成员. 每个成员都有一个名字, 写在具体类型的前面, 使用冒号分隔,这几个名字可以随便取. 没有实际作用,只是用来说明每个成员的含义
// 元组可以通过方括号, 读取成员类型
// type Tuple = [string, number];
type AgeInfo = Tuple[1]; // number
// 由于元组的成员都是数值索引, 即索引类型都是number 所以可以像下面这样读取
type Tuple = [string, number,Date];
type TupleEl = Tuple[number]; // string|number|Date
// Tuple[number] 表示元组 Tuple 的所有数值索引的成员类型, 所以返回 string|number|Date 即这个类型是三个值的联合类型

// 只读元组
// 元组也可以是只读的, 不允许修改, 有两种写法
// 写法一  
type tc = readonly [string, number];

// 写法二
type tcr = Readonly<[number, string]>  // 上面实例中, 两种写法都可以得到只读元组, 其中写法二是一个泛型, 用到了工具类型 Readonly<T>

// 跟数组一样 只读元组是元组的父类型, 所以, 元组可以替代只读元组, 而只读元组不能替代元组.
type tc1 = readonly [number, number]
type tc2 = [number, number]

let tc3:tc2 = [1,2];
let tc4:tc1 = tc3;

console.log(tc3, tc4)
// 由于只读元组不能替代元组, 所有会产生一些令人困惑的抱错
function distanceFromOrigin([x,y]:[number, number]):number{
    return Math.sqrt(x*x + y*y)
}

let point = [3,4] as const;

// console.log(distanceFromOrigin(point)) 函数distanceFromOrigin()的参数是一个元组，传入只读元组就会报错，因为只读元组不能替代元组。

// 成员数量的推断
// 如果没有课选成员和扩展运算符, ts 会推断出元组的成员数量(即元组长度)
// function f(point: [number, number]) {
//     if (point.length !== 3) {

//     }
// }
// 元组 point 的长度 2,不可能等于3 这个判断无意义
// function f(point: [number, number, number]) {
//     if (point.length === 4) {

//     }
// }

const myTuple:[...string[]] = ['a','b','c'];
if (myTuple.length === 4) {

}

// myTuple只有三个成员，但是 TypeScript 推断不出它的成员数量，因为它的类型用到了扩展运算符，TypeScript 把myTuple当成数组看待，而数组的成员数量是不确定的。
// 扩展运算符与成员数量
// 扩展运算符(...) 将数组 转换成一个逗号分隔的序列, 这时, TypeScript 会认为这个序列的成员数量是不确定的, 因为数组的成员数量是不确定的. 这导致如果函数调用时, 使用扩展运算符传入函数参数

const array_de = [1,2,3];
console.log(...array_de);