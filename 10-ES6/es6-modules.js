/* An external file that contains reusable code that can be imported into other Javascript files.
 Write reusable code for many different apps. Can contain variables, classses, functions and more Introduced as part of ECMAScript 2015 update*/

//Name: mathUtil.js

export const PI = 3.14159;

export function getCircumference(radius){
	return 2* PI * radius;
}

export function getArea(radius){
	return PI * (radius**2)
}




