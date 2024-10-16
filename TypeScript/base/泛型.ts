function getFirst<T>(arr: T[]): T | undefined {
  return arr[0]
}

console.log(getFirst([1, 2, 3]))

function comb<T>(a: T[], b: T[]): T[] {
  return a.concat(b)
}

console.log(comb<number | string>([1, 2, 3], ['a', 'b']))

function map<T, U>(arr: T[], func: (item: T, index: number, array: T[]) => U): U[] {
  return arr.map(func)
}

console.log(map(['1', '2', '4'], (item) => parseInt(item)))

// 变量泛型
let myFavoriteNumber: <T>(arg: T) => T

// 变量泛型写法二
let myFavoriteNumber2: { <U>(arg: U): U }

// 接口的泛型写法
interface KeyPair<T, U> {
  key: T
  value: U
}

interface Box<Type> {
  content: Type;
}

let box: Box<string> = {
  content: 'hello PFinalClub'
}

console.log(box.content)

interface Comparator<T> {
    compare(value:T): number;
}

class Rectangle implements Comparator<Rectangle> {
    compare(value: Rectangle): number {
        return 0;
    }
}

// 调用 Rectangle 的 compare 方法
console.log(new Rectangle().compare(new Rectangle()));


// 泛型接口第二种写法
interface FN{
  <Type>(arg: Type): Type
}

function test<Type>(arg: Type): Type {
  return arg;
}

let myTest: FN = test;
console.log(myTest(()=>{return 123})())


// 类的泛型写法
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

// 类型别名的泛型写法

type Nullable<T> = T | null|undefined;