// 字面是定义 string
type TrackType = 'pop' | 'rock' | 'jazz';
// let trackType: TrackType = 1;

// 字面量定义 number
type SelectId = 0 | 1;
//let selectId: SelectId = 3;
let selectId: SelectId = 1;
console.log(selectId);


// 字面量定义数组
type Arr = [1,2] | [2,3?]

// let arr: Arr = [1,1] // 类型不符
// let arr4:Arr = [1] 
let arr: Arr = [1,2]
console.log(arr)

let arr2: Arr = [2,3]
let arr3: Arr = [2]

// 字面量: 定义对象
// type Obj = {a:1,b?:2}

// let obj: Obj = {c:1} // 类型不符

type Enum = ['home',string];

// let list:Enum = ['a'] 
let list: Enum = ['home','pfinal']
console.log(list)

// 使用type 给类型设置别名， 相当于赋值

type customString = string;
let value: customString = '123'
console.log(value)