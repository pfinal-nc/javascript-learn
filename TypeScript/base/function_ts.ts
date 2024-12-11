// 函数 hello() 在声明时, 需要给出参数 txt 的类型(string) 以及返回值的类型(void) 后者写在参数列表的圆括号后面. void 类型表示 没有返回值
// function hello(txt: string): void {
//     console.log('hello' + txt);
// }

const hello: (txt: string) => void = function(txt: string): void {
    console.log('hello' + txt);
};

// 变量 hello 被赋值为一个函数, 它的类型有两种写法。 写法一是通过等号右边的函数类型,推断出变量 hello 的类型; 为变量 hello 指定类型, 参数的类型写在箭头左侧, 返回值的类型写在 箭头右侧

// 首先, 函数的参数要放在圆括号里面

// 其次, 类型里面的参数名(txt)是必须的, 有的语言的函数类型可以不写参数名,但是 Ts 不行, 如果写成(string)=>void， Ts 会理解成函数有一个名叫 string的参数, 并且这个 string 参数的类型是 any
type MyFunc = (string, number) => number;

// 函数类型没写参数名, 导致 TypeScript 认为参数类型都是 any.
// 函数类型里面的参数名与实际参数名,可以不一致

let f:(x:number) => number;
f = function(y: number) {
    return y;
};
console.log(f)



// 参数默认值
function createPoint(x =0, y=0) {
    return [x,y]
}

// never 类型表示肯定不会出现的值, 它用在函数的返回值, 就表示某个函数肯定不会返回值 即函数不会正常执行结束
// 它主要有以下两种情况
// 抛出错误的函数
// function fail(msg:string) {
//     throw new Error(msg)
// }

// 只要抛出错误,才是 never 类型 如果显式用return语句返回一个 Error 对象，返回值就不是 never 类型。

function fail():Error {
    return new Error("Something failed")
}

// 无线执行的含税
const sing = function():never {
    while(true) {
        console.log('PFinalClub')
    }
}
// 函数 sing 会永远执行,不会返回 所有返回值类型是 never,never 