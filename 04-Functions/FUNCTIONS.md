# JavaScript Documentation
Back to home: [<< Index ](../README.md)

## Functions

Functions are very important when working with JavaScript. We will also use functions in our examples.
The following code demonstrates the basic syntax of a function. It does not have arguments or the return statement:

```js
    function sayHello() {
     console.log('Hello!');
}
```

To execute this code, we simply use the following statement:
```js
sayHello();
```

We can also pass arguments to a function. Arguments are variables with which a function is supposed to do something. The following code demonstrates how to use arguments with functions:

```js
   function output(text) {
     console.log(text);
}
```

To use this function, we can use the following code:
```js
    output('Hello!');
```

You can use as many arguments as you like, as follows:

```js
    output('Hello!', 'Other text');
```

In this case, only the first argument is used by the function, and the second one is ignored. A function can also return a value, as follows:

```js
    function sum(num1, num2) {
     return num1 + num2;
}
```

This function calculates the sum of two given numbers and returns its result. We can use it as follows:

```js
    var result = sum(1, 2);
    output(result); // outputs 3
```

















