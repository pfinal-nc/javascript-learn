// 包装对象
// 所谓“包装对象”，指的是这些值在需要时，会自动产生的对象

console.log('PFinal'.charAt(1)); // 字符串在调用方法的时候 自动包装对象,

// 五种包装对象之中，symbol 类型和 bigint 类型无法直接获取它们的包装对象（即Symbol()和BigInt()不能作为构造函数使用），但是剩下三种可以
// Boolean()  String() Number() 
// 以上三个构造函数，执行后可以直接获取某个原始类型值的包装对象。

const s = new String('foo');
console.log(typeof s) // "object"
console.log(s.charAt(1))

// Object类型与 object 类型
// 大写的Object类型代表 JavaScript 语言里面的广义对象。所有可以转成对象的值，都是Object类型，这囊括了几乎所有的值。除了undefined和null这两个值不能转为对象，其他任何值都可以赋值给Object类型

let obje:Object;

obje = true;
obje = 'hi';
obje = 1;
obje = {foo:'bar'}
obje = [1, 2];
obje = (a:number) => a + 1;

// 小写的 object 类型代表 js 里面的狭义对象. 可以用字面量表示的对象,只包含对象, 数组和函数, 不包括原始类型的值

let objec:object;

objec = { foo: 123 };
objec = [1, 2];
objec = (a:number) => a + 1;
// objec = true; // 报错
// objec = 'hi'; // 报错
// objec = 1; // 报错

console.log(obje)
console.log(objec)


// 值类型  typescript 规定, 单个值也是一种类型, 称为值类型
let v:"pfinal" // v 的类型是字符串 pfinal 导致它 只能赋值这个字符串, 赋值为其他字符串就会报错
v = "pfinal" 
console.log(v)


// 联合类型
// 联合类型(union types)指的是多个类型组成的一个新类型 使用符号|表示。 联合类型 A|B表示, 任何一个类型只要属于 A 或 B 就属于联合类型 A|B.

let v1:string|number;  // 字符串和数字都可以
v1 = 123;
v1 = 'pfinal';

//联合类型可以与值类型相结合，表示一个变量的值有若干种可能

let setting:true|false;

let gender:'male'|'female';

let rainbowColor:'赤'|'橙'|'黄'|'绿'|'青'|'蓝'|'紫';

rainbowColor="橙"
//都是由值类型组成的联合类型，非常清晰地表达了变量的取值范围
console.log(rainbowColor)


let username:string|null;
username = "Pfinal";
username = null;

function printId(id:number|string|null):void{
    console.log(id);
}

printId(100);
printId("100");
printId(null);

function getPort(scheme: 'http'|'https'):number {
    switch(scheme) {
        case 'http':
            return 80;
        case "https":
            return 443;    
    }
}

console.log(getPort('https'));

// 交叉类型
// 交叉类型 指的多个类型组成的一个新类型, 使用符号 & 表示  交叉 A&B表示 任何一个类型必须同时属于 A和B 才属于交叉类型 A&B 极交叉类型同时满足 A和B 的特征

let s1:string&number; // s同时是数值和字符串 这当然是不可能的,所以Ts 会认为 s1实际是 nevert

let objc: 
        { foo: string} & {bar:string};

objc = {foo:'pfinal', bar:'pfinal'} // 交叉类型常常用来为对象类型添加新属性
console.log(objc)

type A = {foo:number}

type B = A & {bar:string} // 类型B是一个交叉类型 用来在A 的基础上增加属性 bar

// Type type 命令用来定义一个类型的别名

type Age = string | number;

let age:Age = 55;
// type 命令为 number 类型定义了一个别名Age 这样就能像使用number 一样, 使用 Age 作为类型
// 别名可以让类型的名字变得更有意义, 也能增加代码的可读性, 还可以使复杂类型用起来更方便, 便于以后修改变量的类型 别名不允许重名

// type Color = 'red' | 'blue' | 'green';

// type Color = 'blue'; 报错

// 别名的作用域是块级作用域， 意味着， 代码块内部定义的别名,影响不到外部

type Color = 'blue';

if (Math.random() > 0.5) {
    type Color = 'blue';
}
// if 代码块内部的类型别名 Color, 跟外部的 Color 是不一样的。别名支持使用表达式, 也可以在定义一个别名时, 使用另一个别名.即别名允许嵌套

type World = "world";

type Greeting = `hello ${World}`;

// 上面示例中, 别名 Greeting 使用了模版字符串, 读取另一个 别名 World。 type 命令属于类型相关的代码, 编译成 JavaScript 的时候, 会被全部删除

// typeof 运算符
// typeof 运算符是一个一元运算符, 返回一个字符串, 代码操作数的类型

console.log(typeof 123); // number
console.log(typeof '123'); // string
console.log(typeof undefined); // undefined
console.log(typeof true); // boolean
console.log(typeof {}); // object

// 块级类型声明  即类型可以声明在代码块里面, 并且只在当前代码块有效

if (true) {
    type T = number;
    let v:T = 5;
}else {
    type T = string;
    let v:T = '5';
}
// 存在两个代码块, 其中分别有一个类型T的声明, 这两个声明都只在自己的代码块内部有效, 在代码块外部无效.

// 11. 类型的兼容  某些类型可以兼容其他类型
type T = number|string;
let a1:number = 1;
let b1:T = a1;

// 上面示例中, 变量a和b 的类型是不一样的, 但是变量 a 赋值给变量 b 并不会报错, 这时,就认为 b 的类型兼容 a的类型。
// TypeScript 为这种情况定义了一个专业术语, 如果类型A 的值可以赋值给类型B, 那么类型A就称为类型B的子类型（subtype）。在上例中，类型number就是类型number|string的子类型。
// TypeScript的一个规则是, 凡是可以使用父类行的地方, 都可以使用子类型, 但是反过来

let a2:'hi' = 'hi';
let b2:string = "pfinal";

b2 = a2;
console.log(b2); // 123
