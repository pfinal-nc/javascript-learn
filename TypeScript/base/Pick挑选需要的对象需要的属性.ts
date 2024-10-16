type Obj = {
    name: string;
    age: number;
    weight: number;
}

// 只需要 age, weight属性
type Obj2=Pick<Obj, 'age' | 'weight'>

let obj2:Obj2 = {
    // name: '张三',
    age: 18,
    weight: 60
}

console.log(obj2);