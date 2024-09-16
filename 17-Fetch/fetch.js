/*
Is a function as an argument we can pass in a relative or absolute file path or a URL. 

I would like to get my Json file person.json. 

I will list the relative file path these files are right next to each other.

Fetch returns a promise we will follow this with the then method.

Then do this. We will be provided with a response object, take our response, response object convert it to a json format using json() method.

response.json also return a Promise.

Then lets display what we have currently.

.then()  take the value arrow
*/



fetch("person.json").then(response => response.json()).then(value => console.log(value))

fetch("names.json").then(response => response.json()).then(value => console.log(value))

fetch("people.json").then(response => response.json()).then(value => console.log(value))

//iF YOU WOULD LIKE TO ITERATE THROUGH ALL THE OBJECTS LET'S RENAME VALUE AS VALUES WE WILL USE FOR EACH METHOD

fetch("people.json").then(response => response.json())
                    .then(values => values.forEach(value => {console.log(value); console.log(value.name)}))
                    .catch(error => console.error(error));