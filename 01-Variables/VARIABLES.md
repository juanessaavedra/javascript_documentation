# JavaScript Documentation
Back to home: [<< Index ](../README.md)

## Variables

Variables store data that can be set, updated, and retrieved whenever necessary. Values that are assigned to a variable belong to a type. In JavaScript, the available types are number, string, boolean, function, and object. We also have undefined and null, along with arrays, dates, and regular expressions.
Although JavaScript has different available variable types, it is not a strongly typed language such as C/C++, C#, and Java. In strongly typed languages, we need to declare the type of the variable along with its declaration (for example, inJava,todeclareanintegervariable,weuseint num = 1;).InJavaScript,weonly need to use the keyword var, and we do not need to declare the variable type. For this reason, JavaScript is not a strongly typed language. However, there are discussions and a specification in draft mode for optional static typing (https://gi thub.com/dslomov/typed-objects-es7) that can become part of the JavaScript specification (ECMAScript) in the future. We can also use TypeScript in case we want to type our variables when working with JavaScript. We will learn more about ECMAScript and TypeScript later in this chapter.
The following is an example of how to use variables in JavaScript:

```js
var num = 1; // {1}
   num = 3; // {2}
   var price = 1.5; // {3}
   var myName = 'Packt'; // {4}
   var trueValue = true; // {5}
   var nullVar = null; // {6}
   var und; // {7}
```

- In line {1}, we have an example of how to declare a variable in JavaScript (we are declaring a number). Although it is not necessary to use the var keyword declaration, it is a good practice to always specify when we declare a new variable.

- In line {2}, we updated an existing variable. JavaScript is not a strongly typed language. This means you can declare a variable, initialize it with a number, and then update it with a string or any other datatype. Assigning a value to a variable that is different from its original type is also not a good practice.

- In line {3}, we also declared a number, but this time it is a decimal floating point. In line {4}, we declared a string; in line {5}, we declared a boolean. In line {6}, we declared a null value, and in line {7}, we declared an undefined variable. A null value means no value, and undefined means a variable that has been declared but not yet assigned a value.

If we want to see the value of each variable we declared, we can use console.log to do so, as listed in the following code snippet:

```js
   console.log('num: ' + num);
   console.log('myName: ' + myName);
   console.log('trueValue: ' + trueValue);
   console.log('price: ' + price);
   console.log('nullVar: ' + nullVar);
   console.log('und: ' + und);
```

The console.log method also accepts more than just arguments. Instead of console.log('num: ' + num),wecanalsouseconsole.log('num: ', num).Whilethefirst option is going to concatenate the result into a single string, the second option allows us to add a description and also visualize the variable content in case it is an object.


## Const Variable












## Scope Variable:

The scope refers to where in the algorithm we can access the variable (it can also be a function when we work with function scopes). There are local and global variables.
Let's look at an example:

``js
   var myVariable = 'global';
   myOtherVariable = 'global';
   function myFunction() {
     var myVariable = 'local';
     return myVariable;
}
   function myOtherFunction() {
     myOtherVariable = 'local';
     return myOtherVariable;
}
   console.log(myVariable); //{1}
   console.log(myFunction()); //{2}
   console.log(myOtherVariable); //{3}
   console.log(myOtherFunction()); //{4}
   console.log(myOtherVariable); //{5}

``

The above code can be explained as follows:
- Line {1} will output global because we are referring to a global variable. - Line {2} will output local because we declared the myVariable variable inside the myFunction function as a local variable, so the scope will only be inside myFunction.
- Line {3} will output global because we are referencing the global variable named myOtherVariable that was initialized on the second line of the example.
- Line {4} will output local. Inside the myOtherFunction function, we referenced the myOtherVariable global variable and assigned the value local to it because we are not declaring the variable using the var keyword.

- For this reason, line {5} will output local (because we changed the value of the variable inside myOtherFunction).

You may hear that global variables in JavaScript are evil, and this is true.
Usually, the quality of JavaScript source code is measured by the number of global variables and functions (a large number is bad). So, whenever possible, try avoiding global variables.