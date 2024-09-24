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

Adding and removing elements from an array is not that difficult; however, it can be tricky. For the examples we will create in this section, let's consider that we have the following numbers array initialized with numbers from 0 to 9:

```js
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
```

#### Inserting an element at the end of the array

If we want to add a new element to this array (for example, the number 10), all we have to do is reference the latest free position of the array and assign a value to it:


```js
numbers[numbers.length] = 10;
```

#### Using the push method
JavaScript API also has a method called push that allows us to add new elements to the end of an array. We can add as many elements as we want as arguments to the push method:
```js
   numbers.push(11);
   numbers.push(12, 13);
```

The output of the numbers array will be the numbers from 0 to 13.


#### Inserting an element in the first position

Suppose we need to add a new element to the array (number -1) and would like to insert it in the first position, not the last one. To do so, first we need to free the first position by shifting all the elements to the right. We can loop all the elements of the array, starting from the last position (value of length will be the end of the array) and shifting the previous element (i-1) to the new position (i) to finally assign the new value we want to the first position (index 0). We can create a function to represent this logic or even add a new method directly to the Array prototype, making the insertFirstPosition method available to all array instances. The following code represents the logic described here:

```js
Array.prototype.insertFirstPosition = function(value) {
  for (let i = this.length; i > 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};

let numbers = [1, 2, 3, 4];
numbers.insertFirstPosition(-1);
console.log(numbers); // [-1, 1, 2, 3, 4]
```

#### Using the unshift method
The JavaScript Array class also has a method called unshift, which inserts the values passed in the method's arguments at the start of the array (the logic behind-the-scenes has the same behavior as the insertFirstPosition method):

```js
   numbers.unshift(-2);
   numbers.unshift(-4, -3);
```

So, using the unshift method, we can add the value -2 and then -3 and -4 to the beginning of the numbers array. The output of this array will be the numbers from -4 to 13.

### Removing elements

So far, you have learned how to add elements in the array. Let's take a look at how we can remove a value from an array.

#### Removing an element from the end of the array
To remove a value from the end of an array, we can use the pop method:
  ```js
  numbers.pop();
  ```
The output of our array will be the numbers from -4 to 12. The length of our array is 17.

#### Removing an element from the first position
To remove a value from the beginning of the array, we can use the following code:
```js
for (let i = 0; i < numbers.length; i++) {
     numbers[i] = numbers[i + 1];
}
```

- We shifted all the elements one position to the left. However, the length of the array is still the same (17), meaning we still have an extra element in our array (with an undefined value). The last time the code inside the loop was executed, i+1 was a reference to a position that does not exist. In some languages, such as Java, C/C++, or C#, the code would throw an exception, and we would have to endourloopatnumbers.length -1.

- We have only overwritten the array's original values, and we did not really remove the value (as the length of the array is still the same and we have this extra undefined element).

- To remove the value from the array, we can also create a removeFirstPosition method with the logic described in this topic. However, to really remove the element from the array, we need to create a new array and copy all values other


than undefined values from the original array to the new one and assign the new array to our array. To do so, we can also create a reIndex method as follows:

```js
Array.prototype.reIndex = function(myArray) {
     const newArray = [];
     for(let i = 0; i < myArray.length; i++ ) {
       if (myArray[i] !== undefined) {
         // console.log(myArray[i]);
         newArray.push(myArray[i]);
} }
     return newArray;
   }
   // remove first position manually and reIndex
   Array.prototype.removeFirstPosition = function() {
     for (let i = 0; i < this.length; i++) {
       this[i] = this[i + 1];
}
     return this.reIndex(this);
   };

   numbers = numbers.removeFirstPosition();
```

#### Using the shift method
To remove an element from the beginning of the array, we can use the shift method, as follows:
```js
numbers.shift();
```
If we consider that our array has the value -4 to 12 and a length of 17 after we execute the previous code, the array will contain the values -3 to 12 and have a length of 16.

### Adding and removing elements from a specific position


So far, we have learned how to add elements at the end and at the beginning of an array, and we have also learned how to remove elements from the beginning and end of an array. What if we also want to add or remove elements from any position in our array? How can we do this?
We can use the splice method to remove an element from an array by simply specifying the position/index that we would like to delete from and how many elements we would like to remove, as follows:

  ```js numbers.splice(5,3);```

This code will remove three elements, starting from index 5 of our array. This means numbers[5], numbers[6], and numbers[7] will be removed from the numbers array. The content of our array will be -3,-2,-1,0,1,5,6,7,8,9,10,11,and12 (asthe numbers 2, 3, and 4 have been removed).


Now, let's say we want to insert numbers 2 to 4 back into the array, starting from position 5. We can again use the splice method to do this:

```js numbers.splice(5, 0, 2, 3, 4);```

The first argument of the method is the index we want to remove elements from or insert elements into. The second argument is the number of elements we want to remove (in this case, we do not want to remove any, so we will pass the value 0 (zero)). And from the third argument onward we have the values we would like to insert into the array (the elements 2, 3, and 4). The output will be values from -3 to 12 again.
Finally, let's execute the following code:

```js numbers.splice(5, 3, 2, 3, 4);```


The output will be values from -3 to 12. This is because we are removing three elements, starting from the index 5, and we are also adding the elements 2, 3, and 4, starting at index 5.


### Two dimensional and multidimensional arrays

At the beginning of this chapter, we used a temperature measurement example. We will now use this example one more time. Let's consider that we need to measure the temperature hourly for a few days. Now that we already know we can use an array to store the temperatures, we can easily write the following code to store the temperatures over 2 days:

```js
let averageTempDay1 = [72, 75, 79, 79, 81, 81];
let averageTempDay2 = [81, 79, 75, 75, 73, 72];
 ```

 However, this is not the best approach; we can do better! We can use a matrix (a two-dimensional array or an array of arrays) to store this information, in which each row will represent the day, and each column will represent an hourly measurement of temperature, as follows

 ```js
   let averageTemp = [];
   averageTemp[0] = [72, 75, 79, 79, 81, 81];
   averageTemp[1] = [81, 79, 75, 75, 73, 73];
 ```

 #### Note:
 JavaScript only supports one-dimensional arrays; it does not support matrices. However, we can implement matrices or any multi-dimensional array using an *array of arrays*, as in the previous code. The same code can also be written as follows:

 ```js
   // day 1
   averageTemp[0] = [];
   averageTemp[0][0] = 72;
   averageTemp[0][1] = 75;
   averageTemp[0][2] = 79;
   averageTemp[0][3] = 79;
   averageTemp[0][4] = 81;
   averageTemp[0][5] = 81;
   // day 2
   averageTemp[1] = [];
   averageTemp[1][0] = 81;
   averageTemp[1][1] = 79;
   averageTemp[1][2] = 75;
   averageTemp[1][3] = 75;
   averageTemp[1][4] = 73;
   averageTemp[1][5] = 73;
 ```

#### Iterating the elements of two dimensional arrays
If we want to verify the output of the matrix, we can create a generic function to log its output:

```js
function printMatrix(myMatrix) {
     for (let i = 0; i < myMatrix.length; i++) {
       for (let j = 0; j < myMatrix[i].length; j++) {
         console.log(myMatrix[i][j]);
} }
}
```

We need to loop through all the rows and columns. To do this, we need to use a nested for loop, in which the variable i represents rows, and j represents the columns. In this case, each myMatrix[i] also represents an array, therefore we also need to iterate each position of myMatrix[i] in the nested for loop.

We can output the contents of the averageTemp matrix using the following code:

```js printMatrix(averageTemp);```


### Array methods
JavaScript arrays are very interesting because they are very powerful and have more capabilities available than primitive arrays in other languages. This means that we do not need to write basic capabilities ourselves, such as adding and removing elements in/from the middle of the data structure.

The following is a list of the core available methods in an array object. We have covered some methods already:



| Method | Description  |
|---------------------|--------------|
|       concat             |   Joins multiple arrays and returns a copy of the joined arrays  |
|    every              | Iterates every element of the array, verifying the desired condition (function) until false is returned. |
| filter                 | Creates an array with each element that evaluates to true in the function provided.  |
| forEach                   | Executes a specific function on each element of the array. |
| join                   | Joins all the array elements into a string. |
| indexOf                 | Searches the array for specific elements and returns its position. |
| lastIndexOf                | Returns the position of the last item in the array that matches the search criterion. |
| map                 | Creates a new array from a function that contains the criterion/condition and returns the elements of the array that match the criterion. |
| reverse                | Reverses the array so that the last item becomes the first and vice versa. |
| slice               | Returns a new array from the specified index. |
| some                 | Iterates every element of the array, verifying the desired condition (function) until true is returned. |
| sort                | Sorts the array alphabetically or by the supplied function. |
| toString               | Returns the array as a string. |
| valueOf                | Similar to the toString method, returns the array as a string. |


Some of these methods are very useful when we work with functional programming

### Joining multiple arrays

