let user = {
    name: 'pfinal',
    grade: [
        {lesson:'js', score: 100},
        {lesson:'css', score: 90}
    ],
    average() {
        const total = this.grade.reduce((t, a) => t + a.score, 0);
        return this.name + ":" + total / this.grade.length + "分";
    }
};
console.log(user.average())

/**
 OOP
 对象是属性和方法的集合即封装
 将负载功能隐藏在内部, 只开放给外部少量方法, 更改对象内部的负载逻辑不会对外部调用造成影响即抽象
 继承是通过代码复用减少冗余代码
 根据不同形态的对象产生不同结果即多态
*/

// 基本声明
// 使用字面量形式什么对象是最简单的方式
let name = "pfinal";
let obj = {
    name,
    get: function() {
        return this.name
    }
}
console.log(obj.get()); 

let pf = {};
let pfinalclub = new Object();
console.log(pf, pfinalclub)


// 操作属性
// 使用 点语法获取
let user1 = {
    name: 'pfinal',
    age: 18
}

console.log(user1.name);

// 使用 [] 获取
console.log(user1['name']);

