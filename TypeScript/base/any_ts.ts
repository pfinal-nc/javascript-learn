let x: any
x = 1;
x = 'foo';
x = true;

// 上面示例中, 变量 x 的类型是 any  就可以被复制为任意类型的值, 变量类型一旦设为 any TypeScript实际上会关闭这个变量的类型检查,即使有明显的 类型错误

let x1:any = "hello";
x.foo = 100; // 不报错
console.log(x)
// 在实际开发中, any 类型主要适用于一下两个场景
// 1 出于特殊原因,需要关闭某些变量的类型检查 就可以把该变量的类型设置为 any
// 2 为了适配以前老的 js项目, 让代码快速迁移到 TypeScript 可以把变量类型设为 any

// never 类型 空类型

let a:never;
// never 类型的使用场景, 主要是在一些类型运算之中,保证类型运算的完整性

function fn(x:string|number) {
    if (typeof x === 'string') {
        // do something
    } else if (typeof x === 'number') {
        // do something
    } else {
        x; // 这里 x 的类型为 never
    }
}


