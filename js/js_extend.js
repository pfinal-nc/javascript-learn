// js 扩展 方法

// every 用于递归的检测元素 要所有操作都要返回真的结果才为真

const user = [
    { name: "李四", js: 89 },
    { name: "马六", js: 55 },
    { name: "张三", js: 78 }
]

const result = user.every((item) => item.js > 60);
console.log(result)
// 标题的关键词检查

let words = ["PFinal", "CLub", "PFinalClub", "南丞"];
let title = "PFinalClub南丞";

let state = words.every((item, index, array) => {
    return title.indexOf(item) >= 0;
});

state == false && console.log("标题包含关键词");

// some 函数可以递归的检测元素, 如果有一个返回 true, 表达式结果就是真, 第一个参数为元素,第二个参数为索引，第三个参数为原数组。

let state1 = user.some((item) => item.js > 60);
let state2 = words.some(function (item, index, array) {
    return title.indexOf(item) >= 0;
});

state2 == true && console.log("标题还有违规词");

// filter 可以过滤数据中元素,下面是获取所有在 css栏目的课程
let lessons = [
    { title: '媒体查询响应式布局', category: 'css' },
    { title: 'FLEX 弹性盒模型', category: 'css' },
    { title: 'MYSQL多表查询随意操作', category: 'mysql' }
];

let cssLessons = lessons.filter(function (item, index, array) {
    if (item.category.toLowerCase() == 'css') {
        return true;
    }
});

console.log(cssLessons);

// map 可以对数组中的每个元素进行操作,并返回一个新数组,下面是获取所有课程的标题

let lessons1 = [
    { title: '媒体查询响应式布局', category: 'css' },
    { title: 'FLEX 弹性盒模型', category: 'css' },
    { title: 'MYSQL多表查询随意操作', category: 'mysql' }
];

lessons1 = lessons1.map(function (item, index, array) {
    item.title = `[PFinalClub] ${item['title']}`;
    return item;
});
console.log(lessons1);


// reduce 使用 reduce 与reduceRight 函数可以迭代数组中的所有元素, reduce 从前开始 reduceRight 从后面开始

// 统计 元素出现的次数

function countArrayElem(array, elem) {
    return array.reduce((total, cur) => (total += cur == elem ? 1 : 0), 0);
}

let numbers = [1, 2, 3, 4, 5, 1, 2];
console.log(countArrayElem(numbers, 1));
