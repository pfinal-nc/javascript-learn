// Promise 是异步编程的一种解决方案, 简单说就是一个容器, 里面保存着某个未来才会结束的事件(通常是一个异步操作)的结果.
// Promise是一个对象, 从它可以获取异步操作的消息,Promise提供统一的API,各种异步操作都可以用同样的方法进行处理、

/**
 *   Promise对象有以下两个特点
 *   1. 对象的状态不受外界影响, promise 对象代表一个异步操作, 有三种状态: pending(进行中),fulfilled（已成功）和rejected（已失败）. 只有异步操作的结果. 可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。
 *   2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。
 *   3. 注意，为了行文方便，本章后面的resolved统一只指fulfilled状态，不包含rejected状态。
 *   4. 有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。
 *   5. Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
 */

let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
});

promise.then(function() {
    console.log('Resolved.');
});

console.log('Hi!');

// 上面的代码中, Promise 新建后立即执行, 然后 then方法指定回调函数,将在当前脚本所有同步啥任务才会执行,所有 resolved 最后输出


function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        const image = new Image();
        image.onload = function() {
            resolve(image);
        };
        image.onerror = function() {
            reject(new Error('Could not load image at ' + url));
        };
        image.src = url;
    });
}

// 代码中, 使用 promise 包装了一个图片加载的异步操作, 如果加载成功, 就调用 resolve 方法, 否则就调用 reject 方法

const getJson = function(url) {
    const promise = new Promise(function(resolve, reject){
        const handler = function() {
            if (this.readyState !== 4) {
              return;
            }
            if (this.status === 200) {
              resolve(this.response);
            } else {
              reject(new Error(this.statusText));
            }
          };
          const client = new XMLHttpRequest();
          client.open("GET", url);
          client.onreadystatechange = handler;
          client.responseType = "json";
          client.setRequestHeader("Accept", "application/json");
          client.send();
      
    });
    return promise;
}

// getJson("/posts.json").then(function(json) {
//     console.log('Contents: ' + json);
//   }, function(error) {
//     console.error('出错了', error);
// });

// 上面代码中 getJson 是对 XMLHtppRequest 对象封装 用于发出一个针对JSON 数据的 HTTP 请求, 并且返回一个 Promise对象,resolve函数和reject函数调用时，都带有参数

// 如果 resolve函数和reject函数有参数时候, 他们的参数会被传递给回调函数,

const p1 = new Promise(function(resolve, reject){
    setTimeout(()=> reject(new Error('fail')), 3000)
});

const p2 = new Promise(function(resolve, reject){
    setTimeout(()=> resolve(p1), 1000)
})

// 这时候 p1 的状态就会传递给p2, 也就是说  p1 的状态决定了p2的状态， 如果p1的状态是 peding, 那么p2的回调函数就会等待p1的状态改变; 

p2.then(result => console.log(result)).catch(error=>console.log(error));

// 上面代码中, p1 是一个 promise 3秒后变为 rejected.p2的状态在 1 秒之后改变，resolve方法返回的是p1。由于p2返回的是另一个 Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。所以，后面的then语句都变成针对后者（p1）。又过了 2 秒，p1变为rejected，导致触发catch方法指定的回调函数。


// Promise.prototype.then()  
// then 返回的是一个新的 Promise实例(不是原来那个Promise实例),因此可以采用链式写法.即then方法后面再调用另一个then方法,采用链式 then 可以指定一组按照次序调用的回调函数。这时, 前一个回调函数,有可能返回的还是一个Promise对象
// 这时后一个回调函数,就会等待该 Promise对象的状态发生变化,才会被调用

// getJson('./post/1.json').then(function(post){
//     return getJson(post.commentURL);
// }).then(function(comments){
//     console.log("resolved: ", comments);
// }).then(function(error) {
//     console.log("rejected: ", err);
// });

// //上面代码中，第一个then方法指定的回调函数，返回的是另一个Promise对象。这时，第二个then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。如果变为resolved，就调用第一个回调函数，如果状态变为rejected，就调用第二个回调函数。
// // 如果采用箭头函数 ,上面的代码可以写的更简洁
// getJson('./post/1.json').then(
//     post => getJson(post.commentURL)
// ).then(
//     comments => console.log("resolved: ", comments),
//     err => console.log("rejected: ", err)
// )


/**
 *  Promise.prototype.catch()
 */

// Promise.prototype.catch() 方法是 .then(null,rejection) 或 .then(undefined, rejection) 的别名, 用于指定发生错误时的回调函数

// getJson('/posts.json').then(function(posts) {}).catch(error => console.log(err));
// getJSON()方法返回一个 Promise 对象，如果该对象状态变为resolved，则会调用then()方法指定的回调函数；如果异步操作抛出错误，状态就会变为rejected，就会调用catch()方法指定的回调函数，处理这个错误。另外，then()方法指定的回调函数，如果运行中抛出错误，也会被catch()方法捕获。


// const promise_t = new Promise(function(resolve, reject) {
//     throw new Error('test');
// });
// promise_t.catch(error=>console.log(error));

// 如果 Promise 状态已经变成resolved，再抛出错误是无效的。
const promise_t = new Promise(function(resolve, reject) {
    resolve('ok');
    throw new Error('test');
})
promise_t.then(function(value) { console.log(value) }).catch(function(error) { console.log(error) });
//上面代码中，Promise 在resolve语句后面，再抛出错误，不会被捕获，等于没有抛出。因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了

// Promise 对象的错误具有冒泡性质 会一直向后传递, 直到被捕捉为止，也就是说, 错误总是会被下一个 catch 语句捕获


/**
 * 
 *  Promise.prototype.finally()
 */
// finally()方法用于指定不管 Promise 对象最后状态如何，都会执行的操作
// promise.then(result => {···})
// .catch(error => {···})
// .finally(() => {···});

// Promise.all()
// Promise.all() 方法用于将多个 Promise 实例, 包装成一个新的 Promise 实例

// const p = Promise.all([p1, p2, p3]);
// 上面代码中, Promise.all() 方法接受一个数组作为参数, p1,p2,p3 都是promise实例. 如果不是, 就会先调用 Promise.resolve 方法, 将参数转为 Promise 实例, 再进一步处理.
// 另外, promise.all() 方法的参数可以不是数组,但必须具有 iterator 接口, 且返回的每个成员都是 promise 实例
// p 的状态 由 p1,p2,p3 决定, 分成两种情况
// 1) 只有p1,p2,p3的状态都变成 fuifilled,p的状态才会变成 fulfilled，此时p1,p2,p3的返回值组成一个数组, 传递给p的回调函数.
// 2)  只要p1,p2,p3之中有一个被 rejected, p的状态就变成 rejected 此时第一个被 reject的实例的返回值, 会传递给 p 的回调函数.

// 下面是一个具体的例子:
// 生成一个具体的例子:
const promise_d = [2,3,5,7,11,13].map(function(id) {
    return getJson('/post'+id+'.json');
});

Promise.all(promise_d).then(function(posts) {
    
}).catch(function(reason) {
    
});
// 上面代码中, promises 是包含 6 个Promise 实例的数组, 只有这 6 个实例的状态都变成 




