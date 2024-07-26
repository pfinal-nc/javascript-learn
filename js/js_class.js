// class 只是语法糖为了让类的声明与集成更加简洁清晰

// 声明类
// class User{}
// let Articel = class {};
// console.log(new Articel())
// console.log(new User())

// 类方法间不需要逗号隔开
class User {
    show() { }
    get() {
        console.log("get");
    }
}
const pf = new User();
pf.get();
pf.show();

// 构造函数  使用 constructor 构造函数传递参数,  constructor 会在  new 时自动执行

class User1 {
    constructor(name) {
        this.name = name;
        this.show = function () {
            console.log(this.name);
        }
    }
    getName() {
        return this.name
    }
}

const pfinal = new User1('pfinal');
pfinal.show();
console.log(pfinal.getName());

// class 默认使用 strict 严格模式执行 不允许使用 let 声明变量

class User2 {
    name = 'pfinal';
}
const user2 = new User2();
console.log(user2.name);

// 静态访问
// 静态属性即为类设置属性,而不是为生成的对象设置,下面是原理实现.
// 可以把为所有对象使用的的值定义为静态属性

// class Request {
//     static HOST = 'https://friday-go.icu';
//     static get(url) {
//         return fetch(Request.HOST);
//     }
// }

// let request = new Request();
// Request.get().then(resopnse => {
//     console.log(resopnse);
// });


const data = [
    { name: "js", price: 100 },
    { name: "mysql", price: 212 },
    { name: "vue.js", price: 98 }
];

// 静态方法
class Lesson {
    constructor(data) {
        this.mode = data;
    }
    get price() {
        return this.mode.price;
    }
    get name() {
        return this.mode.name;
    }
    //批量生成对象
    static createBatch(data) {
        return data.map(item => new Lesson(item));
    }
    // 最贵的课程
    static MaxPrice(data) {
        return data.sort((a, b) => b.price - a.price)[0];
    }
}

// const lessons = Lesson.createBatch(data);
// console.log(lessons)
// console.log(Lesson.MaxPrice(lessons).name);

// 访问器
// 使用访问器可以对象的属性进行访问控制, 下面是使用访问器对私有属性进行管理
// 使用访问器可以管控属性,有效的防止属性随意修改
// 访问器就是在函数前加上 get/set 修饰, 操作属性时不需要加函数的括号

class User3 {
    constructor(name) {
        this.data = { name }
    }
    get name() {
        return this.data.name;
    }
    set name(value) {
        if(value.trim() === '') throw new Error('名字不能为空');
        this.data.name = value;
    }
}

let pf1 = new User3('pfinal');
console.log(pf1.name);
pf1.name = 'pfinalclub';
console.log(pf1.name);


// 使用 Symbol 定义私有访问属性, 即在外部通过查看对象结构无法获取的属性

const protecteds = Symbol();

class Common {
    constructor() {
        this[protecteds] = {}
        this[protecteds].host = 'https://friday-go.icu';
    }
    set host(url) {
        if (!/^https?:/i.test(url)) {
            throw new Error("非常网址");
          }
          this[protecteds].host = url;  
    }
    get host() {
        return this[protecteds].host;
    }
}