interface Eg1 {
    name:string
    readonly age:number,
}

// T1类型实例则是 name | age
type T1 = keyof Eg1

class Eg2 {
    private name: string;
    public readonly age: number;
    protected home: string
}

// T2实则被约束为 age
// 而name和home不是公有属性，所以不能被keyof获取到
type T2 = keyof Eg2

type V1 = Eg1['name']