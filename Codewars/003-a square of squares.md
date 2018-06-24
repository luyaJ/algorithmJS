**Instructions**

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

**Task**

Given an integral number, determine if it's a square number:
> In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

**Examples**

```js
is_square (-1) # => false
is_square   0 # => true
is_square   3 # => false
is_square   4 # => true
is_square  25 # => true
is_square  26 # => false
```

**Solution**

```js
var isSquare = function(n){
  if(n<0) return false;
  if(Math.sqrt(n) % 1 == 0) {
    return true;
  } 
  return false;
}
```