/**
 * 2018/2/9 write by luyaj
 * @param { 头节点 } head 
 * @param { 第k个节点 } k 
 * 面试题22：输入一个链表，输出该链表中倒数第k个结点。
 */

// 代码的鲁棒性:指程序能够判断输入的是否合乎规范要求，并对不符合要求的输入予以合理的处理。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
  // 判断 1如果输入的head是空指针 2输入的参数k<=0 都返回为空
  if (!head || k <= 0) {
    return null;
  }
  /** 定义两个指针
   * 第一个指针从链表的头指针开始遍历k-1步，第二个指针不动
   * 从第k步开始，第二个指针也开始从链表的头指针开始遍历
   * 两个指针的距离保持在k-1，所以在第一个指针到达链表的尾节点时，
   * 第二个指针刚好指向倒数第k个节点。
   */
  var prev = head;
  var tail = head;
  for (var index = 0; index < k - 1; index++) {
    if (tail.next != null) {
      tail = tail.next;
    } else {
      return null;
    }
  }
  while (tail.next != null) {
    prev = prev.next;
    tail = tail.next;
  }
  return prev;
}