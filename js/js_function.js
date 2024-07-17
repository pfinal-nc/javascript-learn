let pf = new Function("title","console.log(title)");
pf("PFinalClub")


// 在 JS 中函数也是对象函数是Function类的创建的实例

console.log(pf instanceof Function)

// 使用 let/const 定义函数 不会 压入 window 中
// let pfi = function(title){

// 匿名函数
// 函数是对象所以可以通过赋值来指向到函数对象的指针,当然指针也可以传递给其他变量,注意后面要以;
// 标准声明优先级高于 赋值声明

// 立即执行
// 可以用来定义私有作用域，函数内部可以访问外部作用域的变量

// (function() {
//     var title = "PFinalClub";
// })();
// console.log(title)

// {
//     let web = "pfinalclub";
// }
// console.log(web)

// 函数提升
// 函数也会提升到前面 优先级 var 变量提高


function star(row = 5) {
    if (row === 0) return ""
    console.log("*".repeat(row));
    star(--row)
}

star(10)


function show(title) {
    console.log(title+this.name);
}

let lisi ={
    name:"lisi"
}

show.call(lisi,"hello ")