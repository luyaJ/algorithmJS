/**
 * 2018/2/11 write by luyaj
 * @param { 矩阵 } matrix 
 * 面试题29：输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
 * 例如，如果输入如下矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
 * 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
 */
// 打印一圈的左上角坐标为(start,start)，右下角的坐标为(cols-start-1,rows-start-1)

function printMatrix(matrix) {
  if (matrix == null && matrix.length == 0) {
    return null;
  }
  var rows = matrix.length; // 3行
  var cols = matrix[0].length; // 4列
  var start = 0;
  var result = [];

  // 最后一圈的左上角坐标是（2,2）
  while (rows > start * 2 && cols > start * 2) {
    var endX = cols - 1 - start;
    var endY = rows - 1 - start;

    // 1.从左往右打印一行(要求：至少有一行) 
    for (var i = start; i <= endX; i++) {
      result.push(matrix[start][i]);
    }

    // 2.从上往下打印一列(要求：终止行号大于起始行号)
    if (endY > start) {
      for (var i = start + 1; i <= endY; i++) {
        result.push(matrix[i][endX]);
      }
    }

    // 3.从右往左打印一行(要求：终止行号大于起始行号 && 终止列号大于起始列号) 
    if (endY > start && endX > start) {
      for (var i = endX - 1; i >= start; i--) {
        result.push(matrix[endY][i]);
      }
    }
    
    // 4.从下往上打印一列(要求：三行两列)
    if (endX > start && endY - 1 > start) {
      for (var i = endY - 1; i >= start + 1; i--) {
        result.push(matrix[i][start]);
      }
    }
    start++;
  }
  return result;
}