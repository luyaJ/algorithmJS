/**
 * 2018/2/10 write by luyaj
 * @param { 根节点 } pRoot 
 * 面试题28：请实现一个函数，用来判断一颗二叉树是不是对称的。
 * 注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
 *           8
 *         ↙   ↘
 *        6     6
 *       ↙ ↘   ↙ ↘
 *       5  7  7  5
 *      
 * 思路：前序遍历:先遍历左子节点再遍历右子节点（8,6,5,7,6,7,5）
 * 我们定义一种对称的遍历算法:先遍历父节点，再遍历右子节点，最后左子节点（8,6,5,7,6,7,5）
 * 采用递归方法，先判断根节点的左子节点和右子节点是否为空，同时为空，则返回true，一个为空，则为false。
 * 同时不为空，则判断其值是否相等，然后递归判断左子节点和右子节点
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot) {
  return isSymmetricalCore(pRoot, pRoot);
}

function isSymmetricalCore(left, right) {
  if (left == null && right == null) {
    return true;
  }
  if (left == null || right == null) {
    return false;
  }
  if (left.val != right.val) {
    return false;
  }
  return isSymmetricalCore(left.left, right.right) && isSymmetricalCore(left.right, right.left);
}