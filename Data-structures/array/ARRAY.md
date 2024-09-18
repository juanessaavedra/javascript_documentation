# JavaScript Documentation
Back to home: [<< Index ](../README.md)

## Array


An array is the simplest memory data structure. For this reason, all programming languages have a built-in array datatype. JavaScript also supports arrays natively, even though its first version was released without array support. In this chapter, we will dive into the array data structure and its capabilities.
An array stores values that are all of the same datatype sequentially. Although JavaScript allows us to create arrays with values from different datatypes, we will follow best practices and assume that we cannot do this (most languages do not have this capability).

### Why should we use arrays?
Let's consider that we need to store the average temperature of each month of the year for the city that we live in. We could use something similar to the following to store this information:

```js
   const averageTempJan = 31.9;
   const averageTempFeb = 35.3;
   const averageTempMar = 42.4;
   const averageTempApr = 52;
   const averageTempMay = 60.8;
```

However, this is not the best approach. If we store the temperature for only one year, we can manage 12 variables. However, what if we need to store the average temperature for more than one year? Fortunately, this is why arrays were created, and we can easily represent the same information mentioned earlier as follows:

```js
   const averageTemp = [];
   averageTemp[0] = 31.9;
   averageTemp[1] = 35.3;
   averageTemp[2] = 42.4;
   averageTemp[3] = 52;
   averageTemp[4] = 60.8;
```

### Creating and initializing arrays

Declaring, creating, and initializing an array in JavaScript is really simple, as the following shows:

```js
let daysOfWeek = new Array(); // {1}
   daysOfWeek = new Array(7); // {2}
   daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'); // {3}
```
We can simply declare and instantiate a new array using the keyword new (line {1}). Also, using the keyword new, we can create a new array specifying the length of the array (line {2}). A third option would be passing the array elements directly to its constructor (line {3}).

However, using the new keyword is not considered best practice. If we want to create an array in JavaScript, we can assign empty brackets ([]), as in the following example:

```js
let daysOfWeek = [];
```

We can also initialize the array with some elements, as follows:

```js
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
```

If we want to know how many elements are in the array (its size), we can use the length property. The following code will give an output of 7:

```js
console.log(daysOfWeek.length);
```

### Accesing elements and iterating an array

To access a specific position of the array, we can also use brackets, passing the index of the position we would like to access. For example, let's say we want to output all the elements from the daysOfWeek array. To do so, we need to loop the array and print the elements, starting from index 0 as follows:

```js
   for (let i = 0; i < daysOfWeek.length; i++) {
     console.log(daysOfWeek[i]);
    }
```

Let's take a look at another example. Let's say that we want to find out the first 20 numbers of the Fibonacci sequence. The first two numbers of the Fibonacci sequence are 1 and 2, and each subsequent number is the sum of the previous two numbers:

```js
 const fibonacci = []; // {1}
   fibonacci[1] = 1; // {2}
   fibonacci[2] = 1; // {3}
   for (let i = 3; i < 20; i++) {
     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // //{4}
}
   for (let i = 1; i < fibonacci.length; i++) { // {5}
     console.log(fibonacci[i]); // {6}
}
```

The following is the explanation for the preceding code:

1. In line{1},we declared and created an array.
2. In lines {2} and {3}, we assigned the first two numbers of the Fibonacci
sequence to the second and third positions of the array (in JavaScript, the first position of the array is always referenced by 0 (zero), and as there is no zero in the Fibonacci sequence, we will skip it).
3. Then,all we need to do is create the third to the 20th number of the sequence (as we know the first two numbers already). To do so, we can use a loop and assign the sum of the previous two positions of the array to the current position (line {4}, starting from index 3 of the array to the 19th index).
4. Then,totakealookattheoutput(line{6}),wejustneedtoloopthearray
from its first position to its length (line {5}).

If you would like to generate more than 20 numbers of the Fibonacci sequence, just change the number 20 to whatever number you like

### Adding elements








