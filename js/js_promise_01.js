const setDelay = (millisecond) => {
    return new Promise((resolve, reject) => {
        if (typeof millisecond != 'number') reject(new Error('参数必须是number类型'));
      setTimeout(()=> {
        resolve(`我延迟了${millisecond}毫秒后输出的`)
      }, millisecond)
    });
}

// setDelay(1000).then((value) => {
//     console.log(value);
// }).catch((err)=>{
//     console.log(err);
// })

/**
    resolve：将异步的执行从pending(请求)变成了resolve(成功返回)，是个函数执行返回。
    reject：顾名思义“拒绝”，就是从请求变成了"失败"，是个函数可以执行返回一个结果，但我们这里
 */

// let eee=(cc)=>{
//     console.log("pfinalclub_"+cc)
//     return 123;
// };
// console.log(eee(11))
// Promise链式写法

const setDelaySecond = (seconds) => {
    return new Promise((resolve, reject) => {
        if (typeof seconds != 'number') reject(new Error('参数必须是number类型'));
      setTimeout(()=> {
        resolve(`我延迟了${seconds}秒后输出的`)
      }, seconds*1000)
    });
}

// setDelay(1000).then((result) => {
//     console.log(result);
//     console.log('进行到第一步的');
//     return setDelaySecond(3);

// }).then((result) => {
//     console.log(result);
//     console.log('进行到第二步的');
// }).catch((err)=>{console.log(err);})

// 链式写法需要注意的是
// then 链式写法的本质其实是一直往下执行返回一个新的Promise

const demo = async ()=>{
    let result = await setDelay(1000);
    console.log(result);
    console.log('进行到第一步的');
    result = await setDelaySecond(3);
    console.log(result);
    console.log('进行到第二步的');
    return result;
}

demo().then(result=>{
    console.log(result);
})

function to(promise) {
    return promise.then(data => {
        return [null,data]
    }).catch(err =>[err])
}

// (async ()=> {
//     [err, result] = await to(setDelay(1000));
//     if (err) throw new Error(err);
//     console.log(result);
//     console.log('进行到第一步的');
//     [err, result] = await to(setDelaySecond(3));
//     if (err) throw new Error(err);
//     console.log(result);
//     console.log('进行到第二步的');
// })();

function timeout(millisecond) {
    return ()=> {
      return setDelay(millisecond);
    }
  }

(async ()=>{
    arr = [timeout(2000), timeout(1000), timeout(1000)]
    for (var i=0; i < arr.length; i++) {
        result = await arr[i]();
        console.log(result);
    }
})()