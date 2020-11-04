# Checking the odd/even numbers

```
function checkOddOrEvenBySplice(items) {
 for (let i = items.length - 1; i >= 0; --i) {
   items.splice(i,0,items%2===0 ? ": Even" : ": Odd")
 }

 return items;
}
```