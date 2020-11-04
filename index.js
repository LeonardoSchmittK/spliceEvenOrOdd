let items = [1, 44, 5, 76, 100, 323];
console.log(checkOddOrEven(items));

function checkOddOrEven(items) {
  for (let i = items.length - 1; i >= 0; --i) {
    items[i] += items[i] % 2 === 0 ? ": Even" : ": Odd";
  }

  return items;
}


function checkOddOrEvenBySplice(items) {
 for (let i = items.length - 1; i >= 0; --i) {
   items.splice(i,0,items%2===0 ? ": Even" : ": Odd")
 }

 return items;
}
