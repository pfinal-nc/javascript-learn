function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

// let sequence = generateSequence();
// let one = sequence.next().value;
// let two = sequence.next().value;
// let three = sequence.next();
// console.log(one, two, three);

let sequence = [0,...generateSequence()];
console.log(sequence);


// 使用 generator 进行迭代

let range = {
    form :1,
    to : 5,
    // for ..of rang 在一开始 就调用一次这个方法
    [Symbol.iterator]() {
        return {
            current: this.form,
            last: this.to,
            next() {
                if(this.current <= this.last) {
                    return {done: false, value: this.current++};
                } else {
                    return {done: true};
                }
            }
        }
    }
}

/// 迭代整个 rang 对象 返回从 range.form 到 range.to 的数字

console.log([...range]);