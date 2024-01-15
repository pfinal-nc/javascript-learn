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
let arr:number[] = [1, 2, 3];
arr[3] = 4;