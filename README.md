# JavaScript Documentation

| Page |                                                                       Topics                                                                        |
| ----- | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| 01    |                                                             [Introduction](./README.md)                                                             |
| 02    |                                               [Variables](./01-Variables/VARIABLES.md)                                                |




## Introduction

JavaScript is a very powerful language. It is one of the most popular languages in the world and is one of the most prominent languages on the internet. JavaScript is not a language that can only be used in the frontend. It can also be used in the backend, and Node.js is the technology responsible for this.

JavaScript can also be used for mobile development and is one of the most popular frameworks in Apache Cordova ([https://cordova.apache.org](https://cordova.apache.org/)), which is a mobile hybrid framework that allows developers to code using HTML, CSS, and JavaScript, which allows you to build an app and generate an APK file for Android and IPA file for iOS (Apple). And of course, let's not forget about desktop applications. We can write desktop applications compatible with Linux, Mac OS, and Windows using a JavaScript framework called Electron ([https://electron.atom.io](https://electron.atom.io/)). JavaScript is also used in embedded and Internet of Things (IoT) devices. As you can see, JavaScript is everywhere!
JavaScript is a must-have on your resume if you are or are becoming a web developer.
In this documentation, you will learn the syntax and some necessary basic functionalities of JavaScript so that we can start developing our own data structures and algorithms. We will cover:
Setting up the environment and JavaScript basics Controlling structures and functions Object-oriented programming in JavaScript Debugging and tools

## Environment

In this documentation we will use Visual Studio Code for the examples

## JavaScript Basics

To start, let's look at the two different ways we can use JavaScript code on an HTML page. The first example is demonstrated by the following code. We need to create an HTML file (01-HelloWorld.html) and write this code in it. In this example, we are declaring the script tag inside the HTML file and, inside the script tag, we have the JavaScript code:

**First Example:**

```html
<!DOCTYPE html>
   <html>
     <head>
       <meta charset="UTF-8">
     </head>
     <body>
       <script>
         alert('Hello, World!');
       </script>
     </body>
</html>

```

**Second Example:**
For the second example, we need to create a JavaScript file (we can save it as 01- HelloWorld.js) and, inside this file, we will insert the following code:

```js
alert('Hello, World!');

```

Then, our HTML file will look similar to this:

```html
<!DOCTYPE html>
   <html>
     <head>
       <meta charset="UTF-8">
       <title></title>
     </head>
     <body>
       <script src="01-HelloWorld.js"></script>
     </body>
</html>

```

The second example demonstrates how to include a JavaScript file inside an HTML file.


Next page: [ Variables>> ](./01-variables/VARIABLES.md)