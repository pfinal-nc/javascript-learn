// 数据类型
// boolean string number bigint symbol object undefined null
// 首字母大写的Number、String、Boolean等在 JavaScript 语言中都是内置对象，而不是类型名称。另外 undefined 和null 既可以作为值,也可以作为类型, 取决于在哪里使用他们

// boolean 类型
// boolean 类型只包含 true 和 false 两个布尔值
const c: boolean = true;
const e: boolean = false;
console.log(c, e)

// string 类型包含所有字符串

const d: string = "Hello";
const y: string = `${d} PFinalClub `;
console.log(y)

// number 类型

const a: number = 10;
const b: number = 10.5;
const f: number = 0b1110; // 二进制
const g: number = 0o14; // 八进制
const h: number = 0xFA; // 十六进制
console.log(a, b, f, g, h)

// bigint 类型是 ES2020 标准引入的。如果使用这个类型，TypeScript 编译的目标 JavaScript 版本不能低于 ES2020（即编译参数target不低于es2020）。
// const i: bigint = 0xffffn;
// console.log(i)

// symbol 类型 symbol 类型包含所有的 symbol
// const k: symbol = Symbol("k");

// Object 类型 根据 javascript 的设计 object 类型包含了所有对象,数组和函数

const l: object = { name: "PFinalClub" };
const m: object = [1, 2, 3];
const n: object = (q:number) => q * 2;
console.log(l, m, n)

// undefined类型 null 类型

const j: undefined = undefined;
const q: null = null;
console.log(j, q)
