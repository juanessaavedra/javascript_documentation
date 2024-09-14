# JavaScript Documentation
Back to home: [<< Index ](../README.md)

## Object-oriented programming in JavaScript

JavaScript objects are very simple collections of name-value pairs. There are two ways of creating a simple object in JavaScript. The first way is as follows:

```js
var obj = new Object();
```

And the second way is as follows:
```js
var obj = {};
```

We can also create an entire object, as follows:

```js
obj = { name: {
       first: 'Gandalf',
       last: 'the Grey'
     },
     address: 'Middle Earth'
   };
```

As we can see, to declare a JavaScript object, [key, value] pairs are used, where the key can be considered an attribute of the object and the value is the property value. All classes that we will create in this book are JavaScript objects, such as Stack, Set, LinkedList, Dictionary, Tree, Graph, and so on.

In Object-oriented programming (OOP), an object is an instance of a class. A class defines the characteristics of the object. For our algorithms and data structures, we will create some classes that will represent them. This is how we can declare a class (constructor) that represents a book:

```js

   function Book(title, pages, isbn) {
     this.title = title;
     this.pages = pages;
     this.isbn = isbn;
}
```

To instantiate this class, we can use the following code:
```js
   var book = new Book('title', 'pag', 'isbn');
```

Then, we can access its properties and update them as follows:

```js

   console.log(book.title); // outputs the book title
   book.title = 'new title'; // update the value of the book title
   console.log(book.title); // outputs the updated value

```
A class can also contain functions (generally also referred to as methods). We can declare and use a function/method as the following code demonstrates:

```js
Book.prototype.printTitle = function() {
     console.log(this.title);
   };
   book.printTitle();
```

We can declare functions directly inside the class definition as well:
```js
   function Book(title, pages, isbn) {
     this.title = title;
     this.pages = pages;
     this.isbn = isbn;
     this.printIsbn = function() {
       console.log(this.isbn);
}; }
   book.printIsbn();
```











