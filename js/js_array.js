// 对象方式创建数组
console.log(new Array(1,'PFinalClub'));

// 使用字面量创建  

const array = [1,'PFinalClub',true,undefined,null,NaN];

// 定义多维数组
const array2 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(array2[1][0]);

// 数组是引用类型可以使用 const 声明并修改它的值
const array3 = [1,2,3];
array3.push(4);
console.log(array3);

// 使用原型的 length 属性可以获取数组元素数量

console.log(array3.length);

// 数组可以设置任何值
array3[0] = 'PFinalClub';

// 声明多个空元素的数组

let pf = new Array(5);
console.log(pf);

// Array.of
// 使用Array.of 与 new Array 不同是设置一个参数时不会创建空元素数组
let pfinal = Array.of(3);
console.log(pfinal);

pfinal = Array.of(1,2,3);
console.log(pfinal);

// 类型检测
// 检测变量是否为数组类型
console.log(Array.isArray(array3));
console.log(Array.isArray(pfinal));

// 类型转换
// 可以将数组转换为字符串也可以将其他类型转换为数组
// 字符串  大部分数据类型都可以使用 .toString() 函数转换为字符串

console.log(array3.toString());

// 也可以使用函数 String 转换为字符串

console.log(String(array3));

// 或使用join 链接为字符串

console.log([1,2,3].join('-'));

// Array.from
// 使用 Array.from 可将类数组转换数组, 类数组置包含 length 属性 或 可迭代的对象

// 第一个参数为要转换的数据,第二个参数为类似于 map 函数的回调方法

let str = "PFinal南丞"
console.log(Array.from(str));

// 为对象设置 length 属性也可以转换为数组, 但要下标为数值或者数值字符串

let user = {
    0: '张三',
    '1': '李四',
    length: 2
};
console.log(Array.from(user)); 

// 数组合并
let a = [1,2,3];
let b = ['a',"pfinal",...a];
console.log(b);

// 函数参数

function pfinalclub(...args) {
    console.log(args);
}

pfinalclub(1,2,3,4,5);

// 也可以用于接受部分参数
function pfinalclub2(a,...c) {
    console.log(a,c);
}

pfinalclub2(1,2,3,4,5);

// 结构赋值数组
let [a1,b1,c1] = [1,2,3];
console.log(a1,b1,c1);

function pfinalclub3() {
    return ['pfinal','club'];
}

let [a2,b2] = pfinalclub3();
console.log(a2,b2);

// 如果变量已经初始化过. 

