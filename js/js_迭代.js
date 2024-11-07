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
