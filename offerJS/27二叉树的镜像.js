/**
 * 2018/2/10 write by luyaj
 * @param { 根节点 } root 
 * 面试题27：操作给定的二叉树，将其变换为源二叉树的镜像
 * 二叉树的镜像定义：源二叉树 
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root) {
    if (!root) {
        return null;
    }
    // 交换左右节点
    var tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    // 递归
    Mirror(root.left);
    Mirror(root.right);
}