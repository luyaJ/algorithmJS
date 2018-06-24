/**
 * 2018/2/20 write by luyaj 
 * 面试题42：在古老的一维模式识别中,常常需要计算连续子向量的最大和,当向量全为正数的时候,问题很好解决。
 * 但是,如果向量中包含负数,是否应该包含某个负数,并期望旁边的正数会弥补它呢？
 * 例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。
 * (子向量的长度至少是1)
 */

/** 思路：
 *   操作  累加的子数组和(tempSum)  最大子数组和(sum)
 *    6         6                     6
 *   -3         3                     6
 *   -2         1                     6
 *    7         8                     8
 *   -15        -7                    8
 *    1         -6                    8
 *    2         -4                    8
 *    2         -2                    8
 */

/** 思路：数组{1, -2, 3, 10, -4, 7, 2, -5}
 *   操作  累加的子数组和(tempSum)  最大子数组和(sum)
 *    1           1                     1
 *   -2           -1                    1
 * 抛弃前面的-1    3                     3
 *   10           13                    13
 *   -4           9                     13
 *    7           16                    16
 *    2           18                    18
 *   -5           13                    18
 */

function FindGreatestSumOfSubArray(array) {
  if (array.length == 0) {
    return;
  }
  var sum = array[0];
  tempSum = array[0];
  for (var i = 1; i < array.length; i++) {
    // 当累加的子数组和为负数了，就抛弃他，从下一个正数重新开始
    tempSum = tempSum < 0 ? array[i] : tempSum + array[i]; 
    sum = tempSum > sum ? tempSum : sum;
  }
  return sum;
}

