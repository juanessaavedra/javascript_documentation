# JavaScript Documentation
Back to home: [<< Index ](../README.md)

## Operators

We need operators when performing any operation in a programming language. JavaScript also has arithmetic, assignment, comparison, logical, bitwise, and unary operators, among others. Let's take a look at these:
```js
    var num = 0; // {1}
   num = num + 2;
   num = num * 3;
   num = num / 2;
   num++;
num--;
   num += 1; // {2}
   num -= 2;
   num *= 3;
   num /= 2;
num %= 3;
   console.log('num == 1 : ' + (num == 1)); // {3}
   console.log('num === 1 : ' + (num === 1));
   console.log('num != 1 : ' + (num != 1));
   console.log('num > 1 : ' + (num > 1));
   console.log('num < 1 : ' + (num < 1));
   console.log('num >= 1 : ' + (num >= 1));
   console.log('num <= 1 : ' + (num <= 1));
   console.log('true && false : ' + (true && false)); // {4}
   console.log('true || false : ' + (true || false));
   console.log('!true : ' + (!true));
```

In line {1}, we have the arithmetic operators. In the following table, we have the operators and their descriptions:

| Arithmetic operator | Description  |
|---------------------|--------------|
| +                   | Addition     |
| -                   | Subtraction  |
| *                   | Multiplication  |
| /                   | Division  |
| %                   | Modulus (remainder of a division operation) |
| ++                  | Increment  |
| --                  | Decrement  |

In line {2}, we have the assignment operators. In the following table, we have the operators and their descriptions:

