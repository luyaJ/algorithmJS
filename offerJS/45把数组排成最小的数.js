/**
 * 2018/2/23 write by luyaj
 * @param { 数组 } numbers 
 * 面试题45：输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 * 例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
 * 思路：对数组中的数字进行排序，两个数字a，b可以拼接成ab或ba。(332,323)
 * 如果 ab > ba , 则打印出ba , 则b在a的前面
 * 如果 ab < ba , 则打印出ab , 则a在b的前面
 * 如果 ab = ba , 则a = b
 * 之后再拼接数字
 */

function PrintMinNumber(numbers) {
  if (!numbers || numbers.length === 0) {
    return [];
  }
  numbers.sort(function (a, b) {
    var s1 = a + '' + b;
    var s2 = b + '' + a;
    for (var i = 0; i < s1.length; i++) {
      if (s1.charAt(i) > s2.charAt(i)) {
        return 1;
      } else if (s1.charAt(i) < s2.charAt(i)) {
        return -1;
      }
    }
    return 1;
  });
  var result = "";
  numbers.map(function (num) {
    result = result.concat(num);
  });
  return result;
}