/**
 * 2018/2/11 write by luyaj
 * 面试题30：定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的min函数。
 * 思路：通过数组来实现栈的功能
 */

var stack = [];

function push(node) {
  stack.push(node);
}

function pop() {
  return stack.pop();
}

function top() {
  return stack.length > 0 ? stack[result.length - 1] : null;
}

function min() {
  if (stack.length == 0 || stack == null) {
    return null;
  }
  return Math.min.apply(null,stack);
}