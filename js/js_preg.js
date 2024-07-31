// js 中正则 

let pf = "990pfinalclub2024";

let match_str = pf.match(/\d/g).join('');

console.log(match_str);

// 创建正则
// 使用 // 包裹的字面量创建方式是推荐的作法，但它不能在其中使用变量
// 对象创建方式
// 当正则需要动态创建使用对象方式

let site = "http://friday-go.icu";
let web = "go";

let reg = new RegExp(web);
console.log(reg.test(site))

// 选择符 
let tel = '010-1234-5678';

console.log(tel.match(/(010|020)\-\d{4}\-\d{4}/))

// 使用 regexp 构建正则时在转义上会有些区别
let price = 12.23;
let reg1 = new RegExp('\\d+\\.\\d+');
console.log(reg1.test(price))
console.log(reg1.exec(price))


let pf1 = "990pfinalclub2024";
let reg2 = /(?<=pfinalclub)\d+/i;
console.log(pf1.match(reg2))

// 电话后思维模糊处理

let users = `
    前端电话: 12345678901
    后端电话: 98745675603
`;

let reg3 = /(?<=\d{7})\d+\s*/g;
console.log(users.match(reg3))
users = users.replace(reg3,str=>{
    return "*".repeat(4);
});
console.log(users)

// (?!exp) 零宽负向先行断言 后面不能出现 exp 指定的内容