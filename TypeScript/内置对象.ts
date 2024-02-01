let boolean:Boolean = new Boolean(1);
console.log(boolean)

let error:Error = new Error('Error occurred');
console.log(error)
let date:Date = new Date();
console.log(date.toLocaleString())
let regExp:RegExp = /[a-z]/;

//e被推断成了MouseEvent，而该对象没有的属性就会报错；
// document.addEventListener("click",(e)=>{
//     console.log(e.altKey); //正常的
//     //console.log(e.targetCurrent); //会报错，应该内置MouseEvent对象,没有这个属性
// })