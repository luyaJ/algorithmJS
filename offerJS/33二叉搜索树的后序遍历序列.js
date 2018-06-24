/**
 * 2018/2/15 write by luyaj
 * @param { 后序遍历序列 } sequence 
 * 面试题33：输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
 * 如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 * 
 * 思路：二叉查找树（Binary Search Tree），（又：二叉搜索树，二叉排序树）它或者是一棵空树，
 * 或者是具有下列性质的二叉树： 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值； 
 * 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值； 它的左、右子树也分别为二叉排序树。
 */

function VerifySquenceOfBST(sequence) {
  if (sequence.length <= 0) return;
  return testSequence(sequence, 0, sequence.length - 1)
}

function testSequence(sequence, start, end) {
  if (start >= end) {
    return true;
  }
  var i = end - 1;
  while (i >= start && sequence[i] > sequence[end]) {
    i--;
  }
  for (var j = i; j >= start; j--) {
    if (sequence[j] > sequence[end]) {
      return false;
    }
  }
  return testSequence(sequence, start, i) && testSequence(sequence, i + 1, end - 1)
}