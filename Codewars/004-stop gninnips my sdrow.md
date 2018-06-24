**Instructions**

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

**Examples**

```js
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
```

**Solution**

```js
function spinWords(str) {
  str = str.split(' ');
  for(var i = 0, word; word = str[i]; i++) {
    if(word.length >= 5) {
      str[i] = word.split('').reverse().join('');
    }
  }
  return str.join(' ');
}
```

[codeWars--Stop gninnipS My sdroW!](https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript)