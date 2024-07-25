let user = {
    name: 'pfinal',
    grade: [
        { lesson: 'js', score: 100 },
        { lesson: 'css', score: 90 }
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
    get: function () {
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

// 如果属性名不是合法变量名就必须使用括号的形式了
// 对象和方法的属性可以动态的添加或删除
const pf1 = {
    name: 'pfinal',
}
pf1.age = 18;
pf1.show = function () {
    return `${this.name}已经${this.age}岁嘞`
};
console.log(pf1.show());

// 对象方法
// 定义在对象中的函数称为方法

let lisi = {
    name: '李四',
    age: 20,
    grade: {
        math: 99,
        english: 100
    },
    // 平均成绩
    avgGrade: function () {
        let total = 0;
        for (let key in this.grade) {
            total += this.grade[key];
        }
        return total / this.propertyCount("grade");
    },
    propertyCount: function (property) {
        let count = 0;
        for (let key in this[property]) {
            count++;
        }
        return count;
    }
};
console.log(lisi.avgGrade());

// 引用特性
// 对象和函数,数组一样是引用类型, 即复制只会复制引用地址.

let pf2 = { name: "pfinal" };
let cms = pf2;
cms.name = "pfinalcms";
console.log(pf2.name);

// 对象作为函数参数使用时也不会产生完全赋值, 内外共用一个对象

let pf3 = { name: "pfinal" };
function pfinal(pf3) {
    pf3.name = "pfinalcms";
}
pfinal(pf3);
console.log(pf3.name);

// this
// this 指当前对象的引用, 始终建议在代码内部使用 this 而不要使用对象名, 不同对象的 this 只指向当前对象
// 不适用 this 时发生的错误场景
// 删除了 xj 变量, 但在函数体内还在使用 xj 变量造成错误
// 使用 this 后始终指向到引用地址,就不会有这个问题

let xj = {
    name: 'xj',
    show: function () {
        return xj.name;
    }
};
// let pfa = xj;
// xj = null;
// console.log(pfa.show());

// 展开语法
// 使用 ... 可以展示对象的结构, 

let pfa = { name: "pfinal南丞", web: "friday-go.icu" };
let info = { ...pfa, age: 18 };
console.log(info);

// 下面是函数参数合并的示例

function upload(params) {
    let config = {
        type: "*.jpeg,*.png",
        size: 1000
    };
    params = { ...config, ...params };
    console.log(params);
}
upload({ size: 999 });

// 对象转换
// 对象直接参与计算时候, 系统会根据计算的场景在 string/number/default 间转换
// 如果声明需要字符串类型,调用顺序为 toString > valueOf
// 如果常见需要数值类型, 调用顺序为 valueOf > toString

let pfinal1 = new Number(1);
console.log(pfinal1 + 1);
console.log(1 + pfinal1);

// 默认值

function createElement(options) {
    let { width = 200, height = 100 } = options;
    console.log(width, height);
}

createElement({
    width: 300,
    height: 200
})

// 对象结构传参

function user2(name, { sex, age } = {}) {
    console.log(name, sex, age);
}

user2('pfinal', { sex: 'girl', age: 18 })


// 属性管理
// 可以为对象添加属性 

let objp = {name: 'pfinal'}
objp.site = 'friday-go.icu';
console.log(objp);

// 删除属性

delete objp.site;
console.log(objp)

// 检测属性

console.log('site' in objp)
console.log(objp.hasOwnProperty('site'))

// 获取对象所有的属性

let pfc = {name: 'pfinal', age: 18}
const names = Object.getOwnPropertyNames(pfc);
const keys = Object.keys(pfc);
console.log(names)
console.log(keys)

//计算属性 对象属性可以通过表达式计算定义, 动态设置属性或者执行属性方法时很好用
let id = 0;

const person = {
    [`id-${id++}`]: 'pfinal',
    [`id-${id++}`]: 'xj',
    [`id-${id++}`]: 'xj1'
};

console.log(person)

// 使用计算属性为文章定义健明
const lessons = [
    {
      title: "媒体查询响应式布局",
      category: "css"
    },
    {
      title: "FLEX 弹性盒模型",
      category: "css"
    },
    {
      title: "MYSQL多表查询随意操作",
      category: "mysql"
    }
  ];

  let lessonObj = lessons.reduce((obj,cur,index)=>{
    obj[`${cur.category}-${index}`] = cur;
    return obj
  },{});
  console.log(lessonObj);

  
//   let ul = document.createElement('ul');

//   for (const val of lessonObj) {
//     let li = document.createElement('li');
//     li.innerHTML = `课程:${val.name}, 分类:${val.category}`;
//     ul.appendChild(li);
//   }
//   console.log(ul);