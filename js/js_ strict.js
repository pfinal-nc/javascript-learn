"use strict"
// 严格代码模式下 必须使用 let 声明代码
// [web,url] = ["pfinalclub","friday-go.icu"];
let [web,url] = ["pfinalclub","friday-go.icu"];
console.log(web,url)

// 简洁定义
let [,url2] = ["pfinalclub","friday-go.icu"];
console.log(url2)

// 使用展开语法获取多个值
let [name,...arr] = ["pfinalclub","friday-go.icu","lampxiezi@163.com"];
console.log(name,arr)

// 管理元素
let [,,email] = ["pfinalclub","friday-go.icu","lampxiezi@163.com"];
console.log(email)
// 使用 fill 填充数组
console.log(Array(4).fill("pfinal"))

// 合并 拆分

let arr1 = [1,2,3];
console.log(arr.join("-"));

// split 用于将字符串分割成数组,第二个参数是分割的字符串
console.log(arr1.join("-").split("-")); 

// concat 方法用于连接两个或多个数组 元素是值类型的肤质操作,如果是引用来兴还是指向同一对象
let array = ["pfinalclub","南丞"]
let hd = [1, 2];
let cms = [3, 4];

console.log(array.concat(hd,cms));

// copyWithin 从数组中赋值一部分到同数组中的的另一个位置

const array2 = [1, 2, 3, 4, 5];
array2.copyWithin(0, 3)
console.log(array2)


// 查找元素
// indexOf 从前向后查找元素出现的位置, 如果找不到返回 -1
let arr2 = [7, 3, 2, 8, 2, 6];
console.log(arr2.indexOf(2)); // 2 从前面查找2出现的位置
let arr3 = [7, 3, 2, 8, 2, 6];
//从第二个元素开始向后查找
console.log(arr3.indexOf(2, 3)); //4
// lastIndexOf 从后向前查找
// includes 判断数组中是否包含某个元素
console.log(arr2.includes(2)); // true
// find 查找符合条件的第一个元素
console.log(arr2.find(element => element > 3)); // 8
// findIndex 查找符合条件的第一个元素的下标
console.log(arr2.findIndex(element => element > 3)); // 3

// 使用includes 等不能查找引用类型《因为他们的内存地址是不相等的 
const user = [{ name: "李四" }, { name: "张三" }, { name: "pfinal" }];
// find 可以方便的查找引用类型
const find = user.includes({ name: "pfinal" });
console.log(find);

const find1 = user.find((item) => item.name === "pfinal");
console.log(find1);

// findIndex 与 find 的区别是返回索引值

const findIndex = user.findIndex((item) => itemname === "pfinal");
console.log(findIndex);

// 数组排序

const arr4 = [7, 3, 2, 8, 2, 6];
console.log(arr4.reverse());