// as 断言的意思就是用户断定这是什么类型, 不使用系统推断的类型
function pf(arg: number) {
    return arg ? 'pfinalcub' : 2024
}

let pfi = <string>pf(1) 
 
console.log(pfi)

// const 断言  
// const 保证该字面量的严格类型  let 为通用类型比如字符串类型
// const 断言告诉编译器为表达式推断出他能推断出的最窄或最特定的类型,而不是宽泛的类型 
// - 字符串 布尔类型转换为具体值
// - 对象转换为只读属性
// - 数组转换成为只读元组

// let user =  "PFinalClub" as const;
// user = 'houdunren.com'
// console.log(user)
// let userf: 'pfinalcub' = 'pfinalcub'
// userf = 'PFinalClub'
// console.log(userf)

// 对象转换为只读属性

let userPF = {
    name: 'PFinalClub',
    age: 18
} as const
// userPF.name = ''
console.log(userPF.age)