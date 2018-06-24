/**
 * 2018/2/19 write by luyaj
 * @param { 输入的数组 } input 
 * @param { 最小的k个数 } k 
 * 面试题40：输入n个整数，找出其中最小的K个数。
 * 例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
 */

function GetLeastNumbers_Solution(input, k) {
  if (!input || input.length < k) {
    return [];
  }
  input.sort(function (a, b) {
    return a - b;
  })
  return input.slice(0, k);
}