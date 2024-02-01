type T = 'a' | 'b' | 'c'
type foo = 'a';

// let bar:T = foo; // 报错
// ts 推断变量foo的类型是 string, 而变量 bar的类型是 'a'|'b'|'c'. 前者是后者的父类型, 父类型不能赋值给子类型
// ts 提供了 类型断言 这样一种手段 允许开发者在代码中断言某个值的类型, 告诉编译器此处的值是什么类型, TypeScript 一旦发现存在类型断言, 就不再对该值进行类型推断
