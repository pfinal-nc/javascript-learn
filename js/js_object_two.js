// 构建函数

// 对象可以通过构造函数来创建

const pf = {
    name: 'pfinal',
    age: 18,
    show() {
        return `${this.name}已经${this.age}岁嘞`
    }
}

const nc = {
    name: '南丞',
    age: 18,
    show() {
        return `${this.name}已经${this.age}岁嘞`
    }
}

// 使用 工厂函数可以简化这个步骤
function createPerson(name, age) {
    return {
        name,
        age,
        show() {
            return `${this.name}已经${this.age}岁嘞`
        }
    }
}

const xj = createPerson('xj', 18);
console.log(xj.show())

// 构造函数
// 和工厂函数相似用于创建对象 上下文为新的对象实例
// 构造函数每个单词手写字母大写
// this 指当前创建的对象
// 不需要返回  this 系统会自动完成

function Student(name) {
    this.name = name
    this.show = function() {
        console.log(this.name)
    };
    // 不需要返回,系统会自动完成
}

const lisi = new Student('李四');
lisi.show()

// 如果构造函数返回对象, 实例化后的对象将是此对象
function ArrayObject(...values) {
    const arr = new Array();
    arr.push.apply(arr,values);
    arr.string = function(sym="|") {
        return this.join(sym);
    };
    return arr;
}
const array = new ArrayObject(1, 2, 3);
console.log(array);
console.log(array.string("#"));

// 严格模式
// 在严格模式夏 方法中的 this 值为 undefined, 为了防止无意的修改 window 对象 
function UserInfo() {
    this.show = function() {
        return `${this.name}已经${this.age}岁嘞`
    };
}

let pnc = new UserInfo()
pnc.name = '南丞'
pnc.age = 18
console.log(pnc.show())

let pnce = pnc.show;
console.log(pnce())


// 内置构造函数
//  js中大部门数据类型都是通过构造函数创建的

const num = new Number(99);
console.log(num.valueOf());

const string = new String("PFianl");
console.log(string.valueOf());

const boolean = new Boolean(true);
console.log(boolean.valueOf());

const date = new Date();
console.log(date.valueOf() * 1);

const regexp = new RegExp("\\d+");
console.log(regexp.test(99));

let pfc = new Object();
pfc.name = "PFinalClub";
console.log(pfc);

const pf2 = {
    name: "pfinal",
}
console.log(pf2.constructor);

// 下面是使用构造函数创建对象
const pf3 = new Object();
pf3.name = "pfinal";
pf3.age = 18;
pf3.show = function() {
    return `${this.name}已经${this.age}岁嘞`
}
console.log(pf3.show())

// 对象函数
function pfe(name) {}
console.log(pfe.toString())
console.log(pfe.length)

// 函数是由系统内置的 function 构造函数创建的

function pff(name) {}
console.log(pff.constructor);

// 抽象特性
// 将复杂功能隐藏在内部, 只开房给外部少量方法,更改对象内部的复杂逻辑不会对外部调用造成影响即抽象

// 将对象属性封装到构造函数内部

function person(name, age) {
    this.name = name
    this.age = age
    this.info = function() {
        return this.age > 50 ? "成年人" : "未成年人"
    };
    this.about = function() {
        return `${this.name}今年${this.age}岁，${this.info()}`
    };
}
let zs = new person("张三", 18);
console.log(zs.about());

//抽象封装
// 上例中的方法和属性仍然可以在外部访问到, 比如  info 方法只是在内部使用,不需要被外部访问到这会破坏程序的内部逻辑.

// 通过构造函数来创建对象，这样可以在外部访问到方法

function person2(name, age) {
    let data = {name,age};
    let info = function(){
        return data.age > 50 ? "成年人" : "未成年人"
    };
    this.message = function() {
        return `${data.name}今年${data.age}岁，${info()}`
    };
}

let ls = new person2("李四", 18);
console.log(ls.message());

// 属性特征
// JS 中可以对属性的访问特性进行控制.
// 查看特征
// 使用 Object.prototype.toString() 来查看对象的特征 

const user = {
    name: "pfinal",
    age: 18
};
let desc = Object.getOwnPropertyDescriptor(user, "name");
console.log(JSON.stringify(desc, null, 4));

/**
    configurable	能否使用 delete、能否需改属性特性、或能否修改访问器属性	true
    enumerable	对象属性是否可通过 for-in 循环，或 Object.keys() 读取	true
    writable	对象属性是否可修改	true
    value	对象属性的默认值
 */


