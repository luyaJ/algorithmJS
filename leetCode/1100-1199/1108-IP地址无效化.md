给你一个有效的 `IPv4` 地址 `address`，返回这个 `IP` 地址的无效化版本。

所谓无效化 IP 地址，其实就是用 `"[.]"` 代替了每个 `"."`。

**示例 1：**

```bash
输入：address = "1.1.1.1"
输出："1[.]1[.]1[.]1"
```

**示例 2：**

```bash
输入：address = "255.100.50.0"
输出："255[.]100[.]50[.]0"
```

**提示：**

* 给出的 address 是一个有效的 IPv4 地址

链接：https://leetcode-cn.com/problems/defanging-an-ip-address

**Solution:**

```js
/**
 * @param {string} address
 * @return {string}
 * 执行用时: 64 ms, 在所有javascript提交中击败了82.97%的用户
 * 内存消耗: 33.7 MB, 在所有javascript提交中击败了100.00%的用户
 */
var defangIPaddr = function(address) {
  return address.split(".").join("[.]");
};
```