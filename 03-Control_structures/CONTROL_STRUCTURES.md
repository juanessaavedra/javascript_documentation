# JavaScript Documentation
Back to home: [<< Index ](../README.md)

## Control structures

JavaScript has a similar set of control structures as the C and Java languages. Conditional statements are supported by if...else and switch. Loops are supported by the while, do...while, and for constructs.

### Conditional statements

The first conditional statement we will take a look at is the if...else construct. There are a few ways we can use the if...else construct.
We can use the if statement if we want to execute a block of code only if the condition (expression) is true, as follows:

```js
 var num = 1;
   if (num === 1) {
     console.log('num is equal to 1');
   }
```

We can use the if...else statement if we want to execute a block of code and the condition is true or another block of code just in case the condition is false (else), as follows:

```js
var num = 0;
   if (num === 1) {
     console.log('num is equal to 1');
   } else {
     console.log('num is not equal to 1, the value of num is ' + num);
   }
```

The if...else statement can also be represented by a ternary operator. For example, take a look at the following if...else statement:
```js
if (num === 1) {
     num--;
   } else {
     num++;
}
```

It can also be represented as follows:
```js
(num === 1) ? num-- : num++;
```

Also, if we have several expressions, we can use if...else several times to execute different blocks of code based on different conditions, as follows:
```js
var month = 5;
   if (month === 1) {
     console.log('January');
   } else if (month === 2) {
    console.log('February');
   } else if (month === 3) {
     console.log('March');
   } else {
     console.log('Month is not January, February or March');
   }
```

Finally, we have the switch statement. If the condition we are evaluating is the same as the previous one (however, it is being compared to different values), we can use the switch statement:

```js
var month = 5;
   switch (month) {
     case 1:
       console.log('January');
       break;
     case 2:
       console.log('February');
       break;
     case 3:
       console.log('March');
       break;
     default:
       console.log('Month is not January, February or March');
}
```

One thing that is very important in a switch statement is the use of the case and break keywords. The case clause determines whether the value of switch is equal to the value of the case clause. The break statement stops the switch statement from executing the rest of the statement (otherwise, it will execute all the scripts from all case clauses below the matched case until a break statement is found in one of the case clauses). Finally, we have the default statement, which is executed by default if none of the case statements are true (or if the executed case statement does not have the break statement).


## Loops

Loops are often used when we work with arrays (which are the subject of the next chapter). Specifically, we use the for loop in our algorithms.
The for loop is the same as in C and Java. It consists of a loop counter that is usually assigned a numeric value, then the variable is compared against another value (the script inside the for loop is executed while this condition is true), and finally, the numeric value is increased or decreased.
In the following example, we have a for loop. It outputs the value of i on the console, where i is less than 10; i is initiated with 0, so the following code will output the values 0 to 9:

```js
    for (var i = 0; i < 10; i++) {
     console.log(i);
}
```

The next loop construct we will look at is the while loop. The block of code inside the while loop is executed while the condition is true. In the following code, we have a variable, i, initiated with the value 0, and we want the value of i to be output while i is less than 10 (or less than or equal to 9). The output will be the values from 0 to 9:

```js
  var i = 0;
   while (i < 10) {
     console.log(i);
    i++; }
```

The do...while loop is similar to the while loop. The only difference is that in the while loop, the condition is evaluated before executing the block of code, and in the do...while loop, the condition is evaluated after the block of code is executed. The do...while loop ensures that the block of code is executed at least once. The following code also outputs the values from 0 to 9:

```js
    var i = 0; do {
     console.log(i);
     i++;
   } while (i < 10);
```



















