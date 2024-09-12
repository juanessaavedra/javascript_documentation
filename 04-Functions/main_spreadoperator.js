/* Allows an iterable such as an array or string to be expanded
 into separate elements (unpacks the elements). Opening a box and
  taking out all the contents */

  let numbers = [1,2,3,4,5];

  let maximum = Math.max(...numbers);
  console.log(maximum);
  
  let minimum = Math.min(...numbers);
  console.log(minimum);
  
  let username = "Juanes Saavedra"
  let letters = [...username];
  console.log(letters);
  
  let username2 = "Juanito Saavedra";
  let letters2 = [...username2].join("-");
  console.log(letters2);
  
  //Different arrays but they contain identical elements
  let fruits = ["apple", "orange", "banana"];
  let newFruits = [...fruits];
  
  
  
  //We can combine two or more arrays using the spred operator
  let vegetables = ["carrots", "celery", "potatoes"];
  let foods1 = [...fruits, ...vegetables];
  
  
  let foods2 = [...fruits, ...vegetables, "eggs", "milk"];
  console.log(foods2);
  
  
  //Literal los une en un solo array, NO es como yo pensaba que era un array donde dentro tiene dos arrays