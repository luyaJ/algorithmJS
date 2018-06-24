/**
 * 2018/2/5 write by luyaj
 * @param { 头结点 } pHead
 * 面试题17：在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，
 * 重复的结点不保留，返回链表头指针。 
 * 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5 
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead)
{
    if(pHead == null || pHead.next == null){
        return pHead;
    }
    // 第一个指针first 的next指向头结点
    var first = {
        val: 0,
        next: pHead
    }
    // 指针head用来遍历
    var head = pHead;
    // 指针pre用来指向first
    var pre = first;
    
    // 指针不为空 指针的下一个指针也不为空
    while(head != null && head.next != null){
        // 相等的情况下
        if(head.val == head.next.val){
            // 存在下一个指针 并且值相等 (重复结点)
            while(head.next && head.next.val == head.val){
                head = head.next;
            }
            // 知道找到当前指针不等于下一个指针 将pre的next指向head
            pre.next = head.next;
        } else {
            pre.next = head;
            pre = pre.next;
        }
        head = head.next;
    }
    return first.next;
}