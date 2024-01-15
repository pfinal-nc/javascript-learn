let sy:symbol = Symbol();
let sy1:symbol = Symbol();
console.log(sy === sy1); //false

// Symbol 它类似于字符串, 但是每一个symbol 值都是独一无二的, 与其他任何值都不相等
// Symbol 值通过 Symbol() 函数生成, 在 TypeScript 里面 Symbol 的类型使用 symbol表示


// 2 unique symbol symbol 类型包含所有的symbol值, 但是无法表示某一个具体的 symbol值。比如 5 是一个具体的数值, 就用 5 这个字面量来表示, 这也是它的值类型。但是，Symbol 值不存在字面量，必须通过变量来引用，所以写不出只包含单个 Symbol 值的那种值类型。
// TypeScript 设计了symbol的一个子类型unique symbol，它表示单个的、某个具体的 Symbol 值

// 因为 unique symbol 表示单个值, 所以这个类型的变量是不能修改值的, 只能用 const命令声明, 不能用let声明

// 正确
const st1:unique symbol = Symbol();
// 报错
const st2:unique symbol = Symbol();

// unique symbol
// symbol 类型包含所有的 Symbol 值,但是无法表示某一个具体的 Symbol 值. 比如，5是一个具体的数值，就用5这个字面量来表示，这也是它的值类型。但是，Symbol 值不存在字面量，必须通过变量来引用，所以写不出只包含单个 Symbol 值的那种值类型。但是，Symbol 值不存在字面量，必须通过变量来引用，所以写不出只包含单个 Symbol 值的那种值类型。

const st3:unique symbol = Symbol();

// 上面示例中, let 命令声明的变量, 不能是 unique symbol 类型,const 命令为变量赋值 symbol 值时，变量类型默认就是unique symbol，所以类型可以省略不写。所以类型可以省略不写

const st4:unique symbol = Symbol();


// 类型判断
// 如果变量声明时没有给出类型, TypeScript 会推单某个 Symbol 值变量的类型
// let 命令声明的变量, 推断类型为 symbol.
// 类型为 symbol

let sx = Symbol();
console.log(sx)