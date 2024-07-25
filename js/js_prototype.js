// 原型基础

// 原型对象
// 每个对象都有一个原型 prototype 对象. 通过函数创建的对象也将拥有这个原型对象, 原型是一个指向对象的指针.
// 可以将原型理解为 对象的父亲, 对象从原型对象集成来属性
// 所有函数的原型默认是 Object 的实例, 所以可以使用 toString/toValues/isPrototypeOf 等方法的原因
// 使用原型对象为多个对象共享属性或方法
// 如果对象本身不存在属性或方法将到原型上查找
// 使用原型可以解决, 通过构建函数创建对象时赋值多个函数造成的内存占用问题
// 原型包含 constructor 属性，指向构造函数本身
// 对象包含 __proto__ 属性，指向原型对象

let pf = ['pfinal'];
console.log(pf.concat("b"));

let x = {};
let y = {};
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));

function Person(name) {
    this.name = name
}
Person.__proto__.view = function() {
    console.log(this.name)
}
Person.view({ name: 'pfinal' })

Person.prototype.show = function() {
    console.log(this.name)
}

let p1 = new Person('pfinal')
p1.show()
console.log(Person.prototype===p1.__proto__);