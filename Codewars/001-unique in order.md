**Instructions**

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

**For example**
```js
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
```

**Solution**
```js
var uniqueInOrder=function(iterable) {

  if(iterable.length == 0) return [];

  var arr = [iterable[0]];
  if(typeof iterable === 'string') {
    iterable = iterable.split('');
  }

  iterable.reduce((pre, cur) => {
    if(pre != cur) arr.push(cur);
    return cur;
  })
  return arr;
}
```