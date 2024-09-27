function pow(x,n) {
    let result = 1;
    // 在循环中 用 x 乘以 result n 次 
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

console.log(pow(2,3));


// 递归思路

function pow(x,n) {
    // if (n == 1) {
    //     return x;
    // } else {
    //     return x * pow(x, n - 1);
    // }
    return n == 1? x : x * pow(x, n - 1);
}

console.log(pow(2,3));