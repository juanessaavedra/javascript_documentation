const fruits = [{name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 90},
     {name: "banana", color: "yellow", calories: 9},
      {name: "cocnut", color: "white", calories: 100}
   ]
   
   fruits[0].name;
   console.log(fruits[4].name);
   
   fruits.push({name: "pineapple", color:"yello", calories: 10});
   console.log(fruits);
   
   fruits.pop(); //Remove the last element
   
   fruits.splice(1,2);
   
   fruits.forEach(fruit => console.log(fruit));
   fruits.forEach(fruit => console.log(fruit.name));
   fruits.forEach(fruit => console.log(color));
   
   //Map
   
   const fruitNames = fruits.map(fruit => fruit.name); //It gives an array of names
   console.log(fruitNames);
   
   
   //Filter
   const yellowFruits = fruits.filter(fruit => fruit.color == "yellow");
   console.log(yellowFruits);
   
   const lowCalFruits = fruits.filter (fruit => filter.calories < 100);
   
   //Reduce
   const maxFruit = fruits.reduce((max, fruit) => //(accumulator, element)
                   fruit.calories > max.calories ? fruit : max); 
   
   const minFruit = fruits.reduce((min, fruit) => //(accumulator, element)
                   fruit.calories < min.calories ? fruit : min); 
                   
   console.log(maxFruit);
   console.log(minFruit);
   
   