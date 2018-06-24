/**
 * 2018/1/30 write by luyaj
 * @param {矩阵} matrix 
 * @param {行} rows 
 * @param {列} cols 
 * @param {最终路径} path 
 * 面试题12：请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
 * 路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
 * 如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。 
 * 例如 a b c e s f c s a d e e 矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，
 * 因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。
 */

 /**
  * 回溯法 递归 路径看成栈
  */

function hasPath(matrix, rows, cols, path) {
  var visited = [];
  for (var i = 0; i < cols * rows; i++) {
    visited[i] = false; // 标志路径是否进入了每个格子
  }

  var pathLen = 0; // 路径长度为0
  try {
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
        if (core(i, j)) {
            return true;
          }
        }
      }
    } finally {
      visited.length = 0;
    }
    return false;

    function core(row, col) {
      if (path.length == pathLen) {
        return true;
      }
      var hasPath = false;
      // 当矩阵中坐标为(row,col)的格子和路径字符串中下表为pathLen的字符一样时，
      // 从4个相邻格子中去定位路径字符串中下标为pathLen+1的字符
      if (row >= 0 && col>=0 && col < cols && row < rows && col < cols && matrix[row * cols + col] === path[pathLen] && !visited[row * cols + col]) {
        pathLen++;   
        visited[row * cols + col] = true;
        hasPath = core(row - 1, col) + core(row, col - 1) + core(row + 1, col) + core(row, col + 1);
        // 如果没有匹配到字符串中下标为pathLen+1的字符，表明定位不正确，需要回到前一个字符pathLen-1，然后重新定位
        if (!hasPath) {
          pathLen--;
          visited[row * cols + col] = false;
        }
      }
      return hasPath;
    }
  }