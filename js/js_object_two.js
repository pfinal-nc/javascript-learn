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
// 和工厂函数相似用于创建对象

