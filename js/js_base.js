var pf = {
    name:"pfinal",
    birth:1990,
    gender:"M",
}
delete pf.gender; //删除pf对象的gender属性
console.log(pf);

// Map 是一组键值对的结构, 具有极快的查找速度
var m = new Map([['pfinal',123],['club',75]]);
var s = new Set();
console.log(m)

var c = new Map(); // 空Map
m.set('edition',6); // 添加新的key-value
c.set(pf,6);
console.log(c.get(pf)); // 获取一个key的value

// iterable
var a = ['a1','a2','b1','b2'];
for (var x of a){
    console.log(x);
}

// 遍历集合
var t = new Set(['a','b','c']);
for (var x of t){
    console.log(x);
}

// 遍历Map
var m = new Map([['a',1],['b',2],['c',3]]);
for (var x of m){
    console.log(x[0]+':'+x[1]);
}

// 使用更好的方式是直接使用 iterable内置的 forEach 方法,
var A = ['A','B','C','D']
A.forEach(function(element,index,array){
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element+':'+index);
})
// 注意 forEach() 方法 ES5.1标准引入的, 需要测试浏览器是否支持
var B = new Map([[1,'x'],[2,'y'],[3,'z']])
B.forEach(function(value,key,map){
    console.log(key+':'+value);
})

// 高阶函数 map

function pow(x) {
    return x*x;
}
var arr = [1,2,3,4,5,6,7,8,9];
var results = arr.map(pow);
console.log(results);

// reduce 再看reduce的用法, Array的reduce() 把一个函数作用在这个 Array的[x1,x2,x3...]上,这个函数必须接收两个参数, reduce() 把结果继续喝序列的下一个元素做积累计算
var arr = [1,2,3,4,5];
console.log(arr.reduce(function(x,y){
    return x+y;
}));