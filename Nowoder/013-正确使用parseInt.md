**题目描述**

修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例

**示例1**

> 输入<br>
> '12'<br>
> 输出<br>
> 12

**示例2**

> 输入<br>
> '12px'<br>
> 输出<br>
> 12

**代码**

需要修改的代码：
```js
function parse2Int(num) {
  return parseInt(num);
}
```

修改之后的代码：
```js
function parse2Int(num) {
  return parseInt(num, 10);
}
```