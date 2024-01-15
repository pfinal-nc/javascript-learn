// typescript 数组有一个根本特征: 所有成员的类型必须相同, 但是成员数量是不确定的, 可以是无限数量的成员.
// 数组的类型有两种写法. 第一种写法是在数组成员的类型后面 
// let arr:number[] = [1, 2, 3];
// 数组arr的类型是 number[] 其中 number 表示数组成员类型是 number 如果数组成员的类型比较复杂, 可以写在圆括号里面
// let arr:(number|string)[]; // 数组 arr的成员类型是 number|string. 圆括号是必须的，否则因为竖杠|的优先级低于[]，TypeScript 会把number|string[]理解成number和string[]的联合类型。
// 如果数组成员可以是任意类型, 写成 any[]

// let arr2:any[] = [1, '2', true];

// 数组类型声明了以后, 成员数量是不限制的, 任意数量的成员都可以, 也可以是空数组.
// let arr:number[];
// arr = [];
// arr = [1];
// arr = [1, 2, 3];

// 这种规定的隐藏含义就是, 数组的成员是可以动态变化的
// let arr:number[] = [1, 2, 3];
// arr[3] = 4;
// arr.length = 2;
// console.log(arr)
// 上面示例中, 数组增加成员或减少成员,都是可以的 正式由于成员数量可以动态变化, 所以 TppeScript 不会对数组边界进行检查, 越界访问数组并不会报错
let arr:number[] = [1, 2, 3];
let foo = arr[3]; // 正确 变量 foo 的值是一个不存在的数组成员, TypeScript 并不会报错 TypeScript 允许使用方括号读取数组成员的类型

// type Names = string[];
// type Name = Names[0]; // string

// 类型 Names 是字符串数组, 那么 Names[0] 返回的类型就是 string. 由于数组成员的索引类型都是 number 所以读取成员类型也可以写成下面这样
type Names = string[];
type Name = Names[number]; // string

// 上面示例中, Names[number] 表示数组 Names 所有数值索引的成员类型, 所以返回 string

// 数组的类型推断
// 如果数组变量没有声明类型, TypeScript 就会推断数组成员的类型, 推断行为会因为值的不同,而有所不同. 如果变量的初始值是空数组, TypeScript 会推断数组类型是 any[]

const array:(string|number)[] = []; // 为这个数组赋值时, TS 会自动更新类型推断
array.push(1);
array.push("abc");

console.log(array)

// 多维数组

var multi:number[][] = [[1, 2, 3], [4, 5, 6]];

console.log(multi[0][1]) // 2

