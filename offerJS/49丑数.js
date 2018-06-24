/**
 * 2018/3/5 write by luyaj
 * @param { 第N个丑数 } index 
 * 面试题49：把只包含因子2、3和5的数称作丑数（Ugly Number）。
 * 例如6、8都是丑数，但14不是，因为它包含因子7。 
 * 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
 */

function GetUglyNumber_Solution(index) {
  if (index == 0) return 0;
  var uglyNumber = [1];  // 放置丑数的数组
  var factor2 = 0, factor3 = 0, factor5 = 0;
  for (var i = 1; i < index; i++) {
    // 下一个丑数肯定是上一个丑数乘以2,3或者是5所得的结果，所以下一个丑数是乘以2,3或者5之后最小的那个数。
    uglyNumber[i] = Math.min(uglyNumber[factor2] * 2, uglyNumber[factor3] * 3, uglyNumber[factor5] * 5);
    if (uglyNumber[i] == uglyNumber[factor2] * 2) factor2++;
    if (uglyNumber[i] == uglyNumber[factor3] * 3) factor3++;
    if (uglyNumber[i] == uglyNumber[factor5] * 5) factor5++;
  }
  return uglyNumber[index - 1];
}