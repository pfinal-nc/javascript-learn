// 无组类型, 严格约束数组成员的数量 类型 位置
let IdAndName: [number, string, number?];

// IdAndName = ['pfinal']; 报错
IdAndName = [1, 'pfinal', 10];

console.log(IdAndName);

IdAndName = [1, 'pfinal']; // 报错

console.log(IdAndName);

type LabelKey = 'a' | 'b' | 'time';
// 排除掉联合类型中的值
type LabelKeyPick=Exclude<LabelKey, 'a'>;

let value1: LabelKeyPick = 'b';

console.log(value1);

let xx: [number, number] = [1, 2];
console.log(xx[0]);

type NamedNums = [
    string,
    ...number[]
]

let nums: NamedNums = ['pfinal', 1, 2, 3];

console.log(nums);
