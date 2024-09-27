/*
 reset 参数
 1. 函数的参数个数可以不固定
 2. 可以将一个数组转换为用逗号分隔的参数序列
 3. 可以将一个对象转换为用逗号分隔的参数序列

*/

function sum(...args) {
    let result = 0;
    for (let arg of args) result += arg;
    return result;
}
console.log(sum(1,2,3));

// reset 参数必须放到参数列表的最后

// arguments 变量
// 1. 函数的参数个数可以不固定
// 2. 可以将一个数组转换为用逗号分隔的参数序列

function sum() {
    let result = 0;
    for (let arg of arguments) result += arg;
    return result;
}

console.log(sum(1,2,3));