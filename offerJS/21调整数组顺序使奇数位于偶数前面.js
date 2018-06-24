/**
 * 2018/2/9 write by luyaj
 * @param { 数组 } array 
 * 面试题21：输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半部分，
 * 并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 */

// 定义两个空数组，一个用于存储奇数，一个用于存储偶数
// 方法一：
function reOrderArray(array) {
  var odd = [];
  var even = [];
  array.forEach(function (item) {
    if ((item % 2) == 1) {
      odd.push(item);
    } else {
      even.push(item);
    }
  });
  return odd.concat(even);
}

/**
 * map() 方法按照原始数组元素顺序依次处理元素。
 * map() 不会对空数组进行检测。
 * map() 不会改变原始数组。
 */
// 方法二：
function reOrderArray(array) {
  var odd = [];
  var even = [];
  array.map(function (item) {
    item % 2 == 0 ? even.push(item) : odd.push(item);
  });
  return odd.concat(even);
}