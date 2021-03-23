# Give a write up on Difference between copy by value and copy by reference.

When a variable is passed as a parameter to a function, if any changes are made to the parameter, the variable will remain unaffected. This type of calling is said to be
“call by value” and this is applicable for all primitive data type (string, number, bigint, boolean, undefined) variables. Whereas, when the address of the variable is passed as
a parameter to a function instead of value, any changes made to the parameter will be reflected in the variable too and this type of calling is said to be “call by reference” and
this is applicable for all composite data type (object, array, function) variables.

Objects are assigned and copied by reference. In other words, a variable will not store the “object value”, but a “reference” (location address in memory) for the value.
So, copying such a variable or passing it as a function argument copies that reference, not the object. This is because the changes to the object are reflected outside of the
function. In addition, when you pass an object into a function, the function cannot change the reference variable to reference another object.
