/**
 * 2018/1/30 write by luyaj
 * @param {k} threshold 
 * @param {行} rows 
 * @param {列} cols 
 * 面试题13：地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，
 * 每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 
 * 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7=18。
 * 但是，它不能进入方格（35,38），因为3+5+3+8=19。请问该机器人能够达到多少个格子？
 */

function movingCount(threshold, rows, cols) {
    var visited = [];
    for (var i = 0; i < rows * cols; i++) {
        visited[i] = false;
    }
    
    var count = movingCountCore(0, 0); // 从坐标点(0,0)开始运动
    visited.length = 0;
    return count;

    // 通过检查坐标的数位 判断机器人能否进入坐标为(row，col)的方格
    function check(row, col) {
        // getDigitSum(row) + getDigitSum(col) <= threshold 即 3+5+3+7 <= 18
        // 并且这一格子还未进入过
        if (row >= 0 && col >= 0 && row < rows && col < cols && getDigitSum(row) + getDigitSum(col) <= threshold && !visited[row * cols + col]) {
            return true;
        }
        return false;
    }

    // 用来得到一个数字的数位之和 35=3+5  37=3+7
    function getDigitSum(num) {
        var sum = 0;
        while (num > 0) {
            sum += num % 10; 
            num = Math.floor(num / 10);
        }
        return sum;
    }

    // 移动的坐标
    function movingCountCore(row, col) {
        var count = 0;
        if (check(row, col)) {
            visited[row * cols + col] = true;
            count = 1 + movingCountCore(row - 1, col) + movingCountCore(row, col - 1) + movingCountCore(row + 1, col) + movingCountCore(row, col + 1)
        }
        return count;
    }
}