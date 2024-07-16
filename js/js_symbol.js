// Symbol 用于防止属性名冲突而差生的, 用来创建唯一的属性名

let pf = Symbol();
let edu = Symbol();
console.log(pf);
console.log(pf == edu);

// Sumbol 不可添加属性
pf.name = 'pfinal';
console.log(pf.name); //undefined

// symbol.for 根据描述获取 Symbol 如果不存在则新建一个 Symbol 

let pf1 = Symbol.for('pfinal');
let pf2 = Symbol.for('pfinal');
console.log(pf1 == pf2); // true
console.log(pf1 === pf2); // false

// 对象属性

let symbol = Symbol("PFinal社区");

let obj = {
    [symbol]: 'PFinal社区'
}
console.log(obj);

// 缓存操作 

class Cache {
    static data = {}
    static set(name,value) {
        this.data[name] = value
    }
    static get(name) {
        return this.data[name]
    }
}

let user = {
    name: 'pfinal',
    key: Symbol('缓存')
}

let cart = {
    name: "购物车",
  key: Symbol("购物车")
}

Cache.set(user.key, user);
Cache.set(cart.key, cart);
console.log(Cache.data);


