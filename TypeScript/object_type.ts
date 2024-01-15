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

