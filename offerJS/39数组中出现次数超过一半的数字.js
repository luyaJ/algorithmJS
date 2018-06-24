/**
 * 2018/2/19 write by luyaj
 * 面试题39：数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
 * 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。
 * 如果不存在则输出0。
 */
function MoreThanHalfNum_Solution(numbers) {
  if (!numbers || numbers.length === 0) {
    return 0;
  }
  var arr = [];
  var len = numbers.length;
  numbers.map(function (num) {
    if (arr[num]) {
      arr[num]++;
    } else {
      arr[num] = 1;
    }
  })
  for (var i in arr) {
    if (arr[i] > Math.floor(len / 2))
      return i;
  }
  return 0;
}