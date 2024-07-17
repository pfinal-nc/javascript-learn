/**
    Map 是一组键值对的结构《 用于解决以往不能用对象作为键的问题
    
 */

// 声明定义

let f = new Map([
    ['pfinalclub', 'PFinal社区'],
    ['pfinalcms', '开源']
]);

console.log(f.get('pfinalclub'));

// 使用set 添加元素 支持链式操作
let map = new Map();
let object = { name: 'pfinal' };
map.set(object, 'pfinal').set('pfinal', 'pfinal').set('pfinal', 'pfinal');
console.log(map.get(object));
console.log(map.entries());

// 使用构造函数 new Map 创建的原理如下:

const pf = new Map();
const arr = [['pfinalclub', 'PFinal社区'],['pfinalcms', '开源']];
arr.forEach(([key, value]) => pf.set(key, value));
console.log(pf);

// 对于键是对象的 map, 键保存的是内存地址, 值相同但内存地址不同视为两个键

let arr1 = ["pfinal社区"];
const map1 = new Map();
map1.set(arr1, 'pfinal');
console.log(map1.get(arr1));
console.log(map1.get(["pfinal社区"]));

// 获取数量
// 获取数据数量

console.log(map.size);
console.log(map1.size);

// 元素检测
console.log(map.has('pfinal'));
console.log(map1.has('pfinal'));

// 读取元素

let map2 = new Map();
let obj = {
    name: 'pfinal'
}

map2.set(obj, 'pfinal').set('pfinal', 'pfinal');
console.log(map2.get(obj));

// 删除元素
map2.delete(obj);
console.log(map2.get(obj));

map2.clear();
console.log(map2.get(obj));

// 遍历数据
console.log(pf.keys());
console.log(pf.values());
console.log(pf.entries());


// weakmap 对象是一组键/值对的集
// 键名必须是对象
// weamap 对键名是弱引用的,键值是正常引用
/**
 垃圾回收不考虑WeaMap的键名，不会改变引用计数器，键在其他地方不被引用时即删除
因为WeakMap 是弱引用，由于其他地方操作成员可能会不存在，所以不可以进行forEach( )遍历等操作
 */

let map4 = new WeakMap();
let hd = {};
map4.set(hd,"pfinalclub");
hd = null;
console.log(map4);

let map5 = new Map();
let pf1 = {}
map5.set(pf1,"pfinalclub");
pf1 = null;
console.log(map5);