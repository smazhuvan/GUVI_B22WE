# How to copy by value a composite datatype (array+objects)?

In order to invoke call by value to composite data type variables we can change the memory locations, which creates a new reference link that makes the older one unaltered, which is possible by using either slice or concat method to make a copy of an array. <br>

var arr = ['one', 'two', 'three']; <br>
var arr1 = arr.slice(0); // assign copy of arr to arr1 <br>
//var arr2 = arr.concat(); // concat can also be used to copy


console.log( arr === arr1 ); // returns false <br>
// Even though the two arrays hold the same elements in the same order, they are not identical since they refer to two separate array objects. <br>
arr1[1] = 2; // modify element in arr1


// change to arr1 does not affect arr <br>
console.log( arr ); // returns ["one", "two", "three"] <br>
console.log( arr1 ); // returns ["one", 2, "three"]
