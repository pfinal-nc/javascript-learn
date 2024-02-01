/**
 *  函数的重载： 允许一个函数接受不同数量或类型的参数时， 做出不同的处理
 */

function getLength(value:string): string;
function getLength(value:number): number;
function getLength(value?): void;

function getLength(value) {
  if (typeof value === 'string') {
    return `字符串的长度是：${value.length}`;
  } else if (Array.isArray(value)) {
    return `数组的长度是：${value.length}`;
  }
}

getLength(1)
getLength('a')
getLength()