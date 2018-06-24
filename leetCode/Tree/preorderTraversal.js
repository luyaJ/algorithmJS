/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal = function (root) {
  var result = [];
  preorder(root);
  return result;

  function preorder(node) {
    if (node && node.val !== undefined) {
      result.push(node.val);
      if (node.left !== null) {
        preorder(node.left);
      }
      if (node.right !== null) {
        preorder(node.right);
      }
    }
  }
};