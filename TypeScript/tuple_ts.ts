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

type myTuple = [number, string, boolean?,string?];
// 由于需要声明每个成员的类型. 所以大多数情况下, 元组的成员数量是有限的, 从类型声明就可以明确知道,元组包含多少个成员,越界的成员报错
// 变量 x 是一个只有两个成员的元组, 如果对第三个成员赋值就报错了.但是, 使用扩展运算符(...) 可以表示不限成员数量的元组

type NameNums = [
    string, // 名字
    ...number[]
];

const t4:NameNums = ['A',1,2,3]
console.log(t4)
const t5:NameNums = ['A']
console.log(t5)

// 元组类型 NameNums 的第一个成员是字符串,后面的成员使用扩展运算符来展开一个数组, 从而实现了不定数量的成员

