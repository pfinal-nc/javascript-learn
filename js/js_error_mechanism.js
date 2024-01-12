// 错误处理机制
// javascript 解析或运行时 一旦发生错误, 引擎就会抛出一个错误对象, javascript 原生提供 Error 构造函数

var error = new Error('出错了');
console.log(error.message); // 出错了
// 在上面代码中, 调用 Error() 构造函数, 生成一个实例对象 err, Error() 构造函数接受一个参数, 表示错误提示, 可以从实例的 message属性读到这个参数
// 抛出 Error 实例对象以后, 整个程序就中断在发生错误的地方

// Javascript 语言标准只提到, Error 实例对象必须有 message属性, 表示出错时的提示信息, 没有提到其他属性。大多数 JavaScript 引擎，对Error实例还提供name和stack属性，分别表示错误的名称和错误的堆栈，但它们是非标准的，不是每种实现都有。

// message: 错误提示信息
// name 错误名称 
// stack 错误的堆栈

if (error.name) {
    console.log(error.name + ': ' + error.message);
}

// stack 属性用来查看错误发生时的堆栈

function throwit() {
    throw new Error('抛出一个错误');
}

function catchit() {
    try {
        throwit();
    } catch(e) {
        console.log(e.stack); // print stach trace
    }
}

catchit()


// 原生错误类型
// Error 实例对象时最一般的错误类型, 在它的基本上, javascript 还定义了其他6种错误对象, 也就是说, 存在 Error 的6个派生对象

// SyntaxError 对象是解析代码时发生的语法错误
// 变量名错误
var la;
// Uncaught SyntaxError: Invalid or unexpected token

// 缺少括号
console.log('hello');
// Uncaught SyntaxError: Unexpected string
// 上面代码的错误, 都是在语法解析阶段就可以发现, 所以会抛出 SyntaxError 第一个错误提示是 token非法, 第二个错误提示是 字符串不符合要求


// ReferenceError 对象
// ReferenceError对象是引用一个不存在的变量时发生的错误
// 使用一个不存在变量 unknownVariable
// 另一种触发场景是, 将一个值分配给无法分配的对象, 比如对函数的运行结果赋值.
// 等号左侧不是变量
// console.log() = 1;  // 上面代码对函数 console.log 的运行结果赋值, 结果引发了 ReferenceError 错误

// RangeError 对象
// RangeError 对象时一个值超出有效范围时发生的错误, 主要有几个情况, 一是数组长度为负数, 二是 Number对象的方法参数超出范围. 以及函数堆栈超过最大值。
// 数组长度不得为负数
// var arr = new Array(-1);
// console.log(arr);  // RangeError: Invalid array length


// TypeError 对象
// TypeError对象时变量或参数不是预期类型时发生的错误. 比如. 对字符串、布尔值、数值等原始类型的值使用new命令，就会抛出这种错误，因为new命令的参数应该是一个构造函数。
// new 123

// var obj = {};
// obj.unknownMethod()

// 上面代码的第二种情况, 调用对象不存在的方法.也抛出 TypeError错误, 因为 obj.unknownMethod的值是 undefined 

