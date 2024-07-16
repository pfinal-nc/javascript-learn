// let obj = {1:'pfinal',2:"club"}

// console.table(obj);

let obj = { 1: "pf", "1": "pfinalclub" };
console.table(obj);

let hd = { [obj]: "PFinal" };
console.table(hd);

console.log(hd[obj.toString()]);
console.log(hd["[object Object]"]);

// Set 用于存储任何类型的唯一值,无论最基本类型还是对象引用
/**
只能保存值没有键名
严格类型检测如字符串数字不等于数值型数字
值是唯一的
遍历顺序是添加的顺序，方便保存回调函数

 */

let set = new Set();
set.add(1);
set.add("1");
console.table(set); //Set(2) {1, "1"}
console.log(set.has(1)); //true
console.log(set.values()); //Set Iterator(2) {1, "1"}
console.log(set.keys()); //Set Iterator(2) {1, "1"}
console.log(set.entries()); //Set Iterator(2) { [ 1, 1 ], [ "1", "1" ] }
set.forEach((value, key, set) => {
    console.log(value, key, set);
})

console.log(set.delete("1")); //true
console.table(set);
console.log(set.clear());
console.table(set);