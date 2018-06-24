/**
 * 2018/2/12 write by luyaj
 * @param { 根节点 } root 
 * 面试题31：从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 * 思路：采用队列方法，先将根节点放入队列中，然后打印，接着将左右节点加入队列中
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
  if (!root) {
    return [];
  }
  var queue = [];
  queue.push(root);
  var result = [];
  while (queue.length) {
    var tmp = queue.shift();  // 将队列第一个元素删除
    result.push(tmp.val);  // 将上一步删除的元素 压入数组result中
    if (tmp.left) {
      queue.push(tmp.left);
    }
    if (tmp.right) {
      queue.push(tmp.right);
    }
  }
  return result;
}

