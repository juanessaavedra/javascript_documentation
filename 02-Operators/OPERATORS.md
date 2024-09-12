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

| Assignment operator | Description  |
|---------------------|--------------|
| =                   | Assignment     |
| +=                  | Addition assignment (x += y) == (x = x + y)  |
| -=                   | Subtraction assignment (x -= y) == (x = x - y)  |
| *=                   | Multiplication assignment (x *= y) == (x = x * y) |
| /=                   | Division assignment (x /= y) == (x = x / y) |
| %=                  | Remainder assignment (x %= y) == (x = x % y) |

In line {3}, we have the comparison operators. In the following table, we have the operators and their descriptions:

| Comparison operator | Description                        |
|---------------------|------------------------------------|
| ==                  | Equal to                           |
| ===                 | Equal to (both value and object type) |
| !=                  | Not equal to                       |
| >                   | Greater than                       |
| >=                  | Greater than or equal to           |
| <                   | Less than                          |
| <=                  | Less than or equal to              |

Finally, in line {4}, we have the logical operators. In the following table, we have the operators and their descriptions:

| Logical operator | Description |
|------------------|-------------|
| &&               |      And    |
| ||               |      Or     |
| !                |      Not    |

JavaScript also supports bitwise operators, which are shown as follows:

```js
 console.log('5 & 1:', (5 & 1));
   console.log('5 | 1:', (5 | 1));
   console.log('~ 5:', (~5));
   console.log('5 ^ 1:', (5 ^ 1));
   console.log('5 << 1:', (5 << 1));
   console.log('5 >> 1:', (5 >> 1));
```

The following table contains a more detailed description of the bitwise operators:

| Bitwise operator | Description |
|------------------|-------------|
| &               |      And    |
| |               |      Or     |
| ~                |      Not    |
| ^                |      Xor    |
| <<                |      Left shift    |
| >>                |      Right shift    |


The typeof operator returns the type of the variable or expression. For example, have a look at the following code:


```js
   console.log('typeof num:', typeof num);
   console.log('typeof Packt:', typeof 'Packt');
   console.log('typeof true:', typeof true);
   console.log('typeof [1,2,3]:', typeof [1,2,3]);
   console.log('typeof {name:John}:', typeof {name:'John'});
```

The output will be as follows:

typeof num: number
       typeof Packt: string
       typeof true: boolean
       typeof [1,2,3]: object
       typeof {name:John}: object

**Another example:**

```js
let x = "Hambuburger";
let y = "Hambuburger";
let z = "Hambuburger";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);

console.log(y, typeof y);

console.log(z, typeof z);
```


According to the specification, there are two data types in JavaScript:

- Primitive data types: Null, undefined, string, number, boolean, and symbol
- Derived data types/objects: JavaScript objects, including functions, arrays, and regular expressions


JavaScript also supports the delete operator, which deletes a property from an object:

```js
var myObj = {name: 'John', age: 21};
   delete myObj.age;
   console.log(myObj); //outputs Object {name: "John"}
```

More details here:
[Data Types](./Data%20Types/DATA-TYPES.md)

