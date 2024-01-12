// javascript 是一种动态类型语言, 变量没有类型限制, 可以随时赋予任意值
// var x=y ? 1:'a';
// console.log(x); // 输出 1 

// 强制转换
// 强制转换主要指使用Number() String() Boolean() 三个函数, 手动将各种类型的值, 分别转换成数字, 字符串或者布尔值
// 使用 Numer 函数

// 数值: 转换后还是原来的值
console.log(Number(324))  // 324

// 字符串: 如果可以被解析为数值, 则转换为相应的数值
console.log(Number("324abc"))  // NaN

// 空字符串转为0
console.log(Number(""))  // 0

// 布尔值 true 转成 1, false 转成 0 
console.log(Number(true))  // 1
console.log(Number(false))  // 0

// undefined 转成 NaN
console.log(Number(undefined))  // NaN

// null 转成 0 
console.log(Number(null))  // 0

// Number 函数将字符串转为数值, 要比 parseInt 函数严格很多, 基本上, 只要有一个字符串无法转成数值, 整个字符串就会被转为 NaN

console.log(parseInt('42 cats'))  //42 parseInt 逐个解析字符 而 Number 函数整体转换字符串的类型

console.log(Number('42 cats')) // NaN

console.log(parseInt('\t\v\r12.34\n')) // 12

console.log(Number('\t\v\r12.34\n')) // 12.3

// 1. 第一步, 调用对象自身的 valueOf 方法, 如果返回原始类型的值, 则直接对该值使用 Number函数.不再进行后续步骤。
// 2. 第二步, 如果 valueOf方法返回的还是对象,则改为调用对象自身的 toString 方法。 如果 toString 方法返回原始类型的值.则对该值使用 Number函数, 不再进行后续步骤
// 3. 第三步, 如果 toString 方法返回的是对象

var obj = {x:1}
console.log(Number(obj))  // NaN

// 等同于
if(typeof obj.valueOf() === 'object') {
    console.log(Number(obj.toString()))
} else {
    console.log(Number(obj.valueOf()))
}

// 在上面代码中, Number 函数 将 obj 对象转为数值。背后发生了一连串的操作. 首先调用 obj.valueOf 方法. 结果返回对象本身; 于是,继续调用 obj.toString 方法
// 这时返回字符串 对这个字符串使用 Number 函数, 得到 NaN
// 默认情况下，对象的valueOf方法返回对象本身，所以一般总是会调用toString方法，而toString方法返回对象的类型字符串（比如[object Object]）。所以，会有下面的结果

// var obj = {
//     valueOf: function () {
//         return {};
//     },
//     toString: function () {
//         return {};
//     }
// };

// console.log(Number(obj))  
console.log(Number({valueOf:function() {return 2;}}))  

console.log(Number({toString:function() {return 3;}}))

console.log(Number({valueOf: function () {return 2;}, toString: function () {return 3;}}))
// 上面代码对三个对象使用 Number 函数, 第一个对象返回 valueOf 方法的值, 第二个对象返回 toString 方法的值, 第三个对象表示 valueOf 方法先于 toString 方法执行

// String()
// string 函数可以将任意类型的值转化成字符串
// 1. 原始类型值
/*
    数值: 转为相应的字符串
    字符串: 转换后还是原来的值
    布尔值: true 转为字符串 true  false 转为 字符串 false
    undefined: 转为字符串 undefined
    null: 转为字符串 null
*/

console.log(String(123))  // 123
console.log(String('abc'))  // abc
console.log(String(true))  // true
console.log(String(undefined))  // undefined
console.log(String(null))  // null

// 对象  String 方法的参数如果是对象, 返回一个类型字符串;如果是数组, 返回该数组的字符串形式
console.log(String({name: '张三'}))  // [object Object]
console.log(String([1, 2, 3]))  // 1,2,3
// String返回背后的转换规则与Number 方法基本相同. 只是互换了 valueOf 方法和 toString 方法的执行顺序
// 1. 先调用对象自身的 toString 方法, 如果返回原始类型的值, 则对该值使用 string函数 不再进行一下步骤
// 2. 如果 toString 方法返回的是对象, 再调用原对象的 valueOf方法, 如果 valueOf 方法返回原始类型的值,则对该值使用 String 函数
// 3. 如果 valueOf 方法返回的是对象

console.log(String({a:1}).toString())

